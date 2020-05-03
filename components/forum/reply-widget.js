import { useState } from 'react'
import classNames from 'classnames'

const ReplyWidget = ({ hidden = false, submit }) => {
	const [reply, setReply] = useState('')

	const _submit = async () => {
		setReply('')
		await submit(reply)
		return
	}

	return (
		<div className={classNames({ 'hidden': hidden }, { 'block': !hidden })}>
			<h4 className="text-sm font-medium text-gray-700">compose reply</h4>
			<textarea
				className="mt-2 p-3 h-24 text-md w-9/12 border rounded"
				placeholder="share your thoughts with the community. Markdown supported."
				value={reply}
				onChange={e => setReply(e.target.value)}
			/>
			<br/>
			<button className="bg-blue-800 text-white py-1 px-3 rounded-full text-md mr-5" onClick={_submit}>Reply</button>
		</div >
	)
}

export default ReplyWidget