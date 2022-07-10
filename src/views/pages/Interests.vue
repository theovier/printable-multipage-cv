<template>
	<page>
		<template #header>
			<page-header headline="Lebenslauf" />
		</template>
		<hobby />
	</page>
</template>

<script setup>
import Page from "@/views/pages/Page.vue";
import PageHeader from "@/components/headers/PageHeader.vue";
import Hobby from "@/components/sections/HobbySection.vue";
</script>
