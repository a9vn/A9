import React from 'react'
import { assets } from '../../assets/icon-assets/assets'

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`fixed top-0 left-0 h-full z-50 transition-transform duration-500 ease-in-out ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className='w-[280px] h-full p-2 flex-col gap-2 text-white bg-black shadow-2xl'>
        <div className='p-4 border-b border-gray-700'>
          <h2 className='text-xl font-bold text-center'>Monster Siren</h2>
        </div>
        
        <div className='w-[270px] h-full p-2 flex-col gap-2 text-white bg-black shadow-2xl'>
                <div className='bg-[#121212] h-[85%] rounded'>
                    <div className='p-4 flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <img className='w-8' src={assets.stack_icon} alt="" />
                            <p className='font-semibold' >Your Collection</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img className='w-5' src={assets.arrow_icon} alt="" />
                            <img className='w-5' src={assets.plus_icon} alt="" />
                        </div>
                    </div>
                    <div className= 'p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                        <h1>Create your first playlist</h1>
                        <p className='font-light'>try now</p>
                        <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:bg-gray-200 transition-colors duration-200'>Create Playlist</button>
                    </div>

                    <div className= 'p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                        <h1>Recently Played</h1>
                        <p className='font-light'>#</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Sidebar

