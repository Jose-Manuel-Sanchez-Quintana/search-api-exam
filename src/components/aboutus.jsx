import React from 'react'
import logo from '../assets/img/trueEvents.png'

export const AboutUs = () => {
    return (
        <div class="sm:flex items-center max-w-screen-xl m-12">
            <div class="sm:w-1/2 p-10">
                <div class="image object-center text-center">
                    <img src="https://i.imgur.com/WbQnbas.png" />
                </div>
            </div>
            <div class="sm:w-1/2 p-5">
                <div class="text">
                    <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">Sobre</span>
                    <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">True events</span>
                    </h2>
                    <p class="text-gray-700">
                        True Events es una vanguardista empresa dedicada a la creación de software, 
                        estableciendo nuevos estándares en innovación y rendimiento. Nos destacamos por
                        nuestra pasión por la excelencia y nuestra misión de impulsar el progreso a través 
                        de soluciones tecnológicas avanzadas. En True Events, nos consideramos arquitectos 
                        digitales, diseñando y desarrollando software de vanguardia para abordar los desafíos
                        más apremiantes de la era moderna. Nuestra firma se enorgullece de fusionar la 
                        creatividad con la funcionalidad, brindando soluciones que van más allá de las 
                        expectativas convencionales.
                    </p>
                </div>
            </div>
        </div>
    )
}
