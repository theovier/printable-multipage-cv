<template>
	<page>
		<template #header>
			<page-header headline="Lebenslauf" />
		</template>
		<section-header text="Beruflicher Werdegang" />
		<div class="space-y-8">
			<entry
				v-for="i in 5"
				from="08/2017"
				to="08/2018"
				title="Some Job Title"
				description="Doing stuff as usual, Germany"
			/>
			<entry from="08/2017" to="08/2018" title="Arbeitssuchend" />
			<entry
				v-for="i in 5"
				from="08/2017"
				to="08/2018"
				title="Some Job Title"
				description="Doing stuff as usual, Germany"
			/>
		</div>
	</page>
</template>

<script setup>
import Page from "@/views/pages/Page.vue";
import PageHeader from "@/components/headers/PageHeader.vue";
import SectionHeader from "@/components/headers/SectionHeader.vue";
import Entry from "@/components/history/HistoryEntry.vue";
</script>
