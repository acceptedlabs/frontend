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

export const VOTE_POST = gql`
	mutation voteForumPost($id: ID!, $downvote: Boolean!) {
		votePost(id: $id, downvote: $downvote) {
			id
		}
	}
`

export const VOTE_REPLY = gql`
	mutation votePostReply($id: ID!, $downvote: Boolean!) {
		voteReply(id: $id, downvote: $downvote) {
			id
		}
	}
`

export const SEND_CHAT_MESSAGE = gql`
	mutation sendChat($id: ID!, $body: String!) {
		sendChatMessage(id: $id, body: $body) {
			id
		}
	}
`

export const REPLY_TO_POST = gql`
	mutation replyPost($id: ID!, $body: String!) {
		replyToPost(id: $id, body: $body) {
			id
		}
	}
`

export const REPLY_TO_REPLY = gql`
	mutation replyReply($id: ID!, $body: String!) {
		replyToReply(id: $id, body: $body) {
			id
		}
	}
`

export const CREATE_CHAT = gql`
	mutation createChat($otherID: ID!, $subject: String!) {
		createChat(ids: [$otherID], subject: $subject) {
			id
		}
	}
`