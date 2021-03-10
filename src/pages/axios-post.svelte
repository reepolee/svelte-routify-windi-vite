<script>
  import axios from "axios";
  import Heading from "@/components/Heading.svelte";
  
  const url = "https://jsonplaceholder.typicode.com/posts";
  const body = JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  });
  const headers = { "Content-type": "application/json; charset=UTF-8" };

  let result = "Response will render here";

  function doCall() {
    axios
      .post(url, body, headers)
      .then((response) => (result = JSON.stringify(response, undefined, 2)));
  }
</script>

<Heading>https://jsonplaceholder.typicode.com/guide/</Heading>

<button on:click={doCall}> Make an API POST call </button>

<pre>
  {result}
</pre>

<style>
  p {
    @apply p-8;
  }
  pre {
    @apply mx-8 p-8 border rounded border-gray-400;
  }

  button {
    @apply bg-red-500 text-white m-8 p-2 border border-gray-200 rounded;
  }
</style>
