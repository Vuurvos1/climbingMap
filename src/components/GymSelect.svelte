<script>
  import { createEventDispatcher } from 'svelte';
  import { gyms } from '../stores.js';
  if ($gyms == null || Object.keys($gyms).length == 0) {
    getGyms();
  }

  let selected;
  const dispatch = createEventDispatcher();

  async function getGyms() {
    const data = await fetch('https://api.toplogger.nu/v1/gyms/');
    const json = await data.json();
    gyms.set(json);
    return json;
  }
</script>

<div class="p-4">
  <label class="mb-1 block font-bold" for="gym">Gym</label>
  <select
    class="px-2 py-0.5 border-2 rounded w-full"
    name=""
    id="gym"
    bind:value={selected}
    on:change={() => {
      // update data
      dispatch('change', selected);
    }}
  >
    {#if Object.keys($gyms).length != 0 && $gyms}
      {#each $gyms as gym}
        <option value={gym}>{gym.name}</option>
      {/each}
    {/if}
  </select>
</div>

<style>
</style>
