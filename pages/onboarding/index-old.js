import { Component } from 'react'
import Layout from '../../components/layout'
import Name from '../../components/onboarding/Name'
import Intended from '../../components/onboarding/Intended'
import Achievement from '../../components/onboarding/Achievement'
import Activity from '../../components/onboarding/Activity'
import CurrentSchool from '../../components/onboarding/CurrentSchool'
import LogoBar from '../../components/logo-bar'

import Container from '../../components/onboarding/container'
import Step from '../../components/onboarding/step'

import TextStep from '../../components/onboarding/step-types/text'
import ChoicesRadioStep from '../../components/onboarding/step-types/radio'

/*
data that we ask from users:
	- mentor or mentee
	- first name
	- intended major
	- general area of interest (law/health/etc.)
	- graduation year
	- ethnicity
	- gender
	- do you intend to apply for finaid
	- school types (state flagships, normal state schools, Ivy League, T20s, private schools)
*/


const stepInfo = [
	{
		part: 'welcome',
		question: 'What\'s your name?',
		type: 'text',
		placeholder: 'Richard Hendricks',
		key: 'name',
		attribution: 'whoa'
	},
	{
		part: 'welcome',
		question: 'Are you a mentor or mentee?',
		type: 'choices-radio',
		choices: [
			{ term: 'Mentor', def: 'a college student who wants to help college applicants' },
			{ term: 'Mentee', def: 'a high school student who needs help applying to college' }
		],
		key: 'mentorMentee'
	},
	{
		part: 'welcome',
		question: 'What\'s the general field of academic study you want to go into?',
		type: 'choices-radio',
		choices: [
			{ term: 'Humanities', def: 'includes arts, history, languages/lit, law, philosophy, and theology' },
			{ term: 'Social sciences', def: 'includes anthropology, arcaeology, economics, human geography, political science, psychology, sociology, and social work' },
			{ term: 'Natural sciences', def: 'includes pure bio/chem/earth science/space science/physics' },
			{ term: 'Formal sciences', def: 'includes computer science, mathematics, and statistics' },
			{ term: 'Applied sciences', def: 'includes business, non-CS engineering, and medicine/health' },
		],
		key: 'fieldStudy'
	},
	{
		part: 'academics',
		question: 'What\'s your indended major?',
		type: 'choices-dropdown',
		choices: [
			'accounting',
			'actuarial science',
			'advertising and public relations',
			'aerospace engineering',
			'agricultural economics',
			'agriculture production and management',
			'animal sciences',
			'anthropology and archeology',
			'applied mathematics',
			'architectural engineering',
			'architecture',
			'area ethnic and civilization studies',
			'art and music education',
			'art history and criticism',
			'astronomy and astrophysics',
			'atmospheric sciences and meteorology',
			'biochemical sciences',
			'biological engineering',
			'biology',
			'biomedical engineering',
			'botany',
			'business economics',
			'business management and administration',
			'chemical engineering',
			'chemistry',
			'civil engineering',
			'clinical psychology',
			'cognitive science and biopsychology',
			'commercial art and graphic design',
			'communication disorders sciences and services',
			'communication technologies',
			'communications',
			'community and public health',
			'composition and rhetoric',
			'computer administration management and security',
			'computer and information systems',
			'computer engineering',
			'computer networking and telecommunications',
			'computer programming and data processing',
			'computer science',
			'construction services',
			'cosmetology services and culinary arts',
			'counseling psychology',
			'court reporting',
			'criminal justice and fire protection',
			'criminology',
			'drama and theater arts',
			'early childhood education',
			'ecology',
			'economics',
			'educational administration and supervision',
			'educational psychology',
			'electrical engineering',
			'electrical engineering technology',
			'electrical, mechanical, and precision technologies and production',
			'elementary education',
			'engineering and industrial management',
			'engineering mechanics physics and science',
			'engineering technologies',
			'english language and literature',
			'environmental engineering',
			'environmental science',
			'family and consumer sciences',
			'film video and photographic arts',
			'finance',
			'fine arts',
			'food science',
			'forestry',
			'french/german/latin and other common foreign language studies',
			'general agriculture',
			'general business',
			'general education',
			'general engineering',
			'general medical and health services',
			'general social sciences',
			'genetics',
			'geography',
			'geological and geophysical engineering',
			'geology and earth science',
			'geosciences',
			'health and medical administrative services',
			'health and medical preparatory programs',
			'history',
			'hospitality management',
			'human resources and personnel management',
			'human services and community organization',
			'humanities',
			'industrial and manufacturing engineering',
			'industrial and organizational psychology',
			'industrial production technologies',
			'information sciences',
			'intercultural and international studies',
			'interdisciplinary social sciences',
			'international business',
			'international relations',
			'journalism',
			'language and drama education',
			'liberal arts',
			'library science',
			'linguistics and comparative language and literature',
			'management information systems and statistics',
			'marketing and marketing research',
			'mass media',
			'materials engineering and materials science',
			'materials science',
			'mathematics',
			'mathematics and computer science',
			'mathematics teacher education',
			'mechanical engineering',
			'mechanical engineering related technologies',
			'medical assisting services',
			'medical technologies technicians',
			'metallurgical engineering',
			'microbiology',
			'military technologies',
			'mining and mineral engineering',
			'miscellaneous agriculture',
			'miscellaneous biology',
			'miscellaneous business & medical administration',
			'miscellaneous education',
			'miscellaneous engineering',
			'miscellaneous engineering technologies',
			'miscellaneous fine arts',
			'miscellaneous health medical professions',
			'miscellaneous psychology',
			'miscellaneous social sciences',
			'molecular biology',
			'multi-disciplinary or general science',
			'multi/interdisciplinary studies',
			'music',
			'natural resources management',
			'naval architecture and marine engineering',
			'neuroscience',
			'nuclear engineering',
			'nuclear, industrial radiology, and biological technologies',
			'nursing',
			'nutrition sciences',
			'oceanography',
			'operations logistics and e-commerce',
			'other foreign languages',
			'petroleum engineering',
			'pharmacology',
			'pharmacy pharmaceutical sciences and administration',
			'philosophy and religious studies',
			'physical and health education teaching',
			'physical fitness parks recreation and leisure',
			'physical sciences',
			'physics',
			'physiology',
			'plant science and agronomy',
			'political science and government',
			'pre-law and legal studies',
			'psychology',
			'public administration',
			'public policy',
			'school student counseling',
			'science and computer teacher education',
			'secondary teacher education',
			'social psychology',
			'social science or history teacher education',
			'social work',
			'sociology',
			'soil science',
			'special needs education',
			'statistics and decision science',
			'studio arts',
			'teacher education: multiple levels',
			'theology and religious vocations',
			'transportation sciences and technologies',
			'treatment therapy professions',
			'undeclared/other',
			'united states history',
			'visual and performing arts',
			'zoology'
		],
		attribution: 'college major data courtesy FiveThirtyEight and US Census Bureau',
		key: 'intendedMajor'
	},
	{
		part: 'demographics',
		question: 'When do you intend to graduate from your current academic program (i.e. high school or college)?',
		type: 'choices-dropdown',
		choices: [
			'2020',
			'2021',
			'2022',
			'2023',
			'2024'
		],
		key: 'gradYear'
	},
	{
		part: 'demographics',
		question: 'What race do you identify most with?',
		type: 'choices-dropdown',
		choices: [
			'White',
			'Black/African-American',
			'American Indian or Alaska Native',
			'Asian',
			'Native Hawaiian or Pacific Islander',
		],
		attribution: 'racial classifications courtesy US Census Bureau. note: this data will NOT be visible to others and will only help us match students with similar backgrounds.',
		key: 'race'
	},
	{
		part: 'demographics',
		question: 'What is your gender?',
		type: 'choices-dropdown',
		choices: [
			'Male',
			'Female',
			'Other',
		],
		attribution: 'if you don\'t identify with any of the options above, please email us at acceptedlabs@gmail.com.',
		key: 'gender'
	},
	{
		part: 'demographics',
		question: 'Do you intend to apply for financial aid?',
		type: 'choices-radio',
		choices: [
			{ term: 'Yes', def: 'I intend to file the FAFSA and apply for need-based financial aid' },
			{ term: 'No', def: 'I don\'t intend to file the FAFSA.' },
		],
		key: 'finaid'
	},
]

