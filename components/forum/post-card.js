import PropTypes from 'prop-types'
import Link from 'next/link'

const PostCard = ({ title, user, description, tag, shortTag, time, id }) => (
	<div className="w-full border rounded-lg px-6 py-4 my-6 hover:bg-gray-100">
		<div className="grid grid-cols-1 md:grid-cols-4 lg:md:grid-cols-4 xl:grid-cols-4 select-none">
			<div className="col-span-3">
				<Link href={`/forum/p/${id}`}>
					<span className="post-title text-xl font-medium hover:text-gray-700 cursor-pointer">{title}</span>
				</Link>
				&emsp;
				<span className="post-title text-sm text-gray-600">~ {user}</span>
			</div>
			<div className="col-span-1 text-right flex items-center justify-between md:justify-end lg:justify-end xl:justify-end mt-2 md:mt-auto lg:mt-auto xl:mt-auto">
				<Link href={`/forum/tag/${shortTag}`}>
					<span className="inline-block bg-green-200 hover:bg-green-300 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-8 cursor-pointer">{tag}</span>
				</Link>
				<div className="text-gray-600">{time.toString()}</div>
			</div>
		</div>
		<div className="mt-3 text-justify">{description}</div>
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
	shortTag: PropTypes.string.isRequired,
	time: PropTypes.instanceOf(Date).isRequired,
	id: PropTypes.string.isRequired,
}

export default PostCard