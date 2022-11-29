
<script>
	import { createEventDispatcher } from "svelte";

	export let value = 50;
	export let minimum = 0;
	export let maximum = 100;
	export let step = 1;
	export let disabled = false;
	export let label;
	export let show_label;

	const dispatch = createEventDispatcher();
	dispatch("change", value);
	const clamp = () => (value = Math.min(Math.max(value, minimum), maximum));
</script>

<div class="flex flex-nowrap flex-row">
	<input
		type="range"
		class="range"
		bind:value
		min={minimum}
		max={maximum}
		{step}
		{disabled}
		/>

	<input
		type="number"
		class="input-ghost text-center h-6 w-24 appearance-none"
		bind:value
		min={minimum}
		max={maximum}
		on:blur={clamp}
		{step}
		{disabled}
	/>
	
</div>