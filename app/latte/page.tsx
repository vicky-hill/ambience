'use client'

import YouTube from 'react-youtube'
import videos from '@/utils/videos'


import image from '../../images/latte/latte-1.png'
import Image from 'next/image'
import { useState } from 'react'

interface page {

}

const opts = {
    height: 180,
    width: 300
}


export default function page({ }: page) {
    const [selectedVideo, setSelectedVideo] = useState<any>(null);

    return (
        selectedVideo ? (
            <div className='p-10 pb-5 cursor-pointer'>
                <p className='text-zinc-500 mb-10' onClick={() => setSelectedVideo(null)}>Back</p>
                <YouTube videoId={selectedVideo} opts={opts} />
            </div>
        ) : (
            <div className='p-10 flex gap-10 flex-wrap justify-between'>
                {
                    videos.latte.map((video: any) => (
                        <img key={video.videoId} onClick={() => setSelectedVideo(video.videoId)} className='h-[180px] w-[300px] cursor-pointer' src={`images/latte/${video.image}`} />
                    ))
                }
            </div >
        )
    )
}