'use client'

import YouTube from 'react-youtube'

interface Video {
    video: string
}

const opts = {
    height: 180,
    width: 300
}


export default function Video({ video }: Video) {

    return (
        <YouTube videoId={video} opts={opts} />
    )
}