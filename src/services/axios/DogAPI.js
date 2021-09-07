import axios from 'axios'

axios.defaults.baseURL = 'https://dog.ceo/api'

const fakeDelay = true
const fakeDelayAmount = 1500

const get = async (endpoint) => {
	const result = await axios.get(`${endpoint}`)

	if (fakeDelay) {
		// await new Promise(r => setTimeout(r, fakeDelayAmount))
		await new Promise(resolve => {
			setTimeout(() => {
				resolve()
			}, fakeDelayAmount)
		})
	}

	return result.data
}

export const getRandomDog = async () => {
	return get(`/breeds/image/random`)
}
