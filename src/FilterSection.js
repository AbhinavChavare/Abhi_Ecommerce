import React from 'react'
import { useFilterContext } from './Component/context/FilterContext'
import "./FilterSection.css"
import { TiTick } from "react-icons/ti";

const FilterSection = () => {

  const { filters: { text, color, category,maxprice,minprice,price }, updateFilterValue, all_products,clearFilter } = useFilterContext()


  const getUniqueData = (data, property) => {
    let newval = data.map((curEle) => {
      return curEle[property]
    })
    if (property == "colors") {

      // return newval=["All", ...new Set([].concat(...newval))]
      return newval = ["All", ...new Set(newval.flat())]
    }
    else {
      return newval = ["All", ...new Set(newval)]

    }
  }
  const categoryonlyData = getUniqueData(all_products, "category")
  const companyonlyData = getUniqueData(all_products, "company")

  const ColoronlyData = getUniqueData(all_products, "colors")

  // console.log(companyonlyData)   

  return (

    //Search
    <div className={`flex-column-center filcol`}  >
      <form onSubmit={(e) => { e.preventDefault() }}>
        {/* <input type={text }
      name="text"
       value={text} style={{color:"black"}}
       placeholder="Search"
       onChange={(event)=>updateFilterValue(event)}></input> */}
        <input type="text" name="text" value={text} placeholder='Search' onChange={(event) => updateFilterValue(event)}></input>
      </form>


      {/* Category  */}

      <p><strong>Category</strong></p>
      <div >
        {
          categoryonlyData.map((ele, index) => {
            return <button type="button" name="category" className={`colbtnAll ${category == ele ? "compcol" : null}`} key={index} value={ele} onClick={(event) => updateFilterValue(event)}>{ele}</button>
          })

        }
      </div>
      {/* Company */}
      <div>
        <p><strong>Company</strong></p>
      </div>
      <form action='#'>
        <select name="company" onClick={(event) => updateFilterValue(event)}  >
          {companyonlyData.map((elem, index) => {
            return (<option name="company" key={index}
              value={elem}>{elem} </option>)

          })}
        </select>
      </form>

      {/* Color */}
      <div>
        <p><strong>Colors</strong></p>
        <div className='coldflex'>
          {/* <button  className="ColbtnSize colbtnAll">All</button> */}
          {
            ColoronlyData.map((curEle) => {
              if (curEle == "All") {
                return <button name="color" value={curEle} className="ColbtnSize colbtnAll" onClick={(event) => updateFilterValue(event)}>All</button>
              }
              return <button name="color" value={curEle} className="ColbtnSize" style={{ backgroundColor: `${curEle}` }} onClick={(event) => updateFilterValue(event)}>
                {color == curEle ? <TiTick className='ticksize' /> : null}
              </button>
            })

          }
        </div>
        <p><strong>Price</strong></p>
        <div><strong> Rs {price} /-</strong></div>
        <input className='filrangecol' type="range" name="price" onChange={(event) => updateFilterValue(event)}
         min={minprice} max={maxprice} value={price} step="15"/>
     </div>
     <div>
      <button className='btnshow' onClick={()=>{clearFilter()}}>
        Clear Filters
      </button>
     </div>






    </div>
  )
}

export default FilterSection
