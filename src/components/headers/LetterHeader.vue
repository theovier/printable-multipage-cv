<template>
	<div class="mx-24 flex justify-between text-sm">
		<div>
			<div>
				{{ company }}
			</div>
			<div>
				{{ street }}
			</div>
			<div>
				{{ postal }}
			</div>
		</div>
		<div>{{ place }}, den {{ date }}</div>
	</div>
</template>

<script setup>
defineProps({
	company: { type: String, required: true },
	street: { type: String, required: true },
	postal: { type: String, required: true },
	date: { type: String, required: true },
	place: { type: String, required: true },
});
</script>
