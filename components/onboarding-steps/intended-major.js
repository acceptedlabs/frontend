import { useState } from 'react'
import PropTypes from 'prop-types'

const IntendedMajor = ({ onChange }) => {
	const [selected, _setSelected] = useState('')
	const setSelected = selected => {
		onChange(selected)
		_setSelected(selected)
	}

	return (
		<div className="mt-10 text-center">
			<h4 className="text-3xl font-medium">
				What&apos;s your (intended) major?
			</h4>
			<h5 className="mt-2 text-sm text-gray-700">
				college major data courtesy FiveThirtyEight and US Census Bureau
			</h5>
			<div className="mt-10">
				<div className="max-w-sm mx-auto my-0">
					<div className="relative">
						<select
							className="block appearance-none w-full border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							onChange={e => setSelected(e.target.value)}
							value={selected}
						>
							<option>accounting</option>
							<option>actuarial science</option>
							<option>advertising and public relations</option>
							<option>aerospace engineering</option>
							<option>agricultural economics</option>
							<option>agriculture production and management</option>
							<option>animal sciences</option>
							<option>anthropology and archeology</option>
							<option>applied mathematics</option>
							<option>architectural engineering</option>
							<option>architecture</option>
							<option>area ethnic and civilization studies</option>
							<option>art and music education</option>
							<option>art history and criticism</option>
							<option>astronomy and astrophysics</option>
							<option>atmospheric sciences and meteorology</option>
							<option>biochemical sciences</option>
							<option>biological engineering</option>
							<option>biology</option>
							<option>biomedical engineering</option>
							<option>botany</option>
							<option>business economics</option>
							<option>business management and administration</option>
							<option>chemical engineering</option>
							<option>chemistry</option>
							<option>civil engineering</option>
							<option>clinical psychology</option>
							<option>cognitive science and biopsychology</option>
							<option>commercial art and graphic design</option>
							<option>communication disorders sciences and services</option>
							<option>communication technologies</option>
							<option>communications</option>
							<option>community and public health</option>
							<option>composition and rhetoric</option>
							<option>computer administration management and security</option>
							<option>computer and information systems</option>
							<option>computer engineering</option>
							<option>computer networking and telecommunications</option>
							<option>computer programming and data processing</option>
							<option>computer science</option>
							<option>construction services</option>
							<option>cosmetology services and culinary arts</option>
							<option>counseling psychology</option>
							<option>court reporting</option>
							<option>criminal justice and fire protection</option>
							<option>criminology</option>
							<option>drama and theater arts</option>
							<option>early childhood education</option>
							<option>ecology</option>
							<option>economics</option>
							<option>educational administration and supervision</option>
							<option>educational psychology</option>
							<option>electrical engineering</option>
							<option>electrical engineering technology</option>
							<option>electrical, mechanical, and precision technologies and production</option>
							<option>elementary education</option>
							<option>engineering and industrial management</option>
							<option>engineering mechanics physics and science</option>
							<option>engineering technologies</option>
							<option>english language and literature</option>
							<option>environmental engineering</option>
							<option>environmental science</option>
							<option>family and consumer sciences</option>
							<option>film video and photographic arts</option>
							<option>finance</option>
							<option>fine arts</option>
							<option>food science</option>
							<option>forestry</option>
							<option>french/german/latin and other common foreign language studies</option>
							<option>general agriculture</option>
							<option>general business</option>
							<option>general education</option>
							<option>general engineering</option>
							<option>general medical and health services</option>
							<option>general social sciences</option>
							<option>genetics</option>
							<option>geography</option>
							<option>geological and geophysical engineering</option>
							<option>geology and earth science</option>
							<option>geosciences</option>
							<option>health and medical administrative services</option>
							<option>health and medical preparatory programs</option>
							<option>history</option>
							<option>hospitality management</option>
							<option>human resources and personnel management</option>
							<option>human services and community organization</option>
							<option>humanities</option>
							<option>industrial and manufacturing engineering</option>
							<option>industrial and organizational psychology</option>
							<option>industrial production technologies</option>
							<option>information sciences</option>
							<option>intercultural and international studies</option>
							<option>interdisciplinary social sciences</option>
							<option>international business</option>
							<option>international relations</option>
							<option>journalism</option>
							<option>language and drama education</option>
							<option>liberal arts</option>
							<option>library science</option>
							<option>linguistics and comparative language and literature</option>
							<option>management information systems and statistics</option>
							<option>marketing and marketing research</option>
							<option>mass media</option>
							<option>materials engineering and materials science</option>
							<option>materials science</option>
							<option>mathematics</option>
							<option>mathematics and computer science</option>
							<option>mathematics teacher education</option>
							<option>mechanical engineering</option>
							<option>mechanical engineering related technologies</option>
							<option>medical assisting services</option>
							<option>medical technologies technicians</option>
							<option>metallurgical engineering</option>
							<option>microbiology</option>
							<option>military technologies</option>
							<option>mining and mineral engineering</option>
							<option>miscellaneous agriculture</option>
							<option>miscellaneous biology</option>
							<option>miscellaneous business & medical administration</option>
							<option>miscellaneous education</option>
							<option>miscellaneous engineering</option>
							<option>miscellaneous engineering technologies</option>
							<option>miscellaneous fine arts</option>
							<option>miscellaneous health medical professions</option>
							<option>miscellaneous psychology</option>
							<option>miscellaneous social sciences</option>
							<option>molecular biology</option>
							<option>multi-disciplinary or general science</option>
							<option>multi/interdisciplinary studies</option>
							<option>music</option>
							<option>natural resources management</option>
							<option>naval architecture and marine engineering</option>
							<option>neuroscience</option>
							<option>nuclear engineering</option>
							<option>nuclear, industrial radiology, and biological technologies</option>
							<option>nursing</option>
							<option>nutrition sciences</option>
							<option>oceanography</option>
							<option>operations logistics and e-commerce</option>
							<option>other foreign languages</option>
							<option>petroleum engineering</option>
							<option>pharmacology</option>
							<option>pharmacy pharmaceutical sciences and administration</option>
							<option>philosophy and religious studies</option>
							<option>physical and health education teaching</option>
							<option>physical fitness parks recreation and leisure</option>
							<option>physical sciences</option>
							<option>physics</option>
							<option>physiology</option>
							<option>plant science and agronomy</option>
							<option>political science and government</option>
							<option>pre-law and legal studies</option>
							<option>psychology</option>
							<option>public administration</option>
							<option>public policy</option>
							<option>school student counseling</option>
							<option>science and computer teacher education</option>
							<option>secondary teacher education</option>
							<option>social psychology</option>
							<option>social science or history teacher education</option>
							<option>social work</option>
							<option>sociology</option>
							<option>soil science</option>
							<option>special needs education</option>
							<option>statistics and decision science</option>
							<option>studio arts</option>
							<option>teacher education: multiple levels</option>
							<option>theology and religious vocations</option>
							<option>transportation sciences and technologies</option>
							<option>treatment therapy professions</option>
							<option>undeclared/other</option>
							<option>united states history</option>
							<option>visual and performing arts</option>
							<option>zoology</option>
						</select>
						<div
							className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20">
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

IntendedMajor.propTypes = {
	onChange: PropTypes.func.isRequired,
}

export default IntendedMajor