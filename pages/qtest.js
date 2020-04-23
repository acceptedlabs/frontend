import Layout from '../components/layout'

import { IS_ONBOARDED } from '../client/queries'
import { useQuery } from '@apollo/react-hooks'

const QTest = () => {
	const { data, loading, error } = useQuery(IS_ONBOARDED)
	let display
	if (loading) display = <div>Data: Loading...</div>
	else if (error) display = <div>Error: {error}</div>
	else display = <div>Data: {JSON.stringify(data)}</div>


	return (
		<Layout title="Query Test">
			<div className="p-4">
				{display}
			</div>
		</Layout>
	)

}

export default QTest