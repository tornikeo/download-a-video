<script>
    import Range from "$lib/components/Range.svelte";
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">My awesome model</h1>
            <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
            </p>
        </div>

        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
                <div class="tooltip" data-tip="hello">
                    <button class="btn">Hover me</button>
                </div>

                <Range value="25" />

                <div class="btn-group btn-group-horizontal">
                    <button class="btn btn-active">Button</button>
                    <button class="btn">Button</button>
                    <button class="btn">Button</button>
                </div>
                <div class="form-control">
                    <div class="input-group">
                        <input
                            type="text"
                            placeholder="Search…"
                            class="input input-bordered"
                        />
                        <button class="btn btn-square">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                /></svg
                            >
                        </button>
                    </div>
                </div>
            <button class="btn btn-primary">Button</button>
            </div>
        </div>
    </div>
</div>

<style>
</style>
