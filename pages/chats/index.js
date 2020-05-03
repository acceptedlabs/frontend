import Link from 'next/link'

import Layout from '../../components/layout'
import Navbar from '../../components/navbar'

import { useQuery } from '@apollo/react-hooks'
import { useAuth0 } from '../../auth0-client'
import gql from 'graphql-tag'
import { withForceAuth } from '../../components/force-auth'


const curChatsQuery = gql`
{
 curUser {
  currentChats {
    id
    subject
    closed
  }
} 
}
`

const ChatCard = ({ data: { id, subject, closed } }) => {
	return (
		<Link href={`/chat/${id}`}>
			<div className="w-full border rounded-lg px-6 py-4 my-6 hover:bg-gray-100 cursor-pointer">
				<div className="my-2 text-xl font-medium text-gray-800">
					{subject}
				</div>
			</div>
		</Link>
	)
}

const Chats = () => {
	const { data, loading, error } = useQuery(curChatsQuery)
	const { user } = useAuth0()
	let currentChats
	if (data) currentChats = data.curUser.currentChats
	console.log(currentChats)
	return (
		<Layout title="Forum Post">
			<Navbar />
			<div className="max-w-3xl px-8 my-0 mx-auto">
				<div className="text-5xl font-bold text-gray-800">
					My Chats
				</div>
				<Link href="/chats/new">
					<button className="my-2 px-4 py-2 bg-blue-600 rounded-full text-white font-medium text-md hover:bg-blue-900 active:outline-none" tabIndex="1">&#65291; New Chat</button>
				</Link>
				{loading ? <div className="my-2 text-3xl font-medium text-gray-800">
					Loading...
				</div> : null}
				{/* <div className="my-2 text-3xl font-medium text-gray-800">
					Active
				</div> */}
				{currentChats !== undefined && currentChats && currentChats.length > 0 ? currentChats.filter(ch => ch && !ch.closed).map(ch => <ChatCard key={ch.id} data={ch} />) : null}
				{/* <div className="my-2 text-3xl font-medium text-gray-800">
					Inactive
				</div>
				{currentChats !== undefined && currentChats ? currentChats.filter(ch => ch.closed).map(ch => <ChatCard key={ch.id} data={ch} />) : null} */}
				<div className="mt-16 text-3xl font-medium text-gray-800">
					Chat Code
				</div>
				<div className="text-gray-700 pb-2">
					<p>Copy this code to chat with a mentor or mentee that you found manually.</p>
					<p>You&apos;ll both be added to a brand new chat.</p>
				</div>
				<div className="mt-4 bg-gray-300 py-2 px-4 text-black font-mono">
					{user.sub}
				</div>
			</div>
		</Layout>
	)
}

export default withForceAuth(Chats)