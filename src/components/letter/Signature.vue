<template>
	<div class="space-y-6">
		<div>{{ valediction }}</div>
		<img src="src/assets/signature.png" class="mt-2 h-16" />
		<div>{{ author }}</div>
	</div>
</template>

<script setup>
defineProps({
	valediction: { type: String, default: "Sincerely yours," },
	author: { type: String, required: true },
});
</script>
