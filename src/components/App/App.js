import React, { Component } from 'react'
import './App.css'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Card from '../Card/Card'

import { Provider } from '../../data/PlaylistContext'

class App extends Component {
	render() {
		return (
			<Query
				query={gql`
					{
						playlists {
							title
							author
							photo {
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
						<Provider value={data.playlists}>
							<Card />
						</Provider>
					)
				}}
			</Query>
		)
	}
}

export default App
