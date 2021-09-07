const apiBase = 'https://dog.ceo/api'
const fakeDelay = true
const fakeDelayAmount = 1500

const get = async (endpoint) => {
	const response = await fetch(apiBase + endpoint)
	if (!response.ok) {
		throw new Error("API responded that it was not OK.")
	}

	if (fakeDelay) {
		// await new Promise(r => setTimeout(r, fakeDelayAmount))
		await new Promise(resolve => {
			setTimeout(() => {
				resolve()
			}, fakeDelayAmount)
		})
	}

	return response.json()
}

export const getRandomDog = async () => {
	return get(`/breeds/image/random`)
}
