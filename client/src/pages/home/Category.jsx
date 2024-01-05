import React from 'react'
import Subscribe from './Subscribe'
import CategoryList from './CategoryList'

const Category = () => {
  return (
    <div className="w-full lg:w-1/3 px-3">
    {/* category list */}
    <CategoryList/>
  

    {/* divider */}
    <div className="border border-dotted"></div>

    {/* subscribe */}
    <Subscribe/>

    {/* divider */}
    <div className="border border-dotted"></div>

  </div>
  )
}

export default Category