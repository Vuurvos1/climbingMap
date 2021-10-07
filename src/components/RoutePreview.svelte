<script>
  export let data;

  import { fade, blur, fly, slide, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { dateConvert } from '../modules/helpers';
  import { gradeConverter } from '../modules/gradeConverter';
</script>

{#if data}
  <div class="preview" transition:slide={{ duration: 200, easing: quintOut }}>
    <div class="preview__header">
      <h3>Route data</h3>

      <button on:click>
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
          class="feather feather-chevron-down"
          ><polyline points="6 9 12 15 18 9" /></svg
        >
      </button>
    </div>

    <ul>
      <li>grade: {gradeConverter(data.grade, 'french_boulder')}</li>
      <li>ascends: {data.nr_of_ascends}</li>
      <li>average opinion: {data.average_opinion}/5.0</li>
      <li>date set: {dateConvert(data.date_set)}</li>
    </ul>

    <!-- <pre>
      { JSON.stringify(data, undefined, 2) }
    </pre> -->
  </div>
{/if}

<style>
  h3 {
    margin-right: auto;
  }

  button {
    background: none;
    border: none;
    line-height: 0;
  }

  .preview {
    position: fixed;
    bottom: 0;
    left: 0;

    width: 100vw;

    padding: 1rem 1rem;

    background-color: var(--white);
    box-shadow: var(--shadow-1);
  }

  .preview__header {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 1rem;
  }

  li {
    list-style: none;
  }

  @media screen and (min-width: 32rem) {
    .preview {
      width: initial;
      right: 1rem;
      left: initial;
      bottom: 1rem;
    }
  }
</style>
