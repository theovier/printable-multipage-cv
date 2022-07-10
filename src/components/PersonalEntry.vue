<template>
	<div class="flex justify-between text-sm">
		<div class="w-full">{{ name }}</div>
		<div class="mr-10 w-full">
			<div class="">
				{{ content }}
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	name: { type: String, required: true },
	content: { type: String, default: "" },
});
</script>
