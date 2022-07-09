<template>
	<div class="space-y-6">
		<div>{{ farewell }}</div>
		<img src="src/assets/signature.png" class="mt-2 h-10" />
		<div>{{ author }}</div>
	</div>
</template>

<script setup>
defineProps({
	farewell: { type: String, default: "Mit freundlichen Grüßen" },
	author: { type: String, required: true },
});
</script>
