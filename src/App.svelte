<script>
  import { onMount } from 'svelte';
  // import { gyms } from './store';
  import * as d3 from 'd3';

  import { getContrast, routeColor } from './modules/colorHelpers';
  import { gradeConverter } from './modules/gradeConverter';

  import GymSelect from './components/GymSelect.svelte';
  import RoutePreview from './components/RoutePreview.svelte';
  import fetchGymData from './modules/fetchGymData';

  const baseUrl = 'https://api.toplogger.nu/v1';

  let climbs = [];
  let gymSvg = '';
  let climb;

  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  $: windowWidth, mapSetup();
  $: windowHeight, mapSetup();

  function svgFunc(node, svg) {
    return {
      update() {
        // console.log('updated svg', svg, node);
        // this adds double routes > clear svg first?
        // also breaks constant scale dots
        // d3ify();
      },
      destroy() {
        // console.log('destroyed', node);
      },
    };
  }

  function mapSetup() {
    // console.log('map setup');
    // set width and height
    // set zoom
    // const svg = d3
    //   .select('svg.flex')
    //   .attr('width', windowWidth)
    //   .attr('height', windowHeight);
  }

  function d3ify(climbData, groups) {
    const dotSize = 20;

    // update these on resize.
    // const w = windowWidth;
    // const h = windowHeight;
    const svg = d3
      .select('svg.flex')
      .attr('width', windowWidth)
      .attr('height', windowHeight);

    // each has to not be an arrow function or "this" will be undefined
    d3.selectAll('g#zoom_layer').each(function () {
      let el = this;
      d3.select(el.parentNode)
        .insert('g')
        .attr('class', 'zoom')
        .append(() => el);
    });

    // normalize floorplan translation and scale
    const bbox = svg.select('#zoom_layer').node().getBBox();

    const routes = svg
      .select('#zoom_layer')
      .attr('transform', `translate(${-bbox.x}, ${-bbox.y})`)
      .append('g')
      .attr('class', 'routes');

    // scale this based on zoom instead of dots
    climbs = routes
      .selectAll('g')
      .data(climbData)
      .enter()
      .append('g')
      .attr('transform', (d) => {
        return `translate(${bbox.width * d.position_x}, ${
          bbox.height * d.position_y
        })`;
      })
      .attr('class', 'route')

      .on('click', (e, d) => {
        e.stopPropagation();
        climb = d;

        const scale = (bbox.width / windowWidth) * 0.75;

        const x = bbox.width * d.position_x - bbox.x;
        const y = bbox.height * d.position_y - bbox.y;

        const xOff = windowWidth / 2 - 2.5; // 2.5 = half the dot size
        const yOff = windowHeight / 2 - 2.5;

        svg
          .transition()
          .duration(500)
          .call(
            zoom.transform,
            d3.zoomIdentity
              .translate(-x * scale + xOff, -y * scale + yOff)
              .scale(scale)
          );
      })
      .append('g')
      .attr('class', 'scale');

    climbs
      .append('circle')
      .attr('r', dotSize)
      .style('fill', (d) => `#${routeColor(d.id, groups)}`);

    // TODO base text color on background color
    climbs
      .append('text')
      .attr('dy', 5)
      .text((d) => {
        // TODO update to be based on route type and gym grading
        return gradeConverter(d.grade, 'french_boulder');
      })
      .attr('class', (d) => {
        return getContrast(routeColor(d.id, groups));
      })
      .attr('text-anchor', 'middle');

    const zoom = d3
      .zoom()
      .scaleExtent([0.1, 2.5])
      // .translateExtent([
      //   [-6000, -5000],
      //   [5000, 6000],
      // ]) // change these values to be more dynamic and based on scale
      .on('zoom', (e, d) => {
        svg.select('.zoom').attr('transform', e.transform);

        // this is probably a bad way of doing this lol
        climbs.attr('transform', `scale(${1 / e.transform.k})`);
      });

    //setup zoom and initial zoom
    const baseScale = (windowHeight / bbox.height) * 0.9;
    const baseX = windowWidth / 2 - (bbox.width / 2) * baseScale;
    const baseY = windowHeight / 2 - (bbox.height / 2) * baseScale;
    svg
      .call(zoom)
      .call(
        zoom.transform,
        d3.zoomIdentity.translate(baseX, baseY).scale(baseScale)
      );

    svg
      .select('.zoom')
      .attr('transform', `translate(${baseX}, ${baseY}) scale(${baseScale})`);

    // zoom into map region on click
    d3.selectAll('g.map-region').on('click', function (e) {
      e.stopPropagation();
      // zoom into map region
      const nodeBox = svg.select(`#${this.id}`).node().getBBox();

      const scale = (windowHeight / nodeBox.height) * 0.8;

      const x = -(nodeBox.x - bbox.x) * scale;
      const y = -(nodeBox.y - bbox.y) * scale;

      const yOff = windowHeight / 2 - (nodeBox.height / 2) * scale;
      const xOff = windowWidth / 2 - (nodeBox.width / 2) * scale;

      svg
        .transition()
        .duration(500)
        .call(
          zoom.transform,
          d3.zoomIdentity.translate(x + xOff, y + yOff).scale(scale)
        );
    });
  }

  // https://cdn1.toplogger.nu/images/gyms/bruut_boulder_breda/floorplan.svg
  // https://api.toplogger.nu/v1/gyms/8/climbs?json_params=%7B%22filters%22:%7B%22deleted%22:false,%22live%22:true%7D%7D

  function svgUrl(gymName) {
    const url = `https://cdn1.toplogger.nu/images/gyms/${gymName}/floorplan.svg`;
    return url;
  }

  function climbsUrl(gymId) {
    const filters = {
      filters: {
        deleted: false,
        live: true,
      },
    };

    const url = `${baseUrl}/gyms/${gymId}/climbs?json_params=${encodeURIComponent(
      JSON.stringify(filters)
    )}`;

    return url;
  }

  function groupsUrl(gymId) {
    const filters = {
      filters: {
        gym_id: gymId,
        deleted: false,
        live: true,
        score_system: 'none',
      },
      includes: ['climb_groups'],
    };

    const url = `${baseUrl}/groups?json_params=${encodeURIComponent(
      JSON.stringify(filters)
    )}`;

    return url;
  }

  onMount(async () => {
    let climbs, groups;

    [climbs, groups, gymSvg] = await Promise.all([
      fetch(climbsUrl(8)),
      fetch(groupsUrl(8)),
      fetch(svgUrl('bruut_boulder_breda')),
    ])
      .then((res) => {
        return Promise.all([res[0].json(), res[1].json(), res[2].text()]);
      })
      .then((data) => {
        gymSvg = data[2];
        return data;
      })
      .catch((err) => {
        throw new Error(err);
      });

    // console.log(climbs, groups, svg);
    // console.log(routeColor(133938, groups));

    d3ify(climbs, groups);
  });
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

<main>
  <div class="svgContainer" use:svgFunc={gymSvg}>
    {@html gymSvg}
  </div>

  <!-- <GymSelect
    on:change={async (e) => {
      // console.log(e.detail);
      const data = await fetchGymData(e.detail.id, e.detail.id_name);
      gymSvg = await data.svg;

      // d3ify(data.climbs, data.groups);
    }}
  /> -->
  <RoutePreview data={climb} />
</main>

<style>
  .svgContainer {
    width: calc(100vw - (100vw - 100%));
    height: 100vh;
  }

  :global(.route) {
    cursor: pointer;

    /* use filter instead of box shadow because it is an svg element */
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.35));
  }

  :global(.white) {
    fill: var(--white);
  }

  :global(.black) {
    fill: var(--black);
  }
</style>
