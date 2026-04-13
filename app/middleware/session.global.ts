export default defineNuxtRouteMiddleware(async () => {
	const { fetchSession } = useAuth()

	if (import.meta.client) await fetchSession()
})
