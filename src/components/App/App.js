import React from 'react'

import Card from '../Card/Card'
import GlobalStyle from '../../assets/style/GlobalStyle'
import GlobalState from '../../data/GlobalState'
import gql from 'graphql-tag'
import theme from '../../assets/style/theme'
import { ThemeProvider } from 'styled-components'
import { Query } from 'react-apollo'

const App = () => {
	return (
		<Query
			query={gql`
				{
					playlists {
						id
						title
						author
						photoS {
							url
						}
					}
				}
			`}
		>
			{({ loading, error, data }) => {
				if (loading) return <p>Loading...</p>
				if (error) return <p>Error :(</p>

				return (
					<GlobalState data={data}>
						<GlobalStyle />
						<ThemeProvider theme={theme}>
							<Card />
						</ThemeProvider>
					</GlobalState>
				)
			}}
		</Query>
	)
}

export default App
