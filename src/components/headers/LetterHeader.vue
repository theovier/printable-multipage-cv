<template>
	<div class="mx-24 flex items-end justify-between text-sm">
		<div>
			<div>{{ company }}</div>
			<div>{{ department }}</div>
			<div>{{ contact }}</div>
			<div>{{ street }}</div>
			<div>{{ postal }}</div>
		</div>
		<div>{{ place }}, the {{ date }}</div>
	</div>
</template>

<script setup>
defineProps({
	company: { type: String, required: true },
	department: { type: String, default: null },
	contact: { type: String, default: null },
	street: { type: String, required: true },
	postal: { type: String, required: true },
	date: { type: String, required: true },
	place: { type: String, required: true },
});
</script>
