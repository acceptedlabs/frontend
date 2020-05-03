import PropTypes from 'prop-types'
import TimeAgo from 'react-timeago'
import ReactMarkdown from 'react-markdown'

import { useState } from 'react'
import classNames from 'classnames'

import { VOTE_REPLY, REPLY_TO_REPLY, REPLY_TO_POST } from '../../client/mutations'
import { useMutation } from '@apollo/react-hooks'

import { useAuth0 } from '../../auth0-client'
import ReplyWidget from './reply-widget'

const ReplyView = ({ data, refetch }) => {
	const [showReplyWidget, setShowReplyWidget] = useState(false)
	const { isAuthenticated } = useAuth0()
	const { body, upvotes, downvotes, id, replies, datetime, myVote } = data
	const netVotes = upvotes - downvotes + 1
	const [votePost] = useMutation(VOTE_REPLY)
	const [replyToReply] = useMutation(REPLY_TO_REPLY)

	const vote = async (up = true) => {
		if (!data || !isAuthenticated) return
		try {
			await votePost({ variables: { id, downvote: !up } })
			await refetch()
		} catch (err) {
			console.error(err)
		}
	}

	const upvote = async () => vote(true)
	const downvote = async () => vote(false)

	const replyReply = async body => {
		setShowReplyWidget(false)
		await replyToReply({ variables: { id, body } })
		await refetch()
	}

	return (
		<div>
			<div className="select-none flex items-center">
				<button className={classNames('flex', 'items-center', 'text-lg', 'text-gray-600', 'cursor-pointer', 'hover:text-gray-800', { 'text-blue-700': myVote === 1 }, { 'hover:text-blue-800': myVote === 1 })}
					role="button"
					onClick={upvote}
				>
					<ion-icon name="caret-up-outline"></ion-icon>
				</button>
				<a className={classNames('flex', 'items-center', 'mr-2', 'text-lg', 'text-gray-600', 'cursor-pointer', 'hover:text-gray-800', { 'text-orange-600': myVote === -1 }, { 'hover:text-orange-700': myVote === -1 })}
					role="button"
					onClick={downvote}
				>
					<ion-icon name="caret-down-outline"></ion-icon>
				</a>
				<a className="text-gray-600">
					{netVotes} vote{Math.abs(netVotes) === 1 ? null : 's'}
				</a>
				<span className="mx-2">&bull;</span>
				<a className="text-gray-600 italic" title={new Date(datetime * 1000).toUTCString()}>
					<TimeAgo date={new Date(datetime * 1000)} live />
				</a>
			</div>
			<div className="mt-1 reply-body">
				<ReactMarkdown source={body} />
			</div>
			<div className="mt-2">
				<button className="text-sm text-gray-700" role="button" onClick={() => setShowReplyWidget(!showReplyWidget)}>Reply</button>
				<div className="ml-6 mt-2">
					<ReplyWidget submit={replyReply} hidden={!showReplyWidget} />
				</div>
			</div>
			{replies ? <div className="mt-3 ml-6">
				{replies.map(reply => <ReplyView data={reply} key={reply.id} refetch={refetch} />)}
			</div> : null}
		</div>
	)
}

ReplyView.propTypes = {
	data: PropTypes.object.isRequired,
	refetch: PropTypes.func.isRequired,
}

const PostView = ({ data, refetch, showReplyWidget = false }) => {
	const { id, title, tag, body, datetime, upvotes, downvotes, replies } = data
	const netVotes = upvotes - downvotes + 1
	const [replyToPost] = useMutation(REPLY_TO_POST)

	const replyPost = async body => {
		await replyToPost({ variables: { id, body } })
		await refetch()
	}

	return (
		<div className="max-w-4xl px-4">
			<div className="pt-4 pb-4 pjx-8">
				<div className="text-3xl font-medium text-gray-800 whitespace-pre-wrap">
					{title}
				</div>
				<div className="mt-4 post-content leading-relaxed">
					<ReactMarkdown source={body} />
				</div>
				<div className="mt-6">

					<span className="text-gray-600 italic" title={new Date(datetime * 1000).toUTCString()}>
						<TimeAgo date={new Date(datetime * 1000)} live />
					</span>
					<span className="mx-2">&bull;</span>
					<span className="text-gray-600">
						{netVotes} vote{Math.abs(netVotes) === 1 ? null : 's'}
					</span>
					<span className="mx-2">&bull;</span>
					<span className="inline-block bg-green-200 hover:bg-green-300 rounded-full px-3 py-1 text-sm font-semibold text-green-700 cursor-pointer">
						{tag}
					</span>
				</div>
			</div>
			<hr className="my-5" />
			<div>
				<div className="text-xl text-gray-900 whitespace-pre-wrap">
					Comments
				</div>
				{showReplyWidget ?
					<div className="mt-4">
						<ReplyWidget submit={replyPost} />
					</div>
					: null
				}
				<div className="mt-4">
					{replies.length === 0 ? <div className="mt-8 text-center text-gray-600">Be the first to comment!</div> : null}
					{[...replies].sort((r1, r2) => { return -(r1.upvotes - r1.downvotes) + (r2.upvotes - r2.downvotes) }).map(reply => <ReplyView data={reply} refetch={refetch} key={reply.id} />)}
				</div>
			</div>
		</div>
	)
}

PostView.propTypes = {
	data: PropTypes.object.isRequired,
	refetch: PropTypes.func.isRequired,
	showReplyWidget: PropTypes.bool,
}

export default PostView