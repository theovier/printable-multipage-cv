<template>
	<div>
		<section-header text="Personal Skills" />
		<entry-list>
			<entry cue="Drivers Licence"
				>German Driver's Licence (Class B)</entry
			>
			<entry cue="Language Proficiency">
				<div>English (CEF-Level C1)</div>
				<div>Spanish (CEF-Level B2)</div>
				<div>Advanced proficiency certificate in Latin</div>
			</entry>
		</entry-list>
	</div>
</template>

<script setup>
import SectionHeader from "@/components/headers/SectionHeader.vue";
import EntryList from "@/components/common/EntryList.vue";
import Entry from "@/components/common/Entry.vue";
</script>
