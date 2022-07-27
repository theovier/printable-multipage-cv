<template>
	<page>
		<template #header>
			<div class="h-16"/>
			<page-header headline="Application" />
		</template>

		<div class="mt-20">
			<div class="flex justify-around">
				<div class="">
					<div class="text-2xl text-slate-700 font-semibold">{{ name }}</div>
					<div class="mt-8 space-y-6">
						<div class="flex items-center space-x-4">
							<font-awesome-icon icon="envelope" class="text-lg text-blue-400" />
							<div>{{ email }}</div>
						</div>
						<div class="flex items-center space-x-4">
							<font-awesome-icon :icon="['fab', 'github']" class="text-lg text-blue-400" />
							<div>{{ github }}</div>
						</div>
						<div class="flex items-center space-x-4">
							<font-awesome-icon icon="phone" class="text-lg text-blue-400"/>
							<div>{{ phone }}</div>
						</div>
						<div>
							<div class="flex items-center space-x-4">
								<font-awesome-icon icon="home" class="text-lg text-blue-400"/>
								<div>{{ street }}</div>
							</div>
							<div class="flex items-center space-x-4">
								<font-awesome-icon icon="home" class="text-lg invisible"/>
								<div>{{ city }}</div>
							</div>
						</div>
					</div>
				</div>
				<img src="src/assets/profile.jpg" class="rounded-md object-cover w-64 h-96" />
			</div>
		</div>

		<!-- top right corner -->
		<div class="bg-blue-400 absolute top-0 right-0 triangle-top"/>

		<!-- bottom left corner -->
		<div class="bg-blue-400 absolute z-10 bottom-0 left-0 triangle-bottom"/>
		<div class="bg-blue-200 absolute z-0 bottom-0 left-0 triangle-bottom-2"/>
		<div class="bg-blue-400 absolute z-20 bottom-0 left-0 triangle-left"/>
	</page>
</template>

<script setup>
import Page from "@/views/pages/Page.vue";
import PageHeader from "@/components/headers/PageHeader.vue";

const name = import.meta.env.VITE_FULL_NAME;
const email = import.meta.env.VITE_EMAIL;
const github = import.meta.env.VITE_GITHUB;
const phone = import.meta.env.VITE_PHONE;
const street = import.meta.env.VITE_ADDRESS_STREET;
const city = import.meta.env.VITE_ADDRESS_CITY;
</script>

<style scoped>
.triangle-bottom {
	clip-path: polygon(0 0, 100% 100%, 0 100%);
	width: 550px;
	height: 150px;
}
.triangle-bottom-2 {
	clip-path: polygon(0 0, 100% 100%, 0 100%);
	width: 620px;
	height: 170px;
}
.triangle-left {
	clip-path: polygon(0 0, 100% 100%, 0 100%);
	width: 100px;
	height: 600px;
}
.triangle-top {
	clip-path: polygon(0 0, 100% 0, 100% 100%);
	width: 550px;
	height: 80px;
}
</style>
