import PropTypes from 'prop-types'

import fetch from 'isomorphic-unfetch'

import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

import { useAuth0 } from '../auth0-client'

import Head from 'next/head'
import Loading from '../components/loading'

const httpLink = createHttpLink({
	uri: process.env.API_ROOT,
	fetch,
})

const typeDefs = gql`
	extend type Query {
		isAuth: Boolean!
	}

	extend type ProfileInfo {
		given_name: String!
		family_name: String!
		nickname: String!
		name: String!
		picture: String!
		locale: String!
		updatedAt: String!
		email: String!
		email_verified: Boolean!
		iss: String!
		sub: String!
		aud: String!
		iat: Number!
		exp: Number!
		at_hash: String!
		nonce: String!
	}

	extend type Mutation {
		storeAuthResult(profile: ProfileInfo!): ProfileInfo!
	}

`
const cache = new InMemoryCache()
const noAuthQueries = new Set(['hotPostsFrontPage'])

export const GraphQLProvider = ({ children }) => {
	const { loading, isAuthenticated, getTokenSilently, getTokenWithPopup } = useAuth0()

	if (loading) {
		return (
			<>
				<Head>
					<title key="title">Accepted</title>
				</Head>
				<Loading />
			</>
		)
	}


	const authLink = setContext(async (req, { headers }) => {
		const settings = {
			audience: 'https://api.accepted.tech/',
		}
		if (noAuthQueries.has(req.operationName)) return headers
		let token
		try {
			token = isAuthenticated ?
				await getTokenSilently(settings) :
				null
		} catch (e) {
			token = isAuthenticated ?
				await getTokenWithPopup(settings) :
				null
		}
		return {
			headers: {
				...headers,
				authorization: isAuthenticated ? `Bearer ${token}` : '',
			},
		}
	})

	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache,
		typeDefs,
	})

	return <ApolloProvider client={client}>{children}</ApolloProvider>
}

GraphQLProvider.propTypes = {
	children: PropTypes.any,
}