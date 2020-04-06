import { useState, useEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import Link from 'next/link'

import { withRouter } from 'next/router'

import { connect } from 'react-redux'
import {createPost, setSubmissionStatus } from '../../store/actions'

const ComposePost = ({ isAuth, isSubmitted, createPost, setSubmissionStatus, router }) => {

	useEffect(() => {
		setSubmissionStatus(false)
	}, [])

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [loading, setLoading] = useState(false)
	const [msg, setMsg] = useState({
		message: '',
		type: '',
	})

	if (!isAuth) router.replace('/auth')
	
	useEffect(() => {
		if (!isSubmitted) return
		setMsg({
			message: 'Your post was created!',
			type: 'SUCCESS',
		})
		setLoading(false)
		setTimeout(() => router.push('/forum'), 1000)
	}, [isSubmitted])

	const submitPost = () => {
		const postTitle = title.trim(), postBody = body.trim()
		if (!postTitle || !postBody) {
			setMsg({
				message: 'Your post title or post body can\'t be blank.',
				type: 'ERROR',
			})
			return
		}
		createPost(title, body)
		setTitle('')
		setBody('')
		setLoading(true)
	}

	return (
		<Layout title="Forum - Post">
			<Navbar />
			<div className="max-w-3xl px-8 my-0 mx-auto">
				<h1 className="text-5xl font-bold text-gray-800">
				Create Post
				</h1>
				<h3 className="my-2 text-md font-medium text-gray-700">
				Post something to the Accepted community forum.
				</h3>
				{msg.message ?
					<div className="status mt-10 mb-4">
						<div className={classNames('w-full', {'bg-green-500': msg.type === 'SUCCESS'}, {'bg-red-500': msg.type === 'ERROR'}, 'p-4', 'text-white', 'text-medium', 'rounded')}>
							{msg.message}
						</div>
					</div>
					: null
				}
				{!loading ?
					<div className="mt-10">
						<div className="post-title">
							<h4 className="text-lg font-medium text-gray-700">Post Title</h4>
							<input
								type="text"
								className="mt-2 p-3 text-md w-full border rounded"
								placeholder="a creative title for your post"
								onChange={e => setTitle(e.target.value)}
								value={title}
							/>
						</div>
						<div className="post-body mt-8">
							<h4 className="text-lg font-medium text-gray-700">Post Body</h4>
							<textarea
								className="mt-2 p-3 h-48 text-md w-full border rounded"
								placeholder="share your thoughts with the community. Markdown supported."
								onChange={e => setBody(e.target.value)}
								value={body}
							/>
						</div>
						<div className="actions mt-4">
							<button
								className="my-2 px-4 py-2 bg-blue-600 rounded-full text-white font-medium text-md hover:bg-blue-900 mr-2 active:outline-none"
								onClick={submitPost}
							>Post</button>
							<Link href="/forum"><button className="my-2 px-4 py-2 rounded-full text-blue-600 font-medium text-md border border-blue-600 hover:text-gray-700 hover:border-gray-700 active:outline-none">Cancel</button></Link>
						</div>
					</div> :
					<div className="mt-10 text-gray-800">Posting...</div>
				}
			</div>
		</Layout>
	)
}

ComposePost.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	isSubmitted: PropTypes.bool,
	createPost: PropTypes.func.isRequired,
	setSubmissionStatus: PropTypes.func.isRequired,
	router: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		isSubmitted: state.post.isSubmitted,
	}
}

export default connect(mapStateToProps, { createPost, setSubmissionStatus })(withRouter(ComposePost))