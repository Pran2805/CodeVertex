import React from 'react'
import communication from './assets/bgcommunication.png'
import rocket from './assets/rocket.png'
import headphone from './assets/headphone.png'
import clock from './assets/clock.png'
function Home() {
    return (
        <>
            <section
            id="home"
            className="relative flex flex-col md:flex-row items-center justify-start h-auto md:h-[600px] bg-cover bg-center bg-opacity-80"
            style={{ backgroundImage: `url(${communication})`, opacity: 0.9 }}
        >
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 px-4 md:px-8 py-6 md:py-0">
                <div id="gradient-line" className="h-2 md:h-[200px] w-full md:w-2 bg-gradient-to-b from-orange-500 via-pink-600 to-purple-600 md:ml-10 mb-4 md:mb-0"></div>
                {/* image box with shade */}
                <div id="home-content" className="text-white p-4 md:p-6 shadow-lg bg-black bg-opacity-75 rounded-lg w-full md:w-3/4 lg:w-1/2">
                    <h4 className="text-lg font-semibold mb-2">We are Creative</h4>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">Creative Digital Agency</h2>
                    <p className="mt-4 text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab optio deserunt assumenda minima blanditiis aspernatur. Earum labore unde officia iste neque, delectus, maxime reiciendis facere eligendi maiores error voluptatibus numquam cum repellendus quos adipisci, deserunt mollitia ullam provident alias molestiae? Laboriosam est corporis esse reprehenderit quidem, similique sapiente aperiam quisquam?
                    </p>
                    <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                        <button className="gradient-btn px-6 py-2 rounded-lg text-white bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 hover:from-orange-400 hover:via-pink-500 hover:to-purple-500 active:from-orange-500 active:via-pink-600 active:to-purple-600">
                            Read More
                        </button>
                        <button id="empty-btn" className="px-4 py-2 border-2 border-white text-white rounded-lg hover:bg-gray-600 active:bg-gray-500">
                            Request a Console
                        </button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home
