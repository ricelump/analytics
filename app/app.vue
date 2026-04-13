<script setup lang="ts">
const { loggedIn } = useAuth()
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />
		<Button>{{ loggedIn }}</Button>
	</div>
</template>
