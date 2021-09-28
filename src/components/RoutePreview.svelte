<script>
  export let data;
</script>

<div class="preview">
  <h3>Route data</h3>

  {#if data}
    <ul>
      <li>grade: {data.grade}</li>
      <li>ascends: {data.nr_or_ascends}</li>
      <li>average opinion: {data.average_opinion}/5.0</li>
      <!-- convert data to dd mm yyyy -->
      <li>date set: {Date.parse(data.date_set)}</li>
    </ul>

    <!-- <pre>
      { JSON.stringify(data, undefined, 2) }
    </pre> -->
  {/if}
</div>

<style>
  h3 {
    margin-bottom: 1ch;
  }

  .preview {
    position: fixed;

    bottom: 1rem;
    right: 1rem;

    border-radius: 1rem;

    background-color: var(--white);
    border-radius: 1rem;
    padding: 1rem 2rem;
  }
</style>
