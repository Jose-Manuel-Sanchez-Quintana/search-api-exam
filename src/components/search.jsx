import { React, useState, useEffect } from 'react';
import logo from '../assets/img/trueEvents.png'

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
            <div className="h-screen w-full bg-dark relative flex overflow-hidden">
                <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
                    <img className='absolute left-0 top-0 h-16' src={logo} alt="logo" />
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg>
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                </aside>
                <div className="w-full h-full flex flex-col justify-between">
                    <header className="h-16 w-full flex items-center relative justify-center px-5 space-x-10 bg-gray-800">
                        <div className="flex flex-shrink-0 items-center space-x-4text-white">
                            <div className="flex flex-col items-end ">
                                <div className="pb-4 bg-transparent">
                                    <div className="relative mt-1">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input type="text" value={search} onChange={searcher} id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl mt-4 w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for location" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className="w-full h-full flex relative overflow-y-hidden">
                        <div className="h-auto w-full m-4 flex flex-wrap rounded-tl grid-flow-col grid-rows-3 gap-5 overflow-y-scroll ml-28">
                            {results.map((events) => (
                                <div className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden my-4">
                                    <img className="w-full h-60 object-cover object-center" src={events.imagen} alt="avatar" />
                                    <div className="flex items-center px-6 py-3 bg-gray-600">
                                        <h1 className="mx-3 text-white font-semibold text-lg">"{events.zona}"</h1>
                                    </div>
                                    <div className="py-4 px-6">
                                        <h1 className="text-2xl font-semibold text-gray-800">{events.nombre_evento}</h1>
                                        <p className=" py-2 text-xl text-gray-700">{events.descripcion}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Search