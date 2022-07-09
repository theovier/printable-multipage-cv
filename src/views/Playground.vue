<template>
	<cover />
	<history />
	<page>
		<template #header>
			<page-header headline="Sonstiges" />
		</template>
	</page>
</template>

<script setup>
import Cover from "@/views/pages/Cover.vue";
import History from "@/views/pages/History.vue";
import Page from "@/views/pages/Page.vue";
import PageHeader from "@/components/headers/PageHeader.vue";
</script>
