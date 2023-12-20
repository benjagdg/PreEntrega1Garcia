import React from 'react'
import { Link } from 'react-router-dom';

const NavBarCategories = ({categoriesData}) => {
  return (
    categoriesData.map((category) => {
      return (
        <Link to={"/category/"+category.id} key={category.id} className="nav-link"> {category.name}</Link>
      );
    })
  )
}

export default NavBarCategories