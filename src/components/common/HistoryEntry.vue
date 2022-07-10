<template>
	<entry :cue="duration" :title="title">
		<slot />
	</entry>
</template>

<script setup>
import Entry from "@/components/common/Entry.vue";
import { computed } from "vue";

const duration = computed(() => {
	return props.from + " — " + props.to;
});

const props = defineProps({
	from: { type: String, required: true },
	to: { type: String, default: "today" },
	title: { type: String, default: "" },
});
</script>
