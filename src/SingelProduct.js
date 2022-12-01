import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useProContext } from './Component/context/ProductContext'
import "./SingleProduct.css"
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import Stars from './Stars';
import AddToCart from "./AddToCart"

const API = "https://api.pujakaitem.com/api/products"

const SingelProduct = () => {
  const { id } = useParams()
  const { getSingleProduct, singleProduct } = useProContext();
  const { id: jk, name, image = [{ url: " " }], company, price, description, stock, reviews, stars } = singleProduct

  const [mainImg, setmainImg] = useState(image[0])

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, [])


  return (
    <div>
      <div className='sing-Pro-navg'>
        <NavLink to="/">
          Home
        </NavLink>/<span>{singleProduct.name} </span>
      </div  >
      <div className='container'>
        <div className='sing-cont-pro'>
          <div className='sing-cont-data img-p'>
            <div className='sing-img-pre'>
              {
                image.map((ele, ind) => <div key={ind} className='sing-img-pre-box'><img onMouseEnter={() => setmainImg(ele)} src={`${ele.url}`} alt=" " ></img> </div>)
              }
              {/*     
            <div className='sing-img-pre-box'>dfg</div> */}
            </div>
            <div className="sing-img-pre-main">
              <div className='sing-img-pre-box-main'>
                <div className='img-main'><img src={`${mainImg.url}`} alt=""></img></div>
              </div>
            </div>
          </div>
          <div className='sing-cont-data sing-pro-data-con'>
            <h2 className='text-trans' >{name} </h2>
            <div><Stars stars={stars} /></div>
            <div><strong>Reviews:</strong> {reviews} </div>
            <del><strong>MRP: Rs</strong>{price} </del>
            <div><strong>Deal of the Day : Rs</strong> {price} </div>
            <div className='distjus'><strong>Description:</strong> {description} </div>
            <div className='sing-pro-icon'>
              <div className='sing-icon-pad'>
                <TbTruckDelivery className='iconsz' />
                <p>Free delivery</p>
              </div>
              <div className='sing-icon-pad'>
                <MdOutlineSecurity className='iconsz' />
                <p>Free delivery</p>
              </div>
              <div className='sing-icon-pad'>
                <GiReceiveMoney className='iconsz' />
                <p>Free delivery</p>
              </div>
              <div className='sing-icon-pad'>
                <RiSecurePaymentLine className='iconsz' />
                <p>Free delivery</p>
              </div>
            </div>
            <div><strong>Available :</strong> <span> {stock > 0 ? "InStock" : "Not Avaliable"}</span> </div>
            <div><strong>ID :</strong> {id} </div>
            <div><strong> Brand:</strong>{company} </div>
            <hr className='hrcol'></hr>
            <div>
              {stock > 0 && <AddToCart product={singleProduct} />}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SingelProduct
