import React from 'react'
//import './App.css'
import GlobalStyle from './GlobalStyle'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import GlobalState from '../../data/GlobalState'
import Card from '../Card/Card'

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
						<Card />
					</GlobalState>
				)
			}}
		</Query>
	)
}

export default App
