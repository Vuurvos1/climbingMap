<script>
  import { onMount } from 'svelte';

  let gyms = [];
  let selected;

  onMount(async () => {
    const data = await fetch('https://api.toplogger.nu/v1/gyms/');
    gyms = await data.json();

    console.log(gyms);
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
      console.log(selected);
    }}
  >
    {#each gyms as gym}
      <option value={gym}>{gym.name}</option>
    {/each}
  </select>
</div>

<style>
  .select {
    position: fixed;

    top: 1rem;
    left: 1rem;

    padding: 1rem;

    background-color: #c1c1c1;
    border-radius: 1rem;
  }
</style>
