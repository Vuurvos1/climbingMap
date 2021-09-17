<script>
  export let data;
</script>

<div class="preview">
  <h3>Route data</h3>

  <pre>
    { JSON.stringify(data, undefined, 2) }
  </pre>
</div>

<style>
  .preview {
    position: fixed;

    bottom: 1rem;
    right: 1rem;

    border-radius: 1rem;
  }
</style>
