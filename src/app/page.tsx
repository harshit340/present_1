'use client'

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "@/provider/redux/store";
import { ChangeAccount } from "@/provider/redux/SetAccount";
import {  useAnonAadhaar } from '@anon-aadhaar/react';
import Nav from './Components/Nav';
import About from './Components/About';
import meta from "../assets/MetaMask_Fox.svg-removebg-preview.png"
import { Image } from 'antd';
  

export default function Home() {
    const username = useSelector((state: RootState) => state.SetUsername.name);
    const accountName = useSelector((state: RootState) => state.SetAccount.name);
    const dispatch = useDispatch();

    const [anonAadhaar] = useAnonAadhaar();

    const connectMetaMask = async () => {
        console.log(accountName)
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                dispatch(ChangeAccount(accounts[0]));
            } catch (error) {
                const errorMessage = (error as any).code === 4001
                    ? "MetaMask connection request was rejected by the user."
                    : "An error occurred while connecting to MetaMask. Please try again.";
                alert(errorMessage);
                console.error(error);
            }
        } else {
            alert("MetaMask extension not detected!");
        }
    };

    

    


    return (
        <div >
            <Nav />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "10%" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ fontSize: "65px", fontWeight: 400, color:"#D3D3D3" }}>Multi-Chain Ethereum Transfers</div>
                    <div style={{ fontSize: "65px", fontWeight: 400 , marginTop:"-3%", color:"#D3D3D3"}}> with Anon Aadhaar KYC</div>
                    <div style={{ fontSize: "20px", color: "#FFFFF0" ,marginTop:"5%" }}>Seamless Ethereum transfers across multiple blockchains with anonymous Aadhaar-based KYC</div></div>
                <div style={{ marginTop: "5%" }}>
                
                    {accountName?
                    <>
                    <button className="Documents-btn" onClick={connectMetaMask}>
  <span className="folderContainer">
  <Image preview={false} src={meta.src}></Image>
  </span>
  <p className="text" >Connected</p>
</button>
                    </>:
                    <> <button className="Documents-btn" onClick={connectMetaMask}>
                    <span className="folderContainer">
                     <Image preview={false} src={meta.src}></Image>
                    </span>
                    <p className="text">Connect</p>
                  </button></>}
                   
                </div>
            </div>
            
            
            <div>
                <div style={{display:"flex" , justifyContent:"center" , fontSize:"60px" , marginTop:"20%"}}>
                     How it works Step - by - Step Guide
                </div>
                <div style={{display:"flex" , justifyContent:"center" ,color:"gainsboro"}}>
                Payu: Effortless multi-chain Ethereum transfers with secure KYC and real-time alerts
                </div>
                <div>

                </div>
            </div>
            
            <div style={{marginTop:"4%" , marginBottom:"6%" }}>
                 <About/>
            </div>
           

        </div>
    );
}

