import gql from 'graphql-tag'

export const ONBOARD = gql`
	mutation performOnboarding($profile: OnboardingInput!) {
		onboard(info: $profile) {
			id
		}
	}
`

export const FORUM_POST = gql`
	mutation createForumPost($title: String!, $body: String!, $tag: String!) {
		forumPost(title: $title, body: $body, tag: $tag) {
			id
		}
	}
`