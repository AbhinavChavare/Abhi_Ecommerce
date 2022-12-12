import React from 'react'
import "./ListView.css"
import { NavLink } from 'react-router-dom'

const ListView = ({ products }) => {
    console.warn(products)
    return (

        <div className='contcent'  >
            {
                products.map((ele, ind) => {
                    return (
                        <div key={ind} className='ListPorCon '>
                        <NavLink to={`/SingleProduct/${ele.id}`}>
                                <div className='listProimg'>
                                    <img src={ele.image}></img>
                                </div>
                            </NavLink>
           
                            <div className='listProData'>
                                <h3 className='textMar textUpper'>{ele.name}</h3>
                               
                                <h3 className='textMar'>Rs: {ele.price}/-</h3>
                                <p className='textMar textJust'> {ele.description.slice(0,90)}...</p>

                        <NavLink to={`/SingleProduct/${ele.id}`}>
                           <button className='btnshow'>Read More</button>
                           </NavLink>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default ListView
