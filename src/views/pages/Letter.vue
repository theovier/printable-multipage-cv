<template>
	<page>
		<template #header>
			<div class="space-y-16">
				<letter-header
					:company="company"
					:department="department"
					:contact="contact"
					:street="street"
					:postal="city"
					:date="date"
					:place="place"
				/>
				<page-header :headline="headline" />
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

const headline = import.meta.env.VITE_COVER_LETTER_HEADLINE;
const company = import.meta.env.VITE_COVER_LETTER_COMPANY;
const department = import.meta.env.VITE_COVER_LETTER_DEPARTMENT;
const contact = import.meta.env.VITE_COVER_LETTER_CONTACT;
const street = import.meta.env.VITE_COVER_LETTER_ADDRESS_STREET;
const city = import.meta.env.VITE_COVER_LETTER_ADDRESS_CITY;
const date = import.meta.env.VITE_COVER_LETTER_DATE;
const place = import.meta.env.VITE_COVER_LETTER_PLACE;
</script>
