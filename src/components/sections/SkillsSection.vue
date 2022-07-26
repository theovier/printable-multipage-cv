<template>
	<div>
		<section-header text="Personal Skills" />
		<entry-list>
			<entry cue="Drivers Licence"
				>German Driver's Licence (Class B)</entry
			>
			<entry cue="Language Proficiency">
				<div class="space-y-2">
					<div>
						<div class="font-semibold">English</div>
						<div>CEF-Level C1</div>
					</div>
					<div>
						<div class="font-semibold">Spanish</div>
						<div>CEF-Level B2</div>
					</div>
					<div>
						<div class="font-semibold">Latin</div>
						<div>Advanced proficiency certificate</div>
					</div>
				</div>
			</entry>
		</entry-list>
	</div>
</template>

<script setup>
import SectionHeader from "@/components/headers/SectionHeader.vue";
import EntryList from "@/components/common/EntryList.vue";
import Entry from "@/components/common/Entry.vue";
</script>
