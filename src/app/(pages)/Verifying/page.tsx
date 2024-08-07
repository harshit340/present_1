/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Nav from '@/app/Components/Nav'
import { Card } from 'antd'
import React from 'react'
import "../../style/Sound2.css"
import Loader from '@/app/Components/Loader'

export default function page() {
  const [type, setType] = React.useState<string>("ETH");
  return (
    <div>
      <Nav/>
       <div style={{display:"flex" , justifyContent:"center" , marginTop:"2%"}}>
        <Card className='leftyCard'>
          <div style={{color:"white" , textAlign:"center" , fontSize:"30px" ,marginTop:"8%"}}>Choose BlockChain</div>
          <div style={{display:"flex" , justifyContent:"center" , marginTop:"5%"}} >
          <select onChange={(e) => setType(e.target.value)} value={type} style={{backgroundColor:"rgba(34, 34, 84, 0.32)" , border:"2px solid white" , width:"70%", height:"40px", color:"white", borderRadius:"2rem" }}>
            <option value="ETH" style={{color:"black"}}>Ethereum</option>
            <option value="BSC" style={{color:"black"}}>Binance Smart Chain</option>
            <option value="PLG" style={{color:"black"}}>Polygon</option>
          </select>
          
          
        </div>
        <div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center", margin:"10%"}}><Loader/></div>
        <div style={{textAlign:"center" , color:"white"}}>
         -------------- Waiting for transactions --------------
        </div>
        </Card>
      {/*   <Card style={{width:"900px" , height:"90vh"}} className='rightyCard'></Card> */}
       </div>
    </div>
  )
}
