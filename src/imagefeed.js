import {useState,useEffect} from 'react'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Imagemodel from './imagemodel'
import './index.css'
export default function Imagefeed(){
    const [images, setimages] = useState([])
    const [loadedimg, loadimg] = useState(false)
    const [currindex, setindex] = useState(0);
    const [myimagemodel, setimagemodel] = useState(false);

    const Eachimageelement = ({ url, key, index }) => (
        <div key={key} className='eachimage' >
          <img className='eachimage' src={url} alt='loading' onClick={() => {
                                setindex(index);
                                setimagemodel(true);
                              }}/>
        </div>
      );
    const Imagemodal = ()=>{
      return (
        myimagemodel ?
        <Imagemodel
                  images={images}
                  currindex={currindex}
                  setindex={setindex}
                  setimagemodel = {setimagemodel}
                />
                : ''
      )
    }
    const fetchImages = (count = 20) => {
        const accessKey = "cmfpyaj9BFVWFUvsBms_qigNhLGI0LCSCmkEVVQy680";
    
        axios
          .get(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`)
          .then (res => {
            setimages([...images, ...res.data]);
            loadimg(true)
          });
    };
    useEffect(()=>{
        fetchImages()
        console.log(images)
    },[])
    return (
          <div className='feed'>
            <InfiniteScroll
            dataLength={images}
            next={() => setTimeout(fetchImages(5),10000)}
            hasMore={true}
            >
              <Imagemodal className="imagemodal"/> 
               <div className="grid">
                    {loadedimg ? images.map((image, index) => (
                            <Eachimageelement
                              url={image.urls.thumb}
                              key={index}
                              index = {index}
                              
                            />
                          )) : ''}
              </div> 
              
            </InfiniteScroll>
            </div>
    )
}