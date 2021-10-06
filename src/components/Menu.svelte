<script>
  import GymSelect from './GymSelect.svelte';

  let menuOpen = false;
</script>

<header>
  <label for="menuToggle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-menu"
      ><line x1="3" y1="12" x2="21" y2="12" /><line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
      /><line x1="3" y1="18" x2="21" y2="18" /></svg
    >
  </label>
  <input type="checkbox" id="menuToggle" bind:checked={menuOpen} />

  <div class="menu" class:open={menuOpen}>
    <GymSelect
      on:change={async (e) => {
        // console.log(e.detail);
        // const data = await fetchGymData(e.detail.id, e.detail.id_name);
        // gymSvg = await data.svg;
        // d3ify(data.climbs, data.groups);
      }}
    />
  </div>
</header>

<!-- <GymSelect
    on:change={async (e) => {
      // console.log(e.detail);
      const data = await fetchGymData(e.detail.id, e.detail.id_name);
      gymSvg = await data.svg;

      // d3ify(data.climbs, data.groups);
    }}
  /> -->
<style>
  header {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;

    padding: 0.5rem 1rem;

    display: flex;
    align-items: center;

    z-index: 25;

    background-color: #fff;
  }

  input[type='checkbox'] {
    display: none;
    width: 0;
    height: 0;
  }

  .menu {
    position: fixed;
    top: 0;
    left: 0;

    height: 100vh;
    width: 20rem;

    z-index: -10;

    padding-top: 4rem;

    background-color: #fff;

    transform: translateX(-100%);
    transition: transform 0.2s ease;
  }

  .menu.open {
    transform: translateX(0);
  }
</style>
