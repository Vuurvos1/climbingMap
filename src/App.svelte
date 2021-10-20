<script>
  import { onMount } from 'svelte';
  import { gyms } from './store';
  import * as d3 from 'd3';

  import {
    getContrast,
    getRouteColor,
    getRouteColorVars,
  } from './modules/colorHelpers';
  import { gradeConverter } from './modules/gradeConverter';

  import { fetchGymData } from './modules/fetchGymData';

  import GymSelect from './components/GymSelect.svelte';
  import RoutePreview from './components/RoutePreview.svelte';
  import Menu from './components/Menu.svelte';

  let showRouteData = false;

  let climbs = [];
  let gymSvg = '';
  let groups;
  let climb;

  let dotScale = 1;

  let routesElement;

  let selectedGym = {};
  // $: selectedGym, console.log('changed gym');

  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  $: windowWidth, mapSetup();
  $: windowHeight, mapSetup();

  function svgFunc(node, svg) {
    return {
      update() {
        d3ify(climbs, groups);

        // this adds double routes > clear svg first?
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
    const svg = d3
      .select('svg.flex')
      .attr('width', windowWidth)
      .attr('height', windowHeight);
  }

  function d3ify(climbData, groups) {
    // update these on resize.
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

    routesElement = svg
      .select('#zoom_layer')
      .attr('transform', `translate(${-bbox.x}, ${-bbox.y})`)
      .append('g')
      .attr('class', 'routes');

    // scale this based on zoom instead of dots
    climbs = routesElement
      .selectAll('g')
      .data(climbData)
      .enter()
      .append('g')
      .attr(
        'transform',
        (d) =>
          `translate(${bbox.width * d.position_x}, ${
            bbox.height * d.position_y
          })`
      )

      .on('click', (e, d) => {
        e.stopPropagation();
        climb = d;
        showRouteData = true;

        const scale = (bbox.width / windowWidth) * 0.75;

        const x = bbox.width * d.position_x - bbox.x;
        const y = bbox.height * d.position_y - bbox.y;

        const xOff = windowWidth / 2 - 2.5; // 2.5 arbitrary number
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
      .append('foreignObject')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 40)
      .attr('height', 40);

    climbs
      .append('xhtml:div')
      .html((d) => {
        // TODO update to be based on route type and gym grading
        return gradeConverter(d.grade, 'french_boulder');
      })
      .attr('style', (d) => getRouteColorVars(d.id, groups))
      .style('color', (d) => getContrast(getRouteColor(d.id, groups)));

    const zoomEl = svg.select('.zoom');

    // not sure if translateExtents gives the right effect of
    // clamping map to withing viewport
    const zoomPadding = 150;

    const zoom = d3
      .zoom()
      .translateExtent([
        [-zoomPadding, -zoomPadding],
        [bbox.width + zoomPadding, bbox.height + zoomPadding],
      ]) // change these values to be more dynamic and based on scale
      .scaleExtent([0.1, 2.5])
      .on('zoom', (e, d) => {
        zoomEl.attr('transform', e.transform);

        // maybe scale the group that contains all climbs?
        dotScale = Math.round((1 / e.transform.k) * 100) / 100;
        // dotScale = 1 / e.transform.k;
        // routes.attr('style', `--dot-scale: ${1 / e.transform.k}`);
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

  onMount(async () => {
    // fetch all data
    [climbs, groups, gymSvg] = await fetchGymData(8, 'bruut_boulder_breda');

    let frame;

    function loop() {
      frame = requestAnimationFrame(loop);

      // logic
      if (routesElement) {
        routesElement.attr('style', `--dot-scale: ${dotScale}`);
      }
    }

    loop();

    return () => cancelAnimationFrame(frame);
  });
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

<Menu
  on:changeGym={async (e) => {
    selectedGym = e.detail;

    // console.log(e.detail);

    // refetch routes
    [climbs, groups, gymSvg] = await fetchGymData(
      selectedGym.id,
      selectedGym.id_name
    );

    console.log(climbs, groups);
  }}
/>

<main>
  <div class="svgContainer" use:svgFunc={gymSvg}>
    {@html gymSvg}
  </div>

  {#if showRouteData}
    <RoutePreview
      data={climb}
      on:click={() => {
        showRouteData = false;
      }}
    />
  {/if}
</main>

<style>
  .svgContainer {
    width: calc(100vw - (100vw - 100%));
    height: 100vh;
  }

  :global(.routes foreignObject) {
    overflow: visible;
    cursor: pointer;
  }

  :global(.routes div) {
    width: 40px;
    height: 40px;
    background: var(--dot-col);
    position: relative;

    border-radius: 5rem;

    text-align: center;
    vertical-align: middle;
    line-height: 38px;

    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.35);

    transform: scale(var(--dot-scale));
  }

  :global(.white) {
    fill: var(--white);
  }

  :global(.black) {
    fill: var(--black);
  }
</style>
