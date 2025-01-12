import React from 'react';

function KnowledgeTransfer() {
    return (
        <section className='mt-12 mb-12'>
            <p className="text-[2rem] md:text-[4rem] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-4">
        Knowledge Transfer
      </p>
      <div className="w-24 mx-auto border-t-4 border-white mb-8"></div>
      <p className="text-[1rem] md:text-[2rem] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-600 mb-4">
      If you don’t know where to start, you’ve landed in the right place. Click the link below.
      </p>
      <div className='flex justify-center'>
        <button class="flex items-center rounded-md bg-gradient-to-br from-gray-800 via-gray-900 to-black py-4 px-8 border border-transparent text-center text-md text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
  <span className='pl-3'>Drive Link</span>
</button>
</div>
      
        </section>
    )
}

export default KnowledgeTransfer;