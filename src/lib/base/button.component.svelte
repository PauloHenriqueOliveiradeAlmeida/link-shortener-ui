<script lang="ts">
	type ButtonProps = {
		label: string;
		variant: 'filled' | 'outlined';
		color: 'primary' | 'dark' | 'caution';
	};
	const { label, color, variant }: ButtonProps = $props();

	const dynamicStyle: Record<`${typeof color}-${typeof variant}`, string> = {
		'primary-filled':
			'bg-primary border-2 border-primary text-light hover:bg-primary/80 hover:border-primary/80',
		'primary-outlined':
			'bg-light text-primary border-2 border-primary hover:bg-light*20 hover:border-primary*20',
		'dark-filled': 'bg-dark border-2 border-dark text-light',
		'dark-outlined': 'bg-light text-dark border-2 border-dark',
		'caution-filled': 'bg-caution border-2 border-caution text-light',
		'caution-outlined': 'bg-light text-caution border-2 border-caution'
	} as const;
</script>

<button
	class="cursor-pointer rounded-2xl px-6 py-2 text-sm font-bold uppercase transition outline-none
	{dynamicStyle[`${color}-${variant}`]}"
>
	{label}
</button>
