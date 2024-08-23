import React from 'react';
import world from './assets/worldmap.png';
import person from './assets/person.png';

function About() {
    return (
        <section
        className="bg-cover bg-center bg-opacity-80"
        style={{ backgroundImage: `url(${world})` }}
    >
        <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8 bg-black bg-opacity-40">
            <div className="flex-shrink-0 mb-6 md:mb-0">
                <img
                    src={person}
                    alt="Person"
                    className="w-full md:w-96 h-auto md:h-96 object-cover rounded-lg shadow-lg"
                />
            </div>
            <div className="text-white md:ml-8">
                <h2 className="font-bold text-2xl md:text-3xl mb-4">About Us</h2>
                <h3 className="font-bold text-lg md:text-xl mb-4">
                    15 years of passion for achieving better results for our clients
                </h3>
                <p className="leading-relaxed text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odio vitae delectus facilis, maiores
                    necessitatibus omnis distinctio saepe aliquam natus praesentium incidunt cumque, molestias, fuga
                    optio numquam. Unde aliquam aperiam assumenda voluptas consequatur repellendus expedita adipisci nam eius
                    commodi itaque, neque perspiciatis aut totam odio voluptates similique illum dolores optio,
                    aspernatur consectetur nulla! Sequi commodi nisi tempora earum dignissimos vitae ab ut? Aut recusandae,
                    cupiditate mollitia quo corrupti veniam at dolorem nemo suscipit qui veritatis illo numquam. Sit laudantium
                    aperiam sequi harum molestiae earum, ratione ipsa impedit! Obcaecati, nisi? Amet.
                </p>
            </div>
        </div>
    </section>
    );
}

export default About;
