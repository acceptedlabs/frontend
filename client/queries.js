import gql from 'graphql-tag'

export const IS_ONBOARDED = gql`
	query {
		isOnboarded
	}
`

export const VIEW_POST_BY_ID = gql`
	query viewPostByID($id: ID!) {
		postById(id: $id) {
			id
			title
			body
			datetime
			replies {
				...replyFragment
				replies {
					...replyFragment
					replies {
						...replyFragment
					}
				}
			}
			upvotes
			downvotes
			tag
			myVote
		}
	}
	fragment replyFragment on Reply {
		id
		body
		upvotes
		downvotes
		datetime
		myVote
	}
`

export const HOT_POSTS_FRONTPAGE = gql`
	query hotPostsFrontPage {
		postsHot(page: 1) {
			id
			title
			body
			datetime
			tag
		}
	}
`

export const GET_CHAT_MESSAGES = gql`
	query getChatMessages($id: ID!) {
		getChatMessagesPaginated(id: $id, page: 1) {
			user
			datetime
			body
		}
	}
`

export const GET_CHAT_TOPIC = gql`
	query getChatTopic($id: ID!) {
		getChatTopic(id: $id)
	}
`