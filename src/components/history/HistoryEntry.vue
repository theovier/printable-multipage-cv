<template>
	<div class="flex justify-between text-sm">
		<div class="w-full">{{ from }} <span>&#8212;</span> {{ to }}</div>
		<div class="mr-10 w-full">
			<div class="font-semibold">
				{{ title }}
			</div>
			<div class="">
				{{ description }}
			</div>
			<div>
				{{ addition }}
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	from: { type: String, required: true },
	to: { type: String, default: "today" },
	title: { type: String, default: "" },
	description: { type: String, default: "" },
	addition: { type: String, default: "" },
});
</script>
