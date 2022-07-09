<template>
	<div class="flex justify-end">
		<div class="flex w-4/5 flex-col justify-end">
			<h2 class="ml-20 text-center text-3xl text-blue-400">
				{{ headline }}
			</h2>
			<div class="h-2 bg-blue-400" />
		</div>
	</div>
</template>

<script setup>
defineProps({
	headline: { type: String, default: "Lore Ipsum" },
});
</script>
