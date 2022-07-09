<template>
	<h2 class="text-3xl text-green-600">
		{{ headline }}
	</h2>
</template>

<script setup>
defineProps({
	headline: { type: String, default: "Lore Ipsum" },
});
</script>