class Onboarding extends Component {
	constructor(props) {
		super(props)
		this.state = {
			step: 3,
			totalSteps: 5,
			firstName: '',
			lastName: '',
			gradyear: new Number(),
			intendedMajor: '',
			extraAct: [],
			achievement: [],
			currentHighSchool: '',
			currentUniversity: '', // mentor only
		}
	}

	handleChange(stateKey) {
		return e => this.setState({ [stateKey]: e.target.value })
	}

	handleArrayChange(data) {
		this.setState({ extraAct: data })
	}

	handleArrayChangeAch(data) {
		this.setState({ achievement: data })
	}

	nextStep() {
		this.setState({ step: this.state.step + (this.state.step >= this.state.totalSteps ? 0 : 1) })
	}

	prevStep() {
		this.setState({ step: this.state.step + (this.state.step <= 0 ? 0 : -1) })
	}

	renderStep(stepNum) {
		var stepData = stepInfo[stepNum - 1]
		var result = null
		switch (stepData.type) {
			case 'text':
				result = <TextStep
					question={stepData.question}
					placeholder={stepData.placeholder}
					onChange={this.handleChange(stepData.key)}
					value={this.state[stepData.key]}
					attribution={stepData.attribution ? stepData.attribution : null}
				/>
				break
			case 'choices-radio':
				result = <ChoicesRadioStep
					question={stepData.question}
					onChange={this.handleChange(stepData.key)}
					choices={stepData.choices}
					value={this.state[stepData.key]}
					attribution={stepData.attribution ? stepData.attribution : null}
				/>
			default:
				break
		}
		return result
	}

	render() {
		return (
			<Layout>
				<Container parts={['welcome', 'academics', 'demographics', 'school types']} curPart={0} header="Let's get started.">
					{this.renderStep(this.state.step)}
					{/* <Step question="What's your name?" placeholder="e.g. Richard Hendricks" /> */}
				</Container>
				{/* <div className="onboarding">
				</div> */}
				<style jsx>{`

				`}</style>
			</Layout>
		)
	}

}


// function Onboarding() {
//     const [state, setState] = useState({
//         step: 1,
//         firstName: '',
//         lastName: '',
//         gradyear: new Number(),
//         intendedMajor: '',
//         extraAct: [],
//         achievement: [],
//         currentHighSchool: '',
//         currentUniversity: '', //mentor only
//     })

//     const handleChange = input => e => {
//         setState({
//             ...state,
//             [input]: e.target.value,
//         })
//     }

//     const handleArrayChange = data => {
//         setState({
//             ...state,
//             extraAct: data,
//         })
//     }

//     const handleArrayChangeAch = data => {
//         setState({
//             ...state,
//             achievement: data,
//         })
//     }

//     const nextStep = (e) => {
//         e.preventDefault()
//         let { step } = state
//         step += 1

//         setState({
//             ...state,
//             step,
//         })
//     }

//     const prevStep = (e) => {
//         e.preventDefault()
//         let { step } = state
//         step -= 1

//         setState({
//             ...state,
//             step: step,
//         })
//     }

//     const display = () => {
//         switch (state.step) {
//             case 1:
//                 return (
//                     <Name state={state} nextStep={nextStep} handleChange={handleChange} />
//                 )

//             case 2:
//                 return (
//                     <Intended state={state} prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} />
//                 )

//             case 3:
//                 return (
//                     <Activity
//                         state={state}
//                         prevStep={prevStep}
//                         nextStep={nextStep}
//                         handleArrayChange={handleArrayChange}
//                         activities={state.extraAct}
//                     />
//                 )

//             case 4:
//                 return (
//                     <Achievement
//                         state={state}
//                         prevStep={prevStep}
//                         nextStep={nextStep}
//                         handleArrayChange={handleArrayChangeAch}
//                         achievement={state.achievement}
//                     />
//                 )

//             case 5:
//                 return (
//                     <CurrentSchool
//                         state={state} nextStep={nextStep} handleChange={handleChange}
//                     />
//                 )
//         }
//     }


//     return (

//     )
// }

export default Onboarding