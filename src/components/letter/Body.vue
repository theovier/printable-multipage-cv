<template>
	<div class="mt-20 space-y-8 text-sm">
		<div class="space-y-8">
			<div>Sehr geehrte Damen und Herren,</div>
			<div class="space-y-2">
				<p>
					leverage agile frameworks to provide a robust synopsis for
					high level overviews. Iterative approaches to corporate
					strategy foster collaborative thinking to further the
					overall value proposition.
				</p>
				<p>
					Organically grow the holistic world view of disruptive
					innovation via workplace diversity and empowerment. Bring to
					the table win-win survival strategies to ensure proactive
					domination.
				</p>
				<p>
					At the end of the day, going forward, a new normal that has
					evolved from generation X is on the runway heading towards a
					streamlined cloud solution. User generated content in
					real-time will have multiple touchpoints for offshoring.
				</p>
				<p>
					Capitalize on low hanging fruit to identify a ballpark value
					added activity to beta test. Override the digital divide
					with additional clickthroughs from DevOps. Nanotechnology
					immersion along the information highway will close the loop
					on focusing solely on the bottom line.
				</p>
			</div>
		</div>
		<signature author="Herbert Testoramus" />
	</div>
</template>

<script setup>
defineProps({
	farewell: { type: String, default: "Mit freundlichen Grüßen" },
	author: { type: String, required: true },
});

import Signature from "@/components/letter/Signature.vue";
</script>
