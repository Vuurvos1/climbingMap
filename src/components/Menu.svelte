<script>
  import { createEventDispatcher } from 'svelte';

  import GymSelect from './GymSelect.svelte';

  // import { fetchGymData } from '../modules/fetchGymData';
  const dispatch = createEventDispatcher();

  let menuOpen = false;

  export let selectedGym;
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
      on:change={(e) => {
        selectedGym = e.detail;
        // console.log(e.detail);

        dispatch('changeGym', e.detail);
      }}
    />
  </div>
</header>

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

    background-color: var(--white);
    box-shadow: var(--shadow-1);
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
    max-width: 100vw;

    z-index: -10;

    padding-top: 4rem;

    background-color: var(--white);

    box-shadow: var(--shadow-1);

    transform: translateX(-110%);
    transition: transform 0.2s ease;
  }

  .menu.open {
    transform: translateX(0);
  }
</style>
