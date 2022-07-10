<template>
	<cover />
	<letter />
	<history />
	<page>
		<template #header>
			<page-header headline="Sonstiges" />
		</template>
		<personal />
		<education />
		<skills />
	</page>
</template>

<script setup>
import Cover from "@/views/pages/Cover.vue";
import Letter from "@/views/pages/Letter.vue";
import History from "@/views/pages/History.vue";
import Page from "@/views/pages/Page.vue";
import PageHeader from "@/components/headers/PageHeader.vue";
import Personal from "@/components/sections/PersonalSection.vue";
import Education from "@/components/sections/EducationSection.vue";
import Skills from "@/components/sections/SkillsSection.vue";
</script>
