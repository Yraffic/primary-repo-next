import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { ChevronLeft, ChevronRight, Home as HomeIcon, Laptop2, LayoutList, Library, Maximize2, Mic2, Play, Repeat, Search, Shuffle, SkipBack, SkipForward, Volume } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-10'>
            <a href='#' className="bg-white/10 group rounded overflow-hidden flex items-center justify-between hover:bg-white/20 transition-colors pr-1" >
              <Image width={80} height={80} src='/albun.jpeg' alt='album 21' />
              <strong>Album</strong>
              <button className='p-2 rounded-full bg-green-400 text-black text-center invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className="bg-white/10 group rounded overflow-hidden flex items-center justify-between hover:bg-white/20 transition-colors pr-1" >
              <Image width={80} height={80} src='/albun.jpeg' alt='album 21' />
              <strong>Album</strong>
              <button className='p-2 rounded-full bg-green-400 text-black text-center invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className="bg-white/10 group rounded overflow-hidden flex items-center justify-between hover:bg-white/20 transition-colors pr-1" >
              <Image width={80} height={80} src='/albun.jpeg' alt='album 21' />
              <strong>Album</strong>
              <button className='p-2 rounded-full bg-green-400 text-black text-center invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className="bg-white/10 group rounded overflow-hidden flex items-center justify-between hover:bg-white/20 transition-colors pr-1" >
              <Image width={80} height={80} src='/albun.jpeg' alt='album 21' />
              <strong>Album</strong>
              <button className='p-2 rounded-full bg-green-400 text-black text-center invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className="bg-white/10 group rounded overflow-hidden flex items-center justify-between hover:bg-white/20 transition-colors pr-1" >
              <Image width={80} height={80} src='/albun.jpeg' alt='album 21' />
              <strong>Album</strong>
              <button className='p-2 rounded-full bg-green-400 text-black text-center invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className="bg-white/10 group rounded overflow-hidden flex items-center justify-between hover:bg-white/20 transition-colors pr-1" >
              <Image width={80} height={80} src='/albun.jpeg' alt='album 21' />
              <strong>Album</strong>
              <button className='p-2 rounded-full bg-green-400 text-black text-center invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Diego Schell Fernandes</h2>

          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href='#' className="bg-white/5 rounded p-3 hover:bg-white/10 flex flex-col gap-2">
              <Image className='w-full' width={110} height={110} src='/albun.jpeg' alt='album 21' />
              <strong className='font-semibold'>Daily mix 1</strong>
              <span className='text-xs text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className="bg-white/5 rounded p-3 hover:bg-white/10 flex flex-col gap-2">
              <Image className='w-full' width={110} height={110} src='/albun.jpeg' alt='album 21' />
              <strong className='font-semibold'>Daily mix 1</strong>
              <span className='text-xs text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className="bg-white/5 rounded p-3 hover:bg-white/10 flex flex-col gap-2">
              <Image className='w-full' width={110} height={110} src='/albun.jpeg' alt='album 21' />
              <strong className='font-semibold'>Daily mix 1</strong>
              <span className='text-xs text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className="bg-white/5 rounded p-3 hover:bg-white/10 flex flex-col gap-2">
              <Image className='w-full' width={110} height={110} src='/albun.jpeg' alt='album 21' />
              <strong className='font-semibold'>Daily mix 1</strong>
              <span className='text-xs text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className="bg-white/5 rounded p-3 hover:bg-white/10 flex flex-col gap-2">
              <Image className='w-full' width={110} height={110} src='/albun.jpeg' alt='album 21' />
              <strong className='font-semibold'>Daily mix 1</strong>
              <span className='text-xs text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
          </div>

        </main>
      </div>
     <Footer />
    </div>
  )
}
