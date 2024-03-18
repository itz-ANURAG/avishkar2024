// team members profile will be given on this page 
import React from 'react'
import abhishek from '../photos/abhishek.jpg'
import anurag from '../photos/anurag.jpg'
import chirag from '../photos/chirag.jpg'
import aryan from '../photos/aryan.jpg'
import '../stylesheets/team.css'
import { FaInstagramSquare,FaLinkedin} from "react-icons/fa";
import Layout4 from '../backgroundLayout/Layout4'


function Team() {
    return (
        <>
        <Layout4>
            <section className=" dark:bg-gray-900 body">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="p-4 md:p-0 max-w-screen-sm text-center md:text-left md:pl-0 mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
                        <p className="font-light text-black lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="md:col-span-1">
                            <TeamCard  memberName="Abhishek Kumar Yadav" memberImage={abhishek} memberDescription="FrontEnd Developer"/>
                            <div className="mb-6"></div> {/* Add this empty div for the gap */}
                            <TeamCard  memberName="Anurag Bandejia" memberImage={anurag} memberDescription="FrontEnd Developer"/>
                        </div> 
                        <div className="md:col-span-1">
                            <TeamCard  memberName="Chirag Murarka" memberImage={chirag} memberDescription="BackEnd Developer"/>
                            <div className="mb-6"></div>
                            <TeamCard  memberName="Aryan Kesharwani" memberImage={aryan} memberDescription="BackEnd Developer"/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout4>
        </>
    )
}




const TeamCard = ({ memberName, memberImage, memberDescription }) => {
    return (
        <div className="w-full md:w-1/2 items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="">
                <img className="p-10 w-full h-full object-cover rounded-lg" src={memberImage} alt={memberName} />
            </a>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{memberName}</a>
                </h3>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{memberDescription}</p>
                <ul className="flex space-x-4 sm:mt-0">
                    <li>
                        <a href="#" className="text-gray-500 hover:text-pink-400 dark:hover:text-white">
                            <FaInstagramSquare className='text-4xl' />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-500 hover:text-blue-400 dark:hover:text-white">
                            <FaLinkedin className='text-4xl'/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default Team

