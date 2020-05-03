import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import { withForceAuth } from '../../components/force-auth'

import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_CHAT_MESSAGES, GET_CHAT_TOPIC } from '../../client/queries'
import { SEND_CHAT_MESSAGE } from '../../client/mutations'

import { useAuth0 } from '../../auth0-client'

import TimeAgo from 'react-timeago'
import ReactMarkdown from 'react-markdown'
import classNames from 'classnames'


const ChatMessage = ({ data: { user, datetime, body } }) => {
	const { user: usr } = useAuth0()
	if (!usr) return
	const { sub } = usr
	const isYou = user === sub
	return (
		<div className={classNames('mb-2', 'w-full', 'flex', 'items-center', { 'justify-start': !isYou }, { 'justify-end': isYou }, { 'text-left': !isYou }, { 'text-right': isYou })}>
			<div style={{maxWidth: '70%'}}>
				<span className="text-gray-600 text-xs">
					{/* {isYou ? 'you' : 'mentor'}&nbsp;&bull;&nbsp; */}<TimeAgo date={new Date(datetime * 1000)} live />
				</span>
				&nbsp;
				<ReactMarkdown className="messages" source={body} />
			</div>
			<style jsx>{`
				.messages > a {
					color: blue !important;
				}
			`}</style>
		</div>
	)
}

const ChatCompose = ({ send }) => {
	const [text, setText] = useState('')

	const sendMessage = async () => {
		setText('')
		await send(text)
	}

	return (
		<div className="flex w-full items-center">
			<input type="text" className="h-12 p-4 outline-none rounded bg-transparent flex-1 text-gray-800"
				placeholder="your message. Markdown supported." value={text} onKeyUp={e => {
					if (e.keyCode === 13) {
						sendMessage()
					}
				}} onChange={e => setText(e.target.value)} />
			<button className="bg-blue-800 text-white py-1 px-3 rounded-full text-md mr-5" onClick={sendMessage}>Send</button>
		</div>
	)
}


const Chat = () => {
	const router = useRouter()
	const { id } = router.query
	const { data: topicData, loading: loadingTopic, error: errorTopic } = useQuery(GET_CHAT_TOPIC, { variables: { id } })
	const { data, error, loading } = useQuery(GET_CHAT_MESSAGES, { variables: { id }, pollInterval: 1000 })
	const [sendMessage] = useMutation(SEND_CHAT_MESSAGE)
	const { user: { sub } } = useAuth0()
	const chatContainer = useRef(null)

	useEffect(() => {
		if (!data) return
		chatContainer.current.scrollTop = data.getChatMessagesPaginated.length * 100
	}, [data, chatContainer, loading])


	const send = async message => {
		await sendMessage({ variables: { id, body: message } })
	}

	return (
		<Layout title="Chat">
			<Navbar />
			<div className="w-screen px-6 md:px-16 lg:px-16 xl:px-16">
				<div className="mx-auto max-w-4xl px-2 mt-2 text-2xl font-semibold text-gray-800">
					{loadingTopic || errorTopic ? 'Chat' : `Chat: ${topicData.getChatTopic}`}
				</div>
				<div className="mx-auto mt-4 py-4 pb-0 max-w-4xl border border-gray-400 rounded-md">
					<div ref={chatContainer} className="chat-container px-4 pb-4 bg-graay-100 overflow-scroll" style={{ height: '60vh' }}>
						{loading ?
							'Loading' :
							data.getChatMessagesPaginated.map(msg => (
								<ChatMessage data={msg} key={msg.datetime} />
							))
						}
					</div>
					<hr />
					<ChatCompose send={send} />
				</div>
			</div>
		</Layout>
	)
}

export default withForceAuth(Chat)