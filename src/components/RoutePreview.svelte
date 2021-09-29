<script>
  export let data;

  import { dateConvert } from '../modules/helpers';
</script>

{#if data}
  <div class="preview">
    <h3>Route data</h3>

    <ul>
      <li>grade: {data.grade}</li>
      <li>ascends: {data.nr_or_ascends}</li>
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
    margin-bottom: 1ch;
  }

  .preview {
    position: fixed;

    bottom: 1rem;
    right: 1rem;

    padding: 1rem 2rem;

    border-radius: 1rem;
    background-color: var(--white);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
</style>
