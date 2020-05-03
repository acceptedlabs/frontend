import Layout from '../../../components/layout'
import Loading from '../../../components/loading'
import Navbar from '../../../components/navbar'
import PostView from '../../../components/forum/post-view'

import classNames from 'classnames'

import { VIEW_POST_BY_ID } from '../../../client/queries'
import { VOTE_POST } from '../../../client/mutations'
import { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { useAuth0 } from '../../../auth0-client'

const PostByID = () => {
	const router = useRouter()
	const { isAuthenticated } = useAuth0()
	const [hovered, setIsHovered] = useState(false)
	const [showReplyWidget, setShowReplyWidget] = useState(false)
	const { id } = router.query
	const { data, loading, error, refetch } = useQuery(VIEW_POST_BY_ID, { variables: { id } })
	const [votePost] = useMutation(VOTE_POST)
	const postData = data ? data.postById : null

	const vote = async (up = true) => {
		if (!postData || loading) return
		try {
			await votePost({ variables: { id, downvote: !up } })
			await refetch()
		} catch (err) {
			console.error(err)
		}
	}

	const upvote = async () => vote(true)
	const downvote = async () => vote(false)

	return (
		<Layout title="Forum Post">
			<Navbar />
			<div className="mt-6 w-screen px-6 md:px-16 lg:px-16 xl:px-16 grid grid-cols-6 gap-3">
				<div className="col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-1  flex flex-col mt-8">
					<button className="px-6 py-3 flex flex-row items-center bg-white rounded-full bg-blue-100 text-blue-600 hover:text-blue-700 mb-4 cursor-pointer select-none"
						role="button"
						onClick={() => router.push('/forum')}
					>
						<ion-icon name="arrow-back-outline" class="text-xl"></ion-icon>
						<span className="ml-4 font-medium">Back to forum</span>
					</button>

					{isAuthenticated && !loading && !error ?
						<>
							<div className="px-6 py-3 flex flex-row items-center bg-white rounded-full bg-white text-gray-700 hover:text-gray-800 hover:bg-gray-100 mb-4 cursor-pointer select-none"
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
								onClick={() => setShowReplyWidget(!showReplyWidget)}
								role="button"
							>
								<div className="text-xl flex items-center justify-center">
									<ion-icon name={hovered ? 'arrow-undo' : 'arrow-undo-outline'}></ion-icon>
								</div>
								<span className="ml-4 font-medium">Reply to post</span>
							</div>

							<div className={classNames('px-6','py-3','flex','flex-row','items-center','bg-white','rounded-full','bg-white','text-gray-700','hover:text-gray-800','hover:bg-gray-100','mb-4','cursor-pointer','select-none', {'text-blue-700': postData.myVote === 1}, {'hover:text-blue-800': postData.myVote === 1})}
								role="button"
								onClick={upvote}
							>
								<ion-icon name="caret-up-outline" class="text-xl"></ion-icon>
								<span className="ml-4 font-medium">Upvote post</span>
							</div>

							<div
								className={classNames('px-6','py-3','flex','flex-row','items-center','bg-white','rounded-full','bg-white','text-gray-700','hover:text-gray-800','hover:bg-gray-100','mb-4','cursor-pointer','select-none', {'text-orange-600': postData.myVote === -1}, {'hover:text-orange-700': postData.myVote === -1})}
								onClick={downvote}
							>
								<ion-icon name="caret-down-outline" class="text-xl"></ion-icon>
								<span className="ml-4 font-medium">Downvote post</span>
							</div>

							<div className="px-6 py-3 flex flex-row items-center bg-white rounded-full bg-white text-gray-700 hover:text-gray-800 hover:bg-gray-100 mb-4 cursor-pointer select-none">
								<ion-icon name="alert-outline" class="text-xl"></ion-icon>
								<span className="ml-4 font-medium">Report post</span>
							</div>
						</> : null
					}
				</div>
				<div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-5 ml-10 py-4 px-4">
					<div className="xl:max-w-4xl">
						{error ? <div> Something went wrong</div> :
							(loading && !postData) ?
								<div>Loading...</div> :
								<PostView data={postData} refetch={refetch} showReplyWidget={showReplyWidget} />
						}

					</div>
				</div>
			</div>
		</Layout>
	)
}

export default PostByID