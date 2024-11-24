<script lang="ts">
  import SignIn from './lib/components/SignIn.svelte';
</script>

<main>
  <SignIn />
</main>

<style>
  main {
    min-height: 100vh;
    background: #f7fafc;
  }

  :global(body) {
    margin: 0;
    background: #f7fafc;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  :global(button) {
    font-family: inherit;
  }
</style>
