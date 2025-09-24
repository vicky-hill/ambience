'use client'

import YouTube from 'react-youtube'

interface page {

}

const opts = {
    height: 180,
    width: 300
}

const latteVideos: string[] = [
    '4CkTBn014hw',
    'qO-K3D9BdzY',
    'dRHCAgN6LZw',
    'DoirTSeqX5A',
    'vPOLJ-MDIyI',
    'mQv1qjIhhOE',
    'bPTSdK-GDPM',
    'QDrXHP8gLio',
    // '',
    // '',
    // '',
    // '',
    // '',
    // '',
    // '',
]

export default function page({ }: page) {

    return (
        <div className='p-10 flex gap-10 flex-wrap justify-between'>
            {
                latteVideos.map(video => (
                    <YouTube key={video} videoId={video} opts={opts} />
                ))
            }
        </div>
    )
}