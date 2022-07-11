<template>
	<letter />
	<education />
	<history />
	<interests />
	<page>
		<template #header>
			<page-header headline="Sonstiges" />
		</template>
	</page>
</template>

<script setup>
import Letter from "@/views/pages/Letter.vue";
import History from "@/views/pages/History.vue";
import Education from "@/views/pages/Education.vue";
import Interests from "@/views/pages/Interests.vue";
import Page from "@/views/pages/Page.vue";
import PageHeader from "@/components/headers/PageHeader.vue";
</script>
