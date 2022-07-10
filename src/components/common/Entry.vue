<template>
	<div class="flex justify-between text-sm">
		<div class="w-full">{{ cue }}</div>
		<div class="mr-10 w-full">
			<div class="font-semibold">
				{{ title }}
			</div>
			<div>
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	cue: { type: String, required: true },
	title: { type: String, default: "" },
});
</script>
