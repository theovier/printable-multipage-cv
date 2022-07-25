<template>
	<div>
		<section-header text="Education" />
		<entry-list>
			<entry from="10/2020" title="Paderborn University">
				Computer Science Student, M.Sc.
			</entry>
			<entry from="10/2016" to="03/2018" title="Wonderland University">
				<p>Student of the Really Long Name Stuff Stuff Stuff Stuff.</p>
				<p>(Abschlussnote: 1.0)</p>
			</entry>
			<entry from="10/2013" to="09/2016" title="Police Academy">
				<p>Police Car Goes Brooom Broom</p>
				<p>Academic Minor: Math/Physics</p>
			</entry>
			<entry from="08/2005" to="09/2013" title="Hawkins High">
				<p>Saving the World and Stuff</p>
				<p>(Abschlussnote: 1.3)</p>
			</entry>
		</entry-list>
	</div>
</template>

<script setup>
import SectionHeader from "@/components/headers/SectionHeader.vue";
import EntryList from "@/components/common/EntryList.vue";
import Entry from "@/components/common/HistoryEntry.vue";
</script>
