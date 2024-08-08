import React from 'react'
import '../style/Card.css'
import Checker from "../../assets/icons8-datasets-64.png"
import identity from "../../assets/icons8-checked-identification-documents-64.png"
import eighteen from "../../assets/icons8-18-100.png"
import { Image } from 'antd'

import AnonLogin from './AnonLogin'
export default function Card() {
    return (
        <div style={{display:"flex" , justifyContent:"center" , marginTop:"6%"}} className='Anon-card-align'>
            <div className="card">
               <div style={{display:"flex" , justifyContent:"center", marginTop:"4%" , fontSize:"46px"}}>
                Verify Anon-Aadhar
               </div>
               <div style={{margin:"2% 6% 0 6%", textAlign:"center", fontSize:"18px"}}>
               Payu is a decentralized platform that simplifies Ethereum transfers across multiple EVM-based blockchains and various currencies. It features a secure and anonymous Aadhaar-based KYC process for easy onboarding. With Payu's Soundbox, users receive real-time audio notifications for their transactions and can customize alerts based on their selected blockchains. This ensures seamless, secure, and informed financial management.

               </div>
               <div style={{display:"flex" , justifyContent:"center" , marginTop:"6%"}}>
                <AnonLogin />
               </div>

               <div className='cards-layout' style={{marginBottom:"8%"}}>
           <div className='cards-child'>
                <div
                        className="h-[22em] w-[20em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#5a58d76c] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]"
                    >
                        <div>
                            <div style={{display:"flex" , justifyContent:"center"}}>
                            <Image preview={false} src={Checker.src} width={85} height={90} ></Image>
                            </div>
                            
                            
                            <p className="text-[0.85em]" style={{marginTop:"15%",fontSize:"16px"}}>
                            Extract data and signature from the Aadhaar QR code. Verify the RSA signature using the UIDAI public key. Hash the signed data using SHA-256.


                            </p>
                        </div>

                        
                    </div>
                </div>
                <div className='cards-child'>
                <div
                        className="h-[22em] w-[20em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#5a58d76c] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]"
                    >
                        <div>
                            <div style={{display:"flex" , justifyContent:"center"}}>
                            <Image preview={false} src={identity.src} width={85} height={90} ></Image>
                            </div>
                            
                            <p className="text-[0.85em]" style={{marginTop:"15%",fontSize:"16px"}}>
                            Verify the RSA signature on the hashed data. Extract identity fields and compute nullifiers. Convert timestamp to UNIX UTC. Optionally sign the signal hash.


                            </p>
                        </div>

                        
                    </div>
                </div>
                <div className='cards-child'>
                <div
                        className="h-[22em] w-[20em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#5a58d76c] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]"
                    >
                        <div>
                            <div style={{display:"flex" , justifyContent:"center"}}>
                            <Image  preview={false} src={eighteen.src} width={85} height={90} ></Image>
                            </div>
                            
                            <p className="text-[0.85em]" style={{marginTop:"15%",fontSize:"16px"}}>
                            Check if the user is 18+ based on the extracted data. Allow access if eligible, otherwise deny. Complete onboarding and store the zk-SNARK proof.

                            </p>
                        </div>

                        
                    </div>
                </div>
           </div>
            </div>
        </div>
        
    )
}

{/* <AnonLogin /> */}

/* 
<div className="header">
<span className="title">Verify</span>
<span className="price">Aadhar</span>
</div>
<p className="desc"></p>
<ul className="lists">
<li className="list">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
    <span>Secure</span>
</li>
<li className="list">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
    <span>Private</span>
</li>
<li className="list">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
    <span>Reliable</span>
</li>
</ul>
<div style={{display:"flex" , justifyContent:"center"}}>
<AnonLogin />   
</div> */
