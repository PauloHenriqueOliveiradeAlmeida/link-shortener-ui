<script lang="ts">
	export type ButtonProps = {
		label: string;
		variant: 'filled' | 'outlined';
		color: 'primary' | 'caution';
	};

	let { label = '', color = 'primary', variant = 'filled' }: ButtonProps = $props();

	const dynamicStyle: Record<`${typeof color}-${typeof variant}`, string> = {
		'primary-filled':
			'bg-primary border-2 border-primary text-light hover:bg-primary-light hover:border-primary-light',
		'primary-outlined':
			'bg-light text-primary border-2 border-primary hover:bg-gray hover:border-primary',
		'caution-filled':
			'bg-caution border-2 border-caution text-light hover:bg-caution-light hover:border-caution-light',
		'caution-outlined': 'bg-light text-caution border-2 border-caution hover:bg-gray'
	} as const;
</script>

<button
	class="cursor-pointer rounded-2xl px-6 py-2 text-sm font-bold uppercase transition outline-none
	{dynamicStyle[`${color}-${variant}`] ?? dynamicStyle['primary-filled']}"
	data-testid={`button-${label?.toLowerCase() ?? ''}`}
>
	{label}
</button>
