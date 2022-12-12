import React from 'react'
import {AiFillStar, AiOutlineStar } from "react-icons/ai";
import {BsStarHalf} from "react-icons/bs";

const title={
   color:"rgb(215, 215, 25)",
   fontSize:"2.5rem"

}

const Stars = ({stars}) => {
const ratingStar=Array.from({length:5},(_,index)=>{
let number=index+0.5;
return(
    <span  key={index}>
    {  stars>=index + 1? <AiFillStar style={title} />:stars> number ?<BsStarHalf style={title}/>: <AiOutlineStar style={title}/>
        }
      </span>
    )
})

  return (
    <div >{ ratingStar } </div>
  )
}

export default Stars
