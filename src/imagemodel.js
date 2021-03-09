// import "./imagemodel.css";


export default function Imagemodel(props) {

  const Left = () => {
    return props.currindex > 0 ? (
      <div className='left1'>
      <img
        class="cls left"
        src="https://icon-library.com/images/left-right-arrow-icon/left-right-arrow-icon-5.jpg"
        alt="loading"
        onClick={() => {
          props.setindex(props.currindex - 1);
        }}
      />
      </div>
    ) : (
      ""
    );
  };

  const Right = () => {
    return (
      props.currindex < props.images.length - 1 ?
      <div className='right1'>
      <img
        class="cls right"
        src="https://icon-library.com/images/left-right-arrow-icon/left-right-arrow-icon-5.jpg"
        alt="loading"
        onClick={() => props.setindex(props.currindex + 1)}
      />
      </div> : ''
    );
  };


  return (
    <div className='imagemodal'> 
      <i className='cancel' onClick={()=>props.setimagemodel(false)}>&#x2715;</i>
    <div className='modeldiv'>
      <Left className='arrows'/>
      <Right className='arrows'/>
      <img src={props.images[props.currindex].urls.small} alt="loading" className='foreachimage'/>
      
    </div>
    </div>
  );
}
