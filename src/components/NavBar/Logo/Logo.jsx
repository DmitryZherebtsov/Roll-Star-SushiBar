import React from 'react'
import style from './Logo.module.css'
import { nav_assets } from '../../../assets/assets'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>

      <Link to='/'>
        <img className={style.logo} src={nav_assets.logo} alt="" />
      </Link>

    </div>
  )
}

export default Logo