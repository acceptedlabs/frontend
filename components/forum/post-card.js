import PropTypes from 'prop-types'
import Link from 'next/link'
import TimeAgo from 'react-timeago'
import ReactMarkdown from 'react-markdown'

const PostCard = ({ title, user, description, tag, time, id }) => (
	<div className="w-full border rounded-lg px-6 py-4 my-6 hover:bg-gray-100">
		<div className="grid grid-cols-1 md:grid-cols-6 lg:md:grid-cols-6 xl:grid-cols-6 select-none">
			<div className="col-span-4">
				<Link href={`/forum/p/${id}`}>
					<span className="post-title text-xl font-medium hover:text-gray-700 cursor-pointer">{title}</span>
				</Link>
				&emsp;
				{/* <span className="post-title text-sm text-gray-600">~ {user}</span> */}
			</div>
			<div className="col-span-2 text-right flex items-center justify-between md:justify-end lg:justify-end xl:justify-end mt-2 md:mt-auto lg:mt-auto xl:mt-auto">
				<Link href={`/forum/tag/${tag}`}>
					<span className="inline-block bg-green-200 hover:bg-green-300 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-4 cursor-pointer">{tag}</span>
				</Link>
				<div className="text-gray-600"><TimeAgo date={new Date(time * 1000)} live /></div>
			</div>
		</div>
		<div className="mt-3 h-24 overflow-hidden text-justify">
			<ReactMarkdown source={description} allowedTypes={['text', 'emphasis', 'strong', 'link']} unwrapDisallowed={true} />
		</div>
		<div className="mt-4">
			<Link href={`/forum/p/${id}`}>
				<span className="text-blue-700 font-medium hover:text-gray-800 cursor-pointer">View Post &rsaquo;</span>
			</Link>
		</div>
	</div>
)

PostCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	user: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
}

export default PostCard