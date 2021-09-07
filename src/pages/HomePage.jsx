import React from 'react'
import Container from 'react-bootstrap/Container'

const HomePage = () => {
	return (
		<Container className="py-3">
			<h1>Welcome!</h1>

			<p>This is a demo deploy of React Query to Netlify <span role="img" aria-label="a red heart">❤️</span></p>
		</Container>
	)
}

export default HomePage
