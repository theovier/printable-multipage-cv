<template>
	<div>
		<section-header text="Personal Data" />
		<div class="space-y-2">
			<entry cue="Name">{{ name }}</entry>
			<entry cue="Date of Birth">{{ birthday }}, {{ bornIn }}</entry>
			<entry cue="Email">{{ email }}</entry>
		</div>
	</div>
</template>

<script setup>
import SectionHeader from "@/components/headers/SectionHeader.vue";
import Entry from "@/components/common/Entry.vue";

const name = import.meta.env.VITE_FULL_NAME;
const email = import.meta.env.VITE_EMAIL;
const birthday = import.meta.env.VITE_BIRTHDAY;
const bornIn = import.meta.env.VITE_BORN_IN;

</script>
