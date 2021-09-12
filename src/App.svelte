<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';

  const baseUrl = 'https://api.toplogger.nu/v1';

  let climbs = [];
  let svg = '';

  async function fetchData() {
    const filters = {
      filters: {
        deleted: false,
        live: true,
      },
    };

    const url = `${baseUrl}/gyms/8/climbs?json_params=${encodeURIComponent(
      JSON.stringify(filters)
    )}`;

    const res = await fetch(url);
    const data = await res.json();

    if (res) {
      climbs = data;
      return data;
    } else {
      throw new Error(data);
    }
  }

  async function fetchSvg() {
    const url =
      'https://cdn1.toplogger.nu/images/gyms/bruut_boulder_breda/floorplan.svg';

    const res = await fetch(url);
    const data = await res.text();

    if (res) {
      svg = data;
      return data;
    } else {
      throw new Error(data);
    }
  }

  function afterComma(float) {
    // turn first digit of a number into a 0 (this will break if more than 2 digits before 0)
    return float.replace(/^./g, '0');
  }

  function gradeConverter(val) {
    // convert these to strings?
    const gradeBase = ~~Number(val);
    let gradeMod = afterComma(val);

    // 2+
    // 2.75
    if (val < 3) {
      gradeMod = val;
    }

    // a  a+  b   b+  c   c+
    // .0 .17 .33 .5  .67 .83
    const gradeLookup = {
      '2.75': '+',
      '0.0': 'a',
      '0.17': 'a+',
      '0.33': 'b',
      '0.5': 'b+',
      '0.67': 'c',
      '0.83': 'c+',
    };

    const modifier = gradeLookup[gradeMod] ? gradeLookup[gradeMod] : '';

    return `${gradeBase}${modifier}`;
  }

  function gradeColor(grade) {
    // return a color based on a boulder grade
    const gradeBase = String(~~Number(grade));
    // console.log(gradeBase);

    /*
    2/3a
    3/4a
    4c/5a
    black yellow f9ff00 0c0505

    red ce0000
    green 0f480c
    yellow dcd138
    orange ff7200
    black 000000
    pink ff00ed
    blue 0093ff
    purple 822fe0
    lime 05ff00
    white
    
    */

    const gradeColors = {
      // '2'
      // '3a'
      // ''
      // '4'
      // '5'
      // '6'
      // '7'
      // '8'
      // '9'
    };

    return gradeColor[gradeBase];
  }

  function routeColor(climb_id, groups) {
    // filter groups arr > climb_group > climb_id > if match get name
    let name = groups.filter((el, i) => {
      for (const item of el.climb_groups) {
        if (item.climb_id == climb_id) {
          return el;
        } else {
          false;
        }
      }
    });

    // console.log(name);
    if (name.length < 1) {
      name = 'aaa';
    } else {
      name = name[0].name;
    }

    // color lookup table
    const colors = {
      red: 'ce0000',
      green: '0f480c',
      yellow: 'dcd138',
      orange: 'ff7200',
      black: '000000',
      pink: 'ff00ed',
      blue: '0093ff',
      purple: '822fe0',
      lime: '05ff00',
      white: 'ffffff',
    };

    // color fallback if not defined
    const col = colors[name.toLowerCase()]
      ? colors[name.toLowerCase()]
      : '0000ff';

    return col;
  }

  function d3ify(climbData, groups) {
    const dotSize = 20;

    const size = document.querySelector('svg.flex');
    const w = size.clientWidth;
    const h = size.clientHeight;
    const svg = d3.select('svg.flex');

    // const bbox = svg.select('#zoom_layer').node().getBBox();
    // console.log('bbox', bbox);
    // console.log();
    // svg.select('#zoom_layer').attr('transform', () => {
    //   return `translate(${-bbox.x}, ${-bbox.y})`;
    // });

    const routes = svg
      .select('#zoom_layer')
      .append('g')
      .attr('class', 'routes');

    // scale this based on zoom instead of dots
    climbs = routes
      .selectAll('g')
      .data(climbData)
      .enter()
      .append('g')
      .attr('transform', (d) => {
        return `translate(${x(d.position_x)}, ${y(d.position_y)}) scale(${1})`;
      })
      .attr('class', 'route')

      .on('click', (e, d) => {
        console.log(d);

        // zoom in into dot
      })
      .append('g')
      .attr('class', 'scale');

    climbs
      .append('circle')
      .attr('r', dotSize)
      .style('fill', (d) => `#${routeColor(d.id, groups)}`);

    climbs
      .append('text')
      .attr('dy', 5)
      .text((d) => {
        return gradeConverter(d.grade);
      })
      .attr('text-anchor', 'middle');
    // base text color on background color

    const zoom = d3
      .zoom()
      .scaleExtent([0.1, 2.5])
      .translateExtent([
        [-6000, -5000],
        [5000, 6000],
      ]) // change these values to be more dynamic
      .on('zoom', (e, d) => {
        const el = d3.select('g#zoom_layer');
        el.attr('transform', e.transform);

        // this is probably a bad way of doing this lol
        routes.selectAll('g.scale').attr('transform', () => {
          return `scale(${1 / e.transform.k})`;
        });
      });

    //setup zoom and initial zoom
    const bbox = svg.select('#zoom_layer').node().getBBox();
    svg
      .call(zoom)
      .call(
        zoom.transform,
        d3.zoomIdentity.translate(-bbox.x, -bbox.y).scale(1)
      );

    svg.select('#zoom_layer').attr('transform', () => {
      return `translate(${-bbox.x}, ${-bbox.y}) scale(1)`;
    });

    d3.select('g#zoom_layer').on('click', (e, d) => {
      // console.log('clicked a thing');
      /*
      e.stopPropagation();
      // const size = document.querySelector('#zoom_layer');
      // console.log(size);
      // const w = size.clientWidth;
      // const h = size.clientHeight;

      const w = svg.node().getBoundingClientRect().width;
      const h = svg.node().getBoundingClientRect().height;

      const el = d3.select('g#zoom_layer');
      const box = el.node().getBoundingClientRect();
      console.log(box);
      const elw = box.width;
      const elh = box.height;

      // get clicked bounds?
      console.log('clicked svg', w, h);

      // const [[x0, y0], [x1, y1]] = d3.path.bounds(d);

      e.stopPropagation();

      svg
        .transition()
        .duration(750)
        .call(
          zoom.transform,
          d3.zoomIdentity
            .translate(elw / 2, elh / 2)
            .scale(Math.min(8, 0.9 / Math.max(elw / w, elh / h)))
            .translate(-(box.left + box.right) / 2, -(box.top + box.bottom) / 2)
        );

      */
    });

    d3.selectAll('g.map-region').on('click', (e) => {
      e.stopPropagation();

      const x = svg.node(e).getBBox();
      const size = document.querySelector('svg.flex');
      const width = size.clientWidth;
      const height = size.clientHeight;
      console.log(width, height);

      console.log('click map region', x, e);

      // svg
      //   .transition()
      //   .duration(750)
      //   .call(
      //     zoom.transform,
      //     d3.zoomIdentity
      //       .translate(width / 2, height / 2)
      //       .scale(Math.min( Math.max()))
      //       .translate(-x.x / 2, -x.y / 2)
      //   );

      /*
      const [[x0, y0], [x1, y1]] = path.bounds(d);

      const size = document.querySelector('svg.flex');
      const width = size.clientWidth;
      const height = size.clientHeight;

      svg
        .transition()
        .duration(750)
        .call(
          zoom.transform,
          d3.zoomIdentity
            .translate(width / 2, height / 2)
            .scale(
              Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height))
            )
            .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
          d3.pointer(e, svg.node())
        );
      // zoom into map regeon
      */
    });

    // svg.call(
    //   zoom.transform,
    //   zoomIdentity
    //     .translate(w / 2, h / 2)
    //     .scale(
    //       Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height))
    //     )
    // );

    // set zoom
    // svg.call(
    //   zoom.transform,
    //   d3.zoomIdentity,
    //   d3.zoomTransform(svg.node()).invert([w / 2, h / 2])
    // );

    function x(val) {
      const map = d3.select('g#zoom_layer');

      const w = map.node().getBoundingClientRect().width;
      return w * val;
    }

    function y(val) {
      const map = d3.select('g#zoom_layer');

      const h = map.node().getBoundingClientRect().height;
      return h * val;
    }
  }

  async function fetchGroups() {
    const filters = {
      filters: {
        gym_id: 8,
        deleted: false,
        live: true,
        score_system: 'none',
      },
      includes: ['climb_groups'],
    };

    const url = `${baseUrl}/groups?json_params=${encodeURIComponent(
      JSON.stringify(filters)
    )}`;

    const res = await fetch(url);
    const data = await res.json();

    if (res) {
      climbs = data;
      return data;
    } else {
      throw new Error(data);
    }
  }

  // https://cdn1.toplogger.nu/images/gyms/bruut_boulder_breda/floorplan.svg
  // https://api.toplogger.nu/v1/gyms/8/climbs?json_params=%7B%22filters%22:%7B%22deleted%22:false,%22live%22:true%7D%7D

  onMount(async () => {
    // doing this is kinda jucky but it works, having await blocks would be nicer

    const climbs = await fetchData();
    // console.log(climbs);
    const groups = await fetchGroups();
    // console.log(climbs, groups);

    await fetchSvg();

    // console.log(routeColor(133938, groups));

    d3ify(climbs, groups);
  });
</script>

<main>
  <div class="svgContainer">
    <!-- {#await fetchSvg()}
      <p>loading svg</p>
    {:then svg} -->
    {@html svg}
    <!-- {:catch error}
      <p style="color: red">{error.message}</p>
    {/await} -->
  </div>

  <!-- {#await fetchData()}
    <p>fetching data</p>
  {:then items} -->
  <ul>
    <!-- {#each climbs as climb}
      <li>
        <pre>
						{JSON.stringify(climb, null, 2)}
					</pre>
      </li>
    {/each} -->
  </ul>
  <!-- {:catch error}
    <p style="color: red">{error.message}</p>
  {/await} -->
</main>

<style>
  .svgContainer {
    width: calc(100vw - (100vw - 100%));
    height: 100vh;
  }

  :global(.route) {
    cursor: pointer;
  }
</style>
