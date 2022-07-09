<template>
	<cover />
	<page>
		<page-header headline="Lebenslauf" />
		<section-header text="Beruflicher Werdegang" />
	</page>
	<page>
		<page-header headline="Sonstiges" />
	</page>
</template>

<script setup>
import Cover from "@/views/pages/Cover.vue";
import Page from "@/views/pages/Page.vue";
import PageHeader from "@/components/PageHeader.vue";
import SectionHeader from "@/components/SectionHeader.vue";
</script>
