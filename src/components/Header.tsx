import { Bell, Search } from 'styled-icons/boxicons-regular'
import logo from '../../public/netflix_logo.webp'

export function Header() {
  return (
    <header className='flex bg-zinc-900 items-center py-4 border-b-[1px] border-zinc-600 w-full'>
      <img src={logo} alt="" height={52} width={52} className='mx-10' />
      <div className="flex items-center justify-between w-full">
        <nav className="flex items-center gap-5 text-zinc-300 child-hover:text-zinc-100 child:transition-all">
          <button className='text-zinc-50 font-bold'>Home</button>
          <button>TV Programmes</button>
          <button>Films</button>
          <button>Originals</button>
          <button>Recently Added</button>
          <button>My List</button>
        </nav>
        <div className="mx-10 flex items-center justify-end gap-4 text-zinc-300 child-hover:text-zinc-100 font-thin child:cursor-pointer child:transition-all">
          <Search size={25} />
          <h3>CHILDREN</h3>
          <Bell size={25} />
          <img src="https://i.ibb.co/sWL83nZ/profile-pic.jpg" alt="profile" className='rounded-full h-[50px] w-[50px] border-2 border-zinc-500' />
        </div>
      </div>
    </header>
  )
}
