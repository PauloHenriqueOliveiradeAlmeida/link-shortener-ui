<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TextInput from './text-input.component.svelte';

	const { Story } = defineMeta({
		title: 'Base/TextInput',
		tags: ['autodocs'],
		component: TextInput,
		argTypes: {
			label: { control: 'text', description: 'Input label', defaultValue: 'Label:' },
			errorMessage: { control: 'text', description: 'Input error message', defaultValue: '' },
			placeholder: {
				control: 'text',
				description: 'Input placeholder',
				defaultValue: 'Placeholder'
			},
			value: { control: 'text', description: 'Input value', defaultValue: '' },
			disabled: { control: 'boolean', description: 'Input disabled', defaultValue: false },
			readonly: { control: 'boolean', description: 'Input readonly', defaultValue: false }
		}
	});
</script>

<Story name="Default" />
