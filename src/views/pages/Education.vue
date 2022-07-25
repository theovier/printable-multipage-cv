<template>
	<page>
		<template #header>
			<page-header headline="Curriculum Vitae" />
		</template>
		<personal />
		<education />
		<awards />
	</page>
</template>

<script setup>
import Page from "@/views/pages/Page.vue";
import PageHeader from "@/components/headers/PageHeader.vue";
import Personal from "@/components/sections/PersonalSection.vue";
import Education from "@/components/sections/EducationSection.vue";
import Awards from "@/components/sections/AwardsSection.vue";
</script>
