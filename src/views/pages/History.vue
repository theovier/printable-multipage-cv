<template>
	<page>
		<template #header>
			<page-header headline="Curriculum Vitae" />
		</template>
		<work-history />
		<skills />
	</page>
</template>

<script setup>
import Page from "@/views/pages/Page.vue";
import PageHeader from "@/components/headers/PageHeader.vue";
import WorkHistory from "@/components/sections/WorkHistorySection.vue";
import Skills from "@/components/sections/SkillsSection.vue";
</script>
