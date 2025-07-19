<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from './button.component.svelte';

	const { Story } = defineMeta({
		title: 'Base/Button',
		tags: ['autodocs'],
		component: Button,
		argTypes: {
			label: { control: 'text', description: 'Button label', defaultValue: 'Button' },
			color: {
				control: 'radio',
				options: ['primary', 'caution'],
				defaultValue: 'primary'
			},
			variant: { control: 'radio', options: ['filled', 'outlined'], defaultValue: 'filled' }
		}
	});
</script>

<Story name="Default" />
