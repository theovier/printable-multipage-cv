<template>
	<page>
		<template #header>
			<div class="space-y-16">
				<letter-header
					company="My Company"
					street="Goethe Straße 11"
					postal="60010 Tel Aviv"
					date="10.07.2022"
					place="Münster"
				/>
				<page-header headline="Bewerbung als Software-Entwickler" />
			</div>
		</template>
		<letter-body />
	</page>
</template>

<script setup>
import Page from "@/views/pages/Page.vue";
import PageHeader from "@/components/headers/PageHeader.vue";
import LetterHeader from "@/components/headers/LetterHeader.vue";
import LetterBody from "@/components/letter/Body.vue";
</script>
