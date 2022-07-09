<template>
	<div class="mt-10 mb-5">
		<h2 class="ml-1 text-lg text-blue-400">
			{{ text }}
		</h2>
		<div class="h-px bg-blue-400" />
	</div>
</template>

<script setup>
defineProps({
	text: { type: String, default: "Lore Ipsum" },
});
</script>
