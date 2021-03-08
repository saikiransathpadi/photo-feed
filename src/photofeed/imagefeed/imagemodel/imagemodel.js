import "./imagemodel.css";

// import { checkPropTypes } from "prop-types";

export default function Imagemodel(props) {

  const Left = () => {
    return props.currindex > 0 ? (
      <img
        class="cls"
        src="https://icon-library.com/images/left-right-arrow-icon/left-right-arrow-icon-5.jpg"
        alt="loading"
        onClick={() => {
          props.setindex(props.currindex - 1);
        }}
      />
    ) : (
      ""
    );
  };

  const Right = () => {
    return (
      <img
        class="cls right"
        src="https://icon-library.com/images/left-right-arrow-icon/left-right-arrow-icon-5.jpg"
        alt="loading"
        onClick={() => props.setindex(props.currindex + 1)}
      />
    );
  };


  return (
    <div className='modeldiv'>
      <Left className='arrows'/>
      <img src={props.images[props.currindex].urls.small} alt="loading" className='foreachimage'/>
      <Right className='arrows'/>
    </div>
  );
}
