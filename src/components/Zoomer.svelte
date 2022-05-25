<script>
  import { spring } from 'svelte/motion';
  import { writable } from 'svelte/store';

  export let disabled = false;

  let isPanning = false;

  let zoom = 1;
  // disable scroll snapping?
  // const zoomAmounts = [20, 10, 5, 3, 2, 1, 0.5];
  // const actualZoom = spring(zoomAmounts[zoom]);
  // const actualZoom = spring(zoomAmounts[zoom]);
  // $: actualZoom.set(zoomAmounts[zoom]);

  let x = 0;
  let y = 0;
  // panning
  let initialPointerX = 0;
  let initialPointerY = 0;
  let panDeltaX = 0;
  let panDeltaY = 0;

  // let scale = 1;

  function onPanningStart(ev) {
    if (disabled) return;

    // ev.preventDefault();
    // ev.stopPropagation();

    isPanning = true;
    initialPointerX = ev.clientX;
    initialPointerY = ev.clientY;
    panDeltaX = 0;
    panDeltaY = 0;

    console.log('onPanningStart');
  }

  function onPanning(ev) {
    if (!isPanning) return;
    // TODO clamp these values
    panDeltaX = ev.clientX - initialPointerX;
    panDeltaY = ev.clientY - initialPointerY;
  }

  function onPanningStop(ev) {
    console.log('onPanningStop');
    isPanning = false;
    x += panDeltaX;
    y += panDeltaY;
    panDeltaX = 0;
    panDeltaY = 0;
  }

  function onWheel(ev) {
    let newZoom = Math.max(0.1, Math.min(zoom + ev.deltaY / 1000, 10));

    const rect = ev.currentTarget.getBoundingClientRect();
    const mouseX = (ev.clientX - rect.left) / zoom;
    const mouseY = (ev.clientY - rect.top) / zoom;

    console.log(mouseX, mouseY, zoom);
    const scaleDifference = newZoom - zoom;

    zoom = newZoom;
    x -= mouseX * scaleDifference;
    y -= mouseY * scaleDifference;

    // let newZoom = zoom + ev.deltaY;
    // if (newZoom < 0) zoom = 0;
    // if (newZoom > 40) newZoom = 40;
    // // if (newZoom >= zoomAmounts.length) newZoom = zoomAmounts.length - 1;
    // const scaleDifference = ev.deltaY;
    // console.log(scaleDifference);
    // zoom = newZoom;
    // x -= mouseX * scaleDifference;
    // y -= mouseY * scaleDifference;
  }
</script>

<svelte:window
  on:pointerdown={onPanningStart}
  on:pointermove={onPanning}
  on:pointerup={onPanningStop}
/>

<!-- <svelte:body
  on:mouseleave={() => {
    // 'clear panning';
  }} /> -->

<div class="wrapper">
  <div
    class="content"
    on:mousewheel={onWheel}
    style:transform="translate3d({x + panDeltaX}px, {y + panDeltaY}px, 0) scale({zoom})"
  >
    <slot />
  </div>
</div>

<style>
  .wrapper {
    position: relative;
    /* width: fit-content;
    height: fit-content; */
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 0;
    padding: 0;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    height: fit-content;
    margin: 0;
    padding: 0;
    transform-origin: 0% 0%;
  }
</style>
