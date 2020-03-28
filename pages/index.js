import Link from 'next/link'
import Navbar from '../components/navbar'

const Index = () => (
	<>
		<Navbar />
		<div className="w-screen px-16 mt-8 sm:mt-16 md:mt-20 lg:mt-32 text-center">
			<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-serif font-black text-gray-800 leading-tight">Stressed about college apps?</h1>
			<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-serif font-black text-gray-800 leading-tight">We can help.</h1>
			<h3 className="text-lg md:text-xl lg:text-xl xl:text-xl font-normal text-gray-700 mt-4 max-w-xl mx-auto my-0">Accepted pairs you up with real college students who can guide you through the entire process — from application to acceptance.</h3>
			<Link href="/onboarding/"><button className="mt-5 bg-blue-700 text-white rounded-full text-sm font-medium px-4 py-2 hover:bg-blue-800">Get started &mdash; it's free</button></Link>
		</div>

		<div className="w-screen px-16 mt-12 sm:mt-32 md:mt-40 lg:mt-40 xl:mt-40 py-8 text-center">
			<h2 className="text-4xl font-bold text-gray-800 leading-tight mb-8">How It Works</h2>
			<div className="max-w-5xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 mx-auto my-0">
				<div className="col-span-1 shadow-lg rounded border border-solid transform transition-transform duration-200 ease-in-out hover:scale-105">
					<div className="px-6 pt-6">
						<h3 className="font-bold text-2xl mb-2 text-left">1. Fill out a short survey</h3>
					</div>
					<div className="px-6 pt-2 pb-6 text-left text-gray-700">
						Tell us a bit about yourself. We ask for basic things like academic plans and types of schools you&apos;re interested in. We keep this information secret unless you choose to share it with a mentor.
					</div>
				</div>
				<div className="col-span-1 shadow-lg rounded border border-solid transform transition-transform duration-200 ease-in-out hover:scale-105">
					<div className="px-6 pt-6">
						<h3 className="font-bold text-2xl mb-2 text-left">2. Get connected with mentors</h3>
					</div>
					<div className="px-6 pt-2 pb-6 text-left text-gray-700">
						Based on your responses, we generate a list of mentors with similar backgrounds, each with their own specialty. Connect with one to get help from them, and then unconnect when done.
					</div>
				</div>
				<div className="col-span-1 shadow-lg rounded border border-solid transform transition-transform duration-200 ease-in-out hover:scale-105">
					<div className="px-6 pt-6">
						<h3 className="font-bold text-2xl mb-2 text-left">3. Keep connecting!</h3>
					</div>
					<div className="px-6 pt-2 pb-6 text-left text-gray-700">
						Keep connecting with mentors until you&apos;re done with the college application process!
					</div>
				</div>
			</div>
		</div>

		<div className="mt-12 px-16 py-8 text-center">
			<div className="py-2 px-2 max-w-sm text-left mx-auto my-0 rounded-full bg-gray-300 mb-4 flex justify-center flex-column items-center">
				<span className="pill text-xs bg-blue-700 py-1 px-2 rounded-full text-white font-bold mr-2">NEW</span>
				<span>Follow us on <a href="//instagram.com/acceptedapp" className="font-medium">Instagram</a> for updates!</span>
			</div>
			<p className="text-sm text-gray-800 font-medium">&copy; 2020 Accepted Labs. All rights reserved.</p>
		</div>
	</>
)

export default Index