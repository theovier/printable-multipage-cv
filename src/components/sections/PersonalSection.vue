<template>
	<div>
		<section-header text="Personal Data" />
		<div class="space-y-2">
			<entry cue="Name">John Doe</entry>
			<entry cue="Date of Birth">27.04.1997, Germany</entry>
		</div>
	</div>
</template>

<script setup>
import SectionHeader from "@/components/headers/SectionHeader.vue";
import Entry from "@/components/common/Entry.vue";
</script>
