<template>
	<div>
		<section-header text="Interests" />
		<div class="space-y-8">
			<entry
				name="Game Development"
				content="Development of 2D and 3D video games"
			/>
			<entry
				name="Cooking"
				content="Appreciation for a healthy and balanced diet"
			/>
			<entry
				name="Fitness"
				content="Swimming, running, weight lifting, physical activity in general"
			/>
		</div>
	</div>
</template>

<script setup>
import SectionHeader from "@/components/headers/SectionHeader.vue";
import Entry from "@/components/PersonalEntry.vue";
</script>
