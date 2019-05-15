import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App/App'
import * as serviceWorker from './serviceWorker'

import { ApolloProvider } from 'react-apollo'
import client from './data/PlaylistImport'

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
)
serviceWorker.unregister()
