import { LayoutList, Mic2, Repeat, SkipForward } from "lucide-react"
import { SkipBack } from "lucide-react"
import { Shuffle } from "lucide-react"
import { Play } from "lucide-react"
import { Laptop2, Volume } from "lucide-react"
import { Maximize2 } from "lucide-react"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className='bg-zinc-900 border-t border-zinc-700 px-6 py-2 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <Image width={50} height={50} src='/albun.jpeg' alt='album 21' />
                <div className='flex flex-col'>
                    <strong className='font-normal'>Bank Account</strong>
                    <span className='text-xs text-zinc-400'>21 savage</span>
                </div>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <div className='flex items-center gap-3'>
                    <Shuffle />
                    <SkipBack />

                    <button className='p-2 rounded-full bg-white text-black text-center'>
                        <Play />
                    </button>

                    <SkipForward />
                    <Repeat />
                </div>
                <div className='flex items-center gap-3'>
                    <span className='text-xs text-zinc-500'>0:31</span>
                    <div className='h-1 rounded-full w-96 bg-zinc-600'>
                        <div className='bg-zinc-200 h-1 w-20'></div>
                    </div>
                    <span className='text-xs text-zinc-500 rounded-full'>2:31</span>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <Mic2 size={20} />
                <LayoutList size={20} />
                <Laptop2 size={20} />
                <div className='flex items-center gap-2'>
                    <Volume size={20} />
                    <div className='h-1 rounded-full w-24 bg-zinc-600'>
                        <div className='bg-zinc-200 h-1 w-10'></div>
                    </div>
                </div>
                <Maximize2 size={20} />
            </div>
        </footer>
    )
}