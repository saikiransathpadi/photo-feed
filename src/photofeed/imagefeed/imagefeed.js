import {useState,useEffect} from 'react'
import axios from 'axios';
import './image.css'
export default function Imagefeed(){
    const [images, setimages] = useState([])

    const Eachimageelement = ({ url, key }) => (
        <div className="image-item" key={key} >
          <img src={url} />
        </div>
      );

    const fetchImages = (count = 10) => {
        const accessKey = "6lw_er5SLMrXlcDbJVfGg1d_zxLKqgdfYYfkSljUNpA";
    
        axios
          .get(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`)
          .then (res => {
            setimages([...images, ...res.data]);
          });
    };
    useEffect(()=>{
        fetchImages()
        console.log(images)
    },[])
    return (
        <div>
            {images.map((image, index) => (
                    <Eachimageelement
                      url={image.urls.regular}
                      key={index}
                    />
                  ))
                }
        </div>
    )
}