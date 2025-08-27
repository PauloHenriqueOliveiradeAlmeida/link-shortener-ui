<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	export type InputProps = {
		label: string;
		errorMessage?: string;
	} & HTMLInputAttributes;

	let { label = '', errorMessage = '', id, class: className, ...props }: InputProps = $props();
</script>

<div class={`border-dark flex flex-col ${className}`}>
	<label
		for={id ?? `input-${label?.toLowerCase() ?? ''}`}
		class={`pl-0.5 font-bold transition ${errorMessage ? 'text-caution' : 'text-dark'}`}
		>{label}</label
	>
	<input
		id={id ?? `input-${label?.toLowerCase() ?? ''}`}
		{...props}
		type="text"
		class={` outline-primary-dark rounded border-2 transition outline-none ${errorMessage ? 'text-caution' : 'text-dark'} ${errorMessage ? 'border-caution' : 'border-dark'}`}
	/>
	{#if errorMessage}
		<p class="text-caution pl-1.5 text-xs">{errorMessage}</p>
	{/if}
</div>
