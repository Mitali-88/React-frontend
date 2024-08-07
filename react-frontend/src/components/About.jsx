import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import about from "../assets/images/about.png";
import json from "../json/about.json";

export const About = () => {
    const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
    const greetings = Object.values(json.greetings);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }, 2000); 

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [greetings.length]);

    return (
        <div className="p-4">
            <div className="w-full h-20 mb-10 flex items-center justify-center">
                <h2 className="text-4xl">
                    <Typewriter
                        options={{
                            strings: greetings[currentGreetingIndex],
                            autoStart: true,
                            loop: true,
                            delay: 60,
                            deleteSpeed: 30,
                        }}
                    />
                </h2>
            </div>

            <div className="flex">
                <div className="flex-1 ml-10">
                    <img
                        src={about}
                        alt="About Us"
                        className="w-1/2 h-auto object-cover"
                    />
                </div>

                <div className="flex-1 pl-4 mr-10">
                    <p className="text-2xl font-sans">
                        {json.eventManagement.aboutContent}
                    </p>
                </div>
            </div>
        </div>
    );
};
