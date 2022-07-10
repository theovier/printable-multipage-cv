<template>
	<div>
		<section-header text="Interests" />
		<entry-list>
			<entry cue="Game Development">
				Development of 2D and 3D video games
			</entry>
			<entry cue="Cooking">
				Appreciation for a healthy and balanced diet
			</entry>
			<entry cue="Fitness">
				Swimming, running, weight lifting, physical activity in general
			</entry>
		</entry-list>
	</div>
</template>

<script setup>
import SectionHeader from "@/components/headers/SectionHeader.vue";
import Entry from "@/components/common/Entry.vue";
import EntryList from "@/components/common/EntryList.vue";
</script>
