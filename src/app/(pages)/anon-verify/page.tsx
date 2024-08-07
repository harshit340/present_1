/* eslint-disable jsx-a11y/alt-text */
"use client"
import React from 'react'
import Nav from '@/app/Components/Nav'
import Card from '@/app/Components/Card'
import '../../style/AnonNeeds.css'
import ModalReadme from '@/app/Components/ModalReadme'
import verify from "../../../assets/icons8-blockchain-49.png"
import connnecton from "../../assets/icons8-blockchain-60.png"
import phone from "../../assets/icons8-speaker-96.png"
import { Image } from 'antd'

export default function page() {
   
  return (
    <div>
      <Nav/>
      <div className='main-align'>
         <Card/>
         <div>
          <div>
          <div style={{marginBottom:"8%"}}>
                <div style={{display:"flex" , justifyContent:"center" , fontSize:"60px" , marginTop:"7%"}}>
                    How Does It Exactly Works  
                </div>
                <div style={{display:"flex" ,flexDirection:"column",alignItems:"center",  justifyContent:"center",textAlign:"center",margin:"2% 8% 2% 8%" , fontSize:"20px"}}>
                    <p>Payu is an advanced decentralized platform that streamlines Ethereum transfers across multiple EVM-based blockchains and various currencies. It incorporates a secure and anonymous Aadhaar-based KYC process, allowing users to onboard quickly and safely while maintaining their privacy. With Payu, transferring digital assets between different blockchain networks becomes effortless and secure.</p>
                    <br></br>
                    <p>One of Payu's key features is its Soundbox, which provides users with real-time audio notifications for their transactions. This ensures that users are always informed about their financial activities, offering immediate updates and enhancing user experience. Additionally, Payu allows users to customize their alerts based on the blockchains they are most interested in, providing tailored and relevant notifications.
                    </p><br></br>
                    <p>By offering seamless multi-chain Ethereum transfers, secure KYC, and customizable real-time transaction alerts, Payu delivers a comprehensive and user-friendly solution for managing digital assets. This ensures users can enjoy a seamless, secure, and informed financial management experience, making Payu an essential tool for cryptocurrency users.</p>



            </div>
            </div>
           

           </div>
           
         </div>
       
         
      </div>
     
    </div>
  )
}


