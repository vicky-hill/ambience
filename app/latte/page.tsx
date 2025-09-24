'use client'

import YouTube from 'react-youtube'
import videos from '@/utils/videos'

interface page {

}

const opts = {
    height: 180,
    width: 300
}


export default function page({ }: page) {

    return (
        <div className='p-10 flex gap-10 flex-wrap justify-between'>
            {
                videos.latte.map((video: any) => (
                    <YouTube key={video.videoId} videoId={video.videoId} opts={opts} />
                ))
            }
        </div>
    )
}