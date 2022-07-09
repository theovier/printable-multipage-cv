<template>
	<div class="flex justify-between text-sm">
		<div class="w-full">{{ from }} <span>&#8212;</span> {{ to }}</div>
		<div class="w-full">
			<div class="font-semibold">
				{{ title }}
			</div>
			<div class="">
				{{ description }}
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	from: { type: String, required: true },
	to: { type: String, default: "heute" },
	title: { type: String, default: "Globex Corporation" },
	description: { type: String, default: "" },
});
</script>
