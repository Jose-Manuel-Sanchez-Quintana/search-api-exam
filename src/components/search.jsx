import { React, useState, useEffect } from 'react';

const Search = () => {

    //set hooks for useState
    const [events, setEvents] = useState([])
    const [search, setSearch] = useState("")

    //create function to fetch api
    const url = 'http://localhost:3001/eventos'

    const showData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setEvents(data)
    }

    //search function

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    //filter method
    let results = []
    if (!search) {
        results = events
    } else {
        results = events.filter((dato) =>
            dato.zona.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }

    //calling the data
    useEffect(() => {
        showData()
    }, [])


    return (
        <>
            <div className='p-10'>
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    <div className="pb-4 bg-transparent">
                        <label for="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" value={search} onChange={searcher} id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for location" />
                        </div>
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className='text-center'>
                                <th scope="col" className="px-6 py-3">
                                    Name of the Event
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Location of the event
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date of the event
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {results.map((events) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={events.id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {events.nombre_evento}
                                    </th>
                                    <td className="px-6 py-4">
                                        {events.zona}
                                    </td>
                                    <td className="px-6 py-4">
                                        {events.fecha_evento}
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Search