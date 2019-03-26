import React, { Component } from 'react'
import './App.css'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Card from '../Card/Card'

import PlaylistContext from '../../data/PlaylistContext'

class App extends Component {
	render() {
		return (
			<Query
				query={gql`
					{
						playlists {
							id
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
						<PlaylistContext.Provider
							value={{
								playlists: data.playlists
							}}
						>
							<Card initialId={data.playlists[0].id} />
						</PlaylistContext.Provider>
					)
				}}
			</Query>
		)
	}
}

export default App
