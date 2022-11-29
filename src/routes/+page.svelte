<script>

</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<article class="prose lg:prose-xl">
    <h1>Garlic bread with cheese: What the science tells us</h1>
    <p>For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.</p>
    <p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.</p>

    <div class="tooltip" data-tip="hello">
        <button class="btn">Hover me</button>
    </div>


    <div class="form-control w-full max-w-xs">
        <label class="label">
            <input type="range" min="0" max="100" value="40" class="range" />	
        </label>
        <label class="label input-group">
            <input type="number" placeholder="Type here" class="input w-full max-w-xs" />
        </label>
    </div>

    <div class="btn-group btn-group-horizontal">
      <button class="btn btn-active">Button</button>
      <button class="btn">Button</button>
      <button class="btn">Button</button>
    </div>
    <div class="form-control">
      <div class="input-group">
        <input type="text" placeholder="Search…" class="input input-bordered" />
        <button class="btn btn-square">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
    </div>

    <button class="btn btn-primary">Button</button>

    <div class="form-control w-full max-w-xs">
        <label class="label">
            <span class="label-text">Pick a file</span>
            <span class="label-text-alt">Alt label</span>
        </label>
        <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
        <label class="label">
            <span class="label-text-alt">Alt label</span>
            <span class="label-text-alt">Alt label</span>
        </label>
    </div>

    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
</article>
<style>
</style>
