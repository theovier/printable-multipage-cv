<template>
	<div>
		<section-header text="Personal Data" />
		<div class="space-y-2">
			<entry name="Name" content="John Doe" />
			<entry name="Date of Birth" content="27.04.1997, Germany" />
		</div>
	</div>
</template>

<script setup>
import SectionHeader from "@/components/headers/SectionHeader.vue";
import Entry from "@/components/PersonalEntry.vue";
</script>
