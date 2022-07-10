<template>
	<div>
		<section-header text="Education" />
		<div class="space-y-8">
			<entry
				from="10/2020"
				title="Paderborn University"
				description="Computer Science Student, M.Sc."
			/>
			<entry
				from="08/2018"
				to="08/2020"
				description="Scholarship Deutschlandstipendium"
			/>
			<entry
				from="10/2016"
				to="03/2018"
				title="Wonderland University"
				description="Student of the Really Long Name Stuff Stuff Stuff Stuff."
				addition="(Abschlussnote: 1.0)"
			/>
			<entry
				from="10/2013"
				to="09/2016"
				title="Police Academy"
				description="Police Car Goes Brooom Broom"
				addition="Academic Minor: Math/Physics"
			/>
			<entry
				from="08/2005"
				to="09/2013"
				title="Hawkins High"
				description="Saving the World and Stuff"
				addition="(Abschlussnote: 1.3)"
			/>
		</div>
	</div>
</template>

<script setup>
import SectionHeader from "@/components/headers/SectionHeader.vue";
import Entry from "@/components/history/HistoryEntry.vue";
</script>
