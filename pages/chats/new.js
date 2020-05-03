import Layout from '../../components/layout'
import Navbar from '../../components/navbar'

import { useState } from 'react'
import { useRouter } from 'next/router'

import { useAuth0 } from '../../auth0-client'

import { useMutation } from '@apollo/react-hooks'
import { CREATE_CHAT } from '../../client/mutations'

import { withForceAuth } from '../../components/force-auth'

const NewChat = () => {
	const { user } = useAuth0()
	const router = useRouter()
	const [chatCode, setChatCode] = useState('')
	const [topic, setTopic] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [createChat] = useMutation(CREATE_CHAT)

	const submit = async () => {
		if (!chatCode.trim() || !topic.trim()) {
			setLoading(false)
			setError('You need to fill out all fields.')
			return
		}
		if (user.sub === chatCode.trim()) {
			setLoading(false)
			setChatCode('')
			setError('You can\'t create a chat with yourself.')
			return
		}
		setError('')
		var res = null
		try {
			setLoading(true)
			res = await createChat({ variables: { otherID: chatCode, subject: topic } })
			setTopic('')
			setChatCode('')
		} catch (err) {
			if (err.message.includes('do not exist')) {
				setError('A user with that chat code doesn\'t exist.')
				return
			}
			setError('Something went wrong.')
		}
		if (res && res.data && res.data.createChat && res.data.createChat.id) router.push(`/chat/${res.data.createChat.id}`)
		setLoading(false)
	}

	const chatBody = (
		<>
			<div className="text-gray-700 pb-2">
				<p>Create a new chat with a user. This serves as matching until the automated infrastructure exists.</p>
			</div>
			{error ?
				<div className="my-2 p-4 bg-red-200 text-red-700 font-medium border border-red-700 border-4 rounded-md">
					{error}
				</div> :
				null
			}
			<div className="mt-4">
				<h2 className="text-2xl font-medium text-gray-800">
					Other User's Chat Code
				</h2>
				<div className="text-gray-700 mb-3">
					<p>The chat code of the mentor.</p>
				</div>
				<input
					type="text"
					className="outline-none border border-gray-400 rounded font-mono py-2 px-4 w-full"
					placeholder="google-oauth2|..."
					value={chatCode}
					onChange={e => setChatCode(e.target.value)}
				/>
			</div>
			<div className="mt-8 mb-8">
				<h2 className="text-2xl font-medium text-gray-800">
					Chat Subject
				</h2>
				<div className="text-gray-700 mb-3">
					<p>The topic or thing you need help with.</p>
				</div>
				<input
					type="text"
					className="outline-none border border-gray-400 rounded py-2 px-4 w-full"
					placeholder="e.g. My UC application questions"
					value={topic}
					onChange={e => setTopic(e.target.value)}
				/>
			</div>
			<button className="bg-blue-800 text-white py-2 px-4 rounded-full text-md mr-5" onClick={submit}>Create Chat</button>
		</>
	)

	return (
		<Layout title="Forum Post">
			<Navbar />
			<div className="max-w-3xl px-8 my-0 mx-auto">
				<div className="text-5xl font-bold text-gray-800">
					New Chat
				</div>
				{!loading ?
					chatBody :
					<div className="text-gray-700 pb-2">
						<p>Creating chat...</p>
					</div>
				}
			</div>
		</Layout>
	)
}

export default withForceAuth(NewChat)