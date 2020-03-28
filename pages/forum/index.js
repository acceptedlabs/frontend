import PropTypes from 'prop-types'
import Link from 'next/link'
import Layout from '../../components/layout'

import { connect } from 'react-redux'
import { signIn } from '../../auth-client'

import Navbar from '../../components/navbar'
import TagCard from '../../components/forum/tag-card'
import PostCard from '../../components/forum/post-card'

const Forum = ({ isAuth }) => {
	if (!isAuth) {
		signIn()
		return null
	}
	return (
		<Layout title="Forum - Home">
			<Navbar />
			<div className="max-w-3xl px-8 my-0 mx-auto">
				<div className="text-5xl font-bold text-gray-800">
					Forum
				</div>
				<Link href="/forum/post"><button className="my-2 px-4 py-2 bg-blue-600 rounded-full text-white font-medium text-md hover:bg-blue-900 active:outline-none" tabIndex="1">&#65291; Create Post</button></Link>
				<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
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
				<div className="mt-20">
					<h1 className="text-3xl font-medium text-gray-700">
						Popular Forum Posts
					</h1>
					<div className="posts">
						<PostCard
							title="How early is too early?"
							description="Hi, I&apos;m a highly gifted student who wants to get into every Ivy League school ever. This has been my dream since I was 9 learning quantum physics. I am rambling on because I am testing the forum capabilities of this thing. Please reply to me within five minutes otherwise I will get very diappointed."
							user="Aditya"
							tag="applications"
							shortTag="apps"
							time="5h"
							id="2dsu328"
						/>
						<PostCard
							title="Why should I file a FAFSA?"
							description="I&apos;m kind of confused why I should apply for the FAFSA. Why does it exist?"
							user="Anonymous"
							tag="financial aid"
							shortTag="finaid"
							time="22h"
							id="2dsu3228"
						/>
					</div>
				</div>
			</div>
		</Layout>
	)
}

Forum.propTypes = {
	isAuth: PropTypes.bool,
}
export default connect(state => ({isAuth: state.auth.isAuth}), null)(Forum)