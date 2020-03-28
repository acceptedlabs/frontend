import Link from 'next/link'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const TagCard = ({ tag, title, description, className, tabIndex }) => (
	<Link href={`/forum/tag/${tag}`}>
		<div className={classNames(
			'text-gray-800',
			'w-full',
			'md:max-w-xs',
			'lg:max-w-xs',
			'xl:max-w-xs',
			'rounded-lg',
			'shadow-sm',
			'transition',
			'transition-shadow',
			'duration-300',
			'border',
			'hover:text-gray-900',
			'hover:shadow-lg',
			'cursor-pointer',
			'select-none',
			'my-0',
			'mx-auto',
			className,
		)}>
			<div className="px-6 py-4" tabIndex={tabIndex}>
				<div className="font-bold text-xl mb-2">{title}</div>
				<p className="text-gray-700 text-base">
					{description}
				</p>
			</div>
		</div>
	</Link>
)

TagCard.classNames = {
	tag: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	className: PropTypes.any,
}

export default TagCard