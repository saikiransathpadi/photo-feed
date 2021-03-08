import {useState,useEffect} from 'react'
import axios from 'axios';
import './image.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import Imagemodel from './imagemodel/imagemodel'
export default function Imagefeed(){
    const [images, setimages] = useState([])
    const [loadedimg, loadimg] = useState(false)
    const [currindex, setindex] = useState(0);
    const [myimagemodel, setimagemodel] = useState(false);

    const Eachimageelement = ({ url, key, index }) => (
        <div className="image-item" key={key} >
          <img src={url} alt='loading' onClick={() => {
                                console.log(index,images[index])
                                setindex(index);
                                setimagemodel(true);
                              }}/>
        </div>
      );

    const fetchImages = (count = 50) => {
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
            <InfiniteScroll
            dataLength={images}
            next={() => fetchImages(5)}
            hasMore={true}
            >
              {myimagemodel ? (
                <Imagemodel
                  images={images}
                  currindex={currindex}
                  setindex={setindex}
                />
        ) : 
              ( <div>
                  <div className='container'>
                    {loadedimg ? images.map((image, index) => (
                            <Eachimageelement
                              url={image.urls.thumb}
                              key={index}
                              index = {index}
                              
                            />
                          )) : ''}
                  </div>
              </div> )
              }
            </InfiniteScroll>
    )
}