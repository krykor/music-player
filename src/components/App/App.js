import React from 'react'

import Card from '../Card/ContainerCard'
import GlobalStyle from '../../assets/style/GlobalStyle'
import gql from 'graphql-tag'
import theme from '../../assets/style/theme'
import { ThemeProvider } from 'styled-components'
import { Query } from 'react-apollo'

import { Provider } from 'react-redux'
import store from '../../store'

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
					<Provider store={store}>
						<GlobalStyle />
						<ThemeProvider theme={theme}>
							<Card data={data} />
						</ThemeProvider>
					</Provider>
				)
			}}
		</Query>
	)
}

export default App
