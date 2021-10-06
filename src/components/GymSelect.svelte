<script>
  import { createEventDispatcher, onMount } from 'svelte';
  // import fetchGymData from '../modules/fetchGymData.js';
  import { gyms } from '../store.js';

  let selected;

  const dispatch = createEventDispatcher();

  onMount(async () => {
    if ($gyms == null) {
      console.log('fetching gyms');
      const data = await fetch('https://api.toplogger.nu/v1/gyms/');
      const json = await data.json();
      gyms.set(json);
    }
  });
</script>

<div class="select">
  <label for="gym">Gym</label>
  <select
    name=""
    id="gym"
    bind:value={selected}
    on:change={() => {
      // update data
      // console.log(selected);
      dispatch('change', selected);
    }}
  >
    {#if $gyms}
      {#each $gyms as gym}
        <option value={gym}>{gym.name}</option>
      {/each}
    {/if}
  </select>
</div>

<style>
  .select {
    padding: 1rem;
  }
</style>
