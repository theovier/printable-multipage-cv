<template>
	<div>
		<section-header text="Interests" />
		<div class="space-y-8">
			<entry cue="Game Development">
				Development of 2D and 3D video games
			</entry>
			<entry cue="Cooking">
				Appreciation for a healthy and balanced diet
			</entry>
			<entry cue="Fitness">
				Swimming, running, weight lifting, physical activity in general
			</entry>
		</div>
	</div>
</template>

<script setup>
import SectionHeader from "@/components/headers/SectionHeader.vue";
import Entry from "@/components/common/Entry.vue";
</script>
