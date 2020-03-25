import { useState } from 'react'

export default ({ onChange }) => {
    const [selected, _setSelected] = useState('')
    const setSelected = selected => {
        onChange(selected)
        _setSelected(selected)
    }

    return (
        <div className="mt-10 text-center">
            <h4 className="text-3xl font-medium">
                What race do you identify most with?
            </h4>
            <h5 className="mt-2 text-sm text-gray-700 mx-auto my-0 max-w-lg">
                racial classifications courtesy US Census Bureau. note: this data will NOT be visible to others and will only help us match students with similar backgrounds.
            </h5>
            <div className="mt-10">
                <div className="max-w-sm mx-auto my-0">
                    <div className="relative">
                        <select
                            className="block appearance-none w-full border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            onChange={e => setSelected(e.target.value)}
                            value={selected}
                        >
                            <option value="white">White</option>
                            <option value="black">Black/African-American</option>
                            <option value="am-indian">American Indian or Alaska Native</option>
                            <option value="asian">Asian</option>
                            <option value="pac-isl">Native Hawaiian or Pacific Islander</option>
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}