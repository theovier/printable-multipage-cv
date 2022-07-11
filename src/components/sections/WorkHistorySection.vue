<template>
	<div>
		<section-header text="Experience" />
		<entry-list>
			<entry from="09/2018" to="today" title="Arbeitssuchend" />
			<entry
				v-for="i in 2"
				from="08/2017"
				to="08/2018"
				title="Some Job Title"
			>
				Doing stuff as usual, Germany
			</entry>
			<entry from="08/2017" to="08/2018" title="Arbeitssuchend" />
			<entry
				v-for="i in 3"
				from="08/2017"
				to="08/2018"
				title="Some Job Title"
			>
				Doing stuff as usual, Germany
			</entry>
		</entry-list>
	</div>
</template>

<script setup>
import SectionHeader from "@/components/headers/SectionHeader.vue";
import EntryList from "@/components/common/EntryList.vue";
import Entry from "@/components/common/HistoryEntry.vue";
</script>
