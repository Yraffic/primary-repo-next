import { HomeIcon, Search } from "lucide-react"
import { Library } from "lucide-react"

export const Sidebar = () => {
    return (
        <aside className='w-72 bg-zinc-950 p-6'>
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-red-600 rounded-full' />
                <div className='w-3 h-3 bg-yellow-600 rounded-full' />
                <div className='w-3 h-3 bg-green-600 rounded-full' />
            </div>
            <nav className='space-y-5 text-zinc-200 mt-10'>
                <a href="" className='flex items-center gap-2 text-xs font-semibold'>
                    <HomeIcon />
                    Home
                </a>
                <a href="" className='flex items-center gap-2 text-xs text-bol'>
                    <Search />
                    Search
                </a>
                <a href="" className='flex items-center gap-2 text-xs text-bol'>
                    <Library />
                    Your Library
                </a>
            </nav>

            <nav className='mt-6 pt-2 border-t border-zinc-800 flex flex-col gap-3 text-sm text-zinc-600'>
                <a href="" className='hover:text-zinc-200'>Funk</a>
                <a href="" className='hover:text-zinc-200'>Top Brasil</a>
                <a href="" className='hover:text-zinc-200'>My Playlist</a>
                <a href="" className='hover:text-zinc-200'>Punk</a>
                <a href="" className='hover:text-zinc-200'>Rock</a>
                <a href="" className='hover:text-zinc-200'>Samba</a>
            </nav>
        </aside>
    )
}