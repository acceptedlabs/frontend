import PropTypes from 'prop-types'
import Link from 'next/link'
import Layout from '../../components/layout'

import Navbar from '../../components/navbar'
import TagCard from '../../components/forum/tag-card'
import PostCard from '../../components/forum/post-card'


import { HOT_POSTS_FRONTPAGE } from '../../client/queries'
import { useQuery } from '@apollo/react-hooks'
import { useAuth0 } from '../../auth0-client'
import gql from 'graphql-tag'


const Forum = () => {
	const { isAuthenticated } = useAuth0()
	const { data, loading, error } = useQuery(HOT_POSTS_FRONTPAGE)
	let postList

	if (data && !loading && !error) {
		const { postsHot: hotPosts } = data
		console.log(hotPosts)
		postList = hotPosts.map(post => (
			<PostCard
				title={post.title}
				description={post.body}
				user="Aditya"
				tag={post.tag}
				time={post.datetime}
				id={post.id}
				key={post.id}
			/>
		))
	}

	return (
		<Layout title="Forum - Home">
			<Navbar />
			<div className="max-w-3xl px-8 my-0 mx-auto">
				<div className="text-5xl font-bold text-gray-800">
					Forum
				</div>
				{isAuthenticated ?
					<Link href="/forum/post"><button className="my-2 px-4 py-2 bg-blue-600 rounded-full text-white font-medium text-md hover:bg-blue-900 active:outline-none" tabIndex="1">&#65291; Create Post</button></Link>
					: null
				}
				<hr className="my-5" />
				<h1 className="text-3xl font-medium text-gray-700">
					Posts By Tag
				</h1>
				<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
					<TagCard
						tag="finaid"
						title="Financial Aid"
						description="Ask questions about financial aid."
						className="col-span-auto"
						tabIndex="2"
					/>
					<TagCard
						tag="apps"
						title="Applications"
						description="Ask questions about the application process."
						className="col-span-auto"
						tabIndex="3"
					/>
					<TagCard
						tag="acceptances"
						title="Acceptances"
						description="Share your successes with the community."
						className="col-span-auto"
						tabIndex="4"
					/>
				</div>
				<div className="mt-10">
					<h1 className="text-3xl font-medium text-gray-700">
						Hot Forum Posts
					</h1>
					<div className="posts">
						{loading ?
							<div className="w-full border rounded-lg px-6 py-4 my-6 hover:bg-gray-100">
								Loading...
							</div> :
							postList
						}
					</div>
				</div>
			</div>
		</Layout>
	)
}

Forum.propTypes = {
	isAuth: PropTypes.bool,
}
export default Forum