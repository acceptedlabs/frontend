import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import TagCard from '../../components/forum/tag-card'
import PostCard from '../../components/forum/post-card'
import Link from 'next/link'

const ComposePost = () => (
	<Layout title="Forum - Post">
		<Navbar />
		<div className="max-w-3xl px-8 my-0 mx-auto">
			<h1 className="text-5xl font-bold text-gray-800">
				Create Post
			</h1>
			<h3 className="my-2 text-md font-medium text-gray-700">
				Post something to the Accepted community forum.
			</h3>
			<div className="mt-10">
				<div className="post-title">
					<h4 className="text-lg font-medium text-gray-700">Post Title</h4>
					<input type="text" className="mt-2 p-3 text-md w-full border rounded" placeholder="a creative title for your post"/>
				</div>
				<div className="post-body mt-8">
					<h4 className="text-lg font-medium text-gray-700">Post Body</h4>
					<textarea className="mt-2 p-3 h-48 text-md w-full border rounded" placeholder="share your thoughts with the community. Markdown supported."/>
				</div>
				<div className="actions mt-4">
					<button className="my-2 px-4 py-2 bg-blue-600 rounded-full text-white font-medium text-md hover:bg-blue-900 mr-2 active:outline-none">Post</button>
					<Link href="/forum"><button className="my-2 px-4 py-2 rounded-full text-blue-600 font-medium text-md border border-blue-600 hover:text-gray-700 hover:border-gray-700 active:outline-none">Cancel</button></Link>
				</div>
			</div>
		</div>
	</Layout>
)

export default ComposePost