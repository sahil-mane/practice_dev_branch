import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {

  const sideBarData = [
    {label:"Layout 1",link:"/"},
    {label:"Layout 2",link:"/"},
    {label:"Layout 3",link:"/"},
  ]

  const navigate = useNavigate();
    const goHome = () => {
        navigate("/")
    }

  return (
    <div style={{border:"1px solid red",height:"100%"}}>
        <h1 style={{height:"8%"}} onClick={()=>goHome()}>LOGO</h1>
        <div style={{border:"1px solid blue",display:"flex",flexDirection:"column",gap:"5px"}}>
          {sideBarData.map((side)=>{
            return(
              <p style={{cursor:"pointer"}} onClick={()=>navigate(side.link)}>{side.label}</p>
            )
          })}
        </div>
    </div>
  )
}

export default SideBar