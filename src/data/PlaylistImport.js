import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { ApolloClient } from 'apollo-client'

const GRAPHCMS_API = 'https://api-euwest.graphcms.com/v1/cjtoq3kro96qt01dny0d1e7nq/master'

const client = new ApolloClient({
	link: new HttpLink({ uri: GRAPHCMS_API }),
	cache: new InMemoryCache()
})

export default client
