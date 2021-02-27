<script>
  import axios from "axios";
  const url = "https://jsonplaceholder.typicode.com/posts";
  const body = JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  });
  const headers = { "Content-type": "application/json; charset=UTF-8" };

  let result = "";

  function doCall() {
    debugger;
    axios.post(url, body, headers).then((response) => (result = JSON.stringify(response, undefined, 2)));
  }
</script>

<p>https://jsonplaceholder.typicode.com/guide/</p>

<button on:click={doCall}> Make an API POST call </button>

<pre>
  {result}
</pre>

<style>
  p {
    @apply p-8;
  }

  button {
    @apply bg-red-500 text-white m-12 p-2 border border-gray-200 rounded;
  }
</style>
