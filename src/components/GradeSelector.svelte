<script>
  import { createEventDispatcher } from 'svelte';
  import { gradeSystem } from '../store';

  let selected;

  const gradeSystems = [
    { name: 'same as gym', value: undefined },
    { name: 'uiaa', value: 'uiaa' },
    { name: 'yds', value: 'yds' },
    { name: 'French', value: 'french' },
    { name: 'French boulder', value: 'french_boulder' },
    { name: 'French rounded', value: 'french_rounded' },
    { name: 'ewbank', value: 'ewbank' },
    { name: 'British', value: 'british' },
    { name: 'V Grade', value: 'v_grade' },
  ];

  const dispatch = createEventDispatcher();
</script>

<div class="p-4">
  <label class="mb-1 block font-bold" for="gradeSystem">Grade system</label>
  <select
    class="px-2 py-0.5 border-2 rounded w-full"
    name=""
    id="gradeSystem"
    bind:value={selected}
    on:change={() => {
      gradeSystem.set(selected);

      dispatch('change', selected);
    }}
  >
    {#each gradeSystems as grade}
      <option value={grade.value}>{grade.name}</option>
    {/each}
  </select>
</div>

<style>
</style>
