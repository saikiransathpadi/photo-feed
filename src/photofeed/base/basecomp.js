import './basecomp.css'
import Imagefeed from '../imagefeed/imagefeed'
export default function Base(){
    return (
        <div>
            <body>
                <h1 className='head'>Photo Feed</h1>
                <Imagefeed/>
            </body>
        </div>
    )
}