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

  function d3ify() {
    // const size = document.querySelector('.svgContainer');
    // const w = size.clientWidth;
    // const h = size.clientHeight;

    const svg = d3.select('svg.flex');

    const zoom = d3
      .zoom()
      .scaleExtent([0.1, 2.5])
      .on('zoom', (e) => {
        const el = d3.select('g#zoom_layer');
        el.attr('transform', e.transform);
      });

    svg.call(zoom);
    d3.select('g#zoom_layer').on('click', (e, d) => {
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
  }

  // https://cdn1.toplogger.nu/images/gyms/bruut_boulder_breda/floorplan.svg
  // https://api.toplogger.nu/v1/gyms/8/climbs?json_params=%7B%22filters%22:%7B%22deleted%22:false,%22live%22:true%7D%7D

  onMount(async () => {
    // doing this is kinda jucky but it works, having await blocks would be nicer

    await fetchData();
    await fetchSvg();

    d3ify();
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
    width: 100rem;
    height: 100rem;
  }
</style>
