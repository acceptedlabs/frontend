import gql from 'graphql-tag'

export const IS_ONBOARDED = gql`
	query {
		isOnboarded
	}
`