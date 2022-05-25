<script>
  export let disabled = false;

  let isPanning = false;
  let zoom = 1;
  const zoomAmounts = [10, 5, 3, 2, 1, 0.5, 0.1];
  let x = 0;
  let y = 0;
  // panning
  let initialPointerX = 0;
  let initialPointerY = 0;
  let panDeltaX = 0;
  let panDeltaY = 0;

  let scale = 1;

  function onPanningStart(ev) {
    if (disabled) return;

    ev.preventDefault();
    ev.stopPropagation();

    isPanning = true;
    initialPointerX = ev.clientX;
    initialPointerY = ev.clientY;
    panDeltaX = 0;
    panDeltaY = 0;

    console.log('onPanningStart');
  }

  function onPanning(ev) {
    if (!isPanning) return;
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
    zoom += Math.sign(ev.deltaY);
    if (zoom < 0) zoom = 0;
    if (zoom >= zoomAmounts.length) {
      zoom = zoomAmounts.length - 1;
    }
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

<div class="wrapper" on:mousewheel={onWheel}>
  <div
    class="content"
    style:transform="translate3d({x + panDeltaX}px, {y + panDeltaY}px, 0) scale({zoomAmounts[
      zoom
    ]})"
  >
    <slot />
  </div>
</div>

<style>
  .wrapper {
    position: relative;
    width: fit-content;
    height: fit-content;
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
