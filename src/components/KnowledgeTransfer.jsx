import React from 'react';

function KnowledgeTransfer() {
    return (
        <section className='mt-12 mb-12 px-6'>
            <p className="text-[2rem] md:text-[4rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-4">
                Knowledge Transfer
            </p>
            <div className="w-24 mx-auto border-t-4 border-white mb-8"/>
            <p className="text-[1rem] md:text-[2rem] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-4">
                If you don't know where to start, you've landed in the right place. Click the link below.
            </p>
            <div className="flex justify-center items-center my-5">
                <a
                    href="https://drive.google.com/drive/folders/1eNzOZAQZrs6bDScnVS-kewUBSEyMkgBj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-block bg-white rounded-full 
                        py-3 px-5 md:py-4 md:px-7 lg:py-4 lg:px-9 
                        text-[1rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem]
                        font-extrabold text-center text-transparent bg-clip-text 
                        bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-100 
                        shadow-md hover:shadow-lg hover:scale-110 transition duration-300 ease-out"
                    style={{
                        backgroundColor: "white",
                        border: "2px solid #f3f4f6", // Optional border for subtle contrast
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 fill-yellow-100 text-black inline-block mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg> 
                    <span>
                        Drive Link
                    </span>
                </a>
            </div>
        </section>
    )
}

export default KnowledgeTransfer;