"use client";
import React, { useState } from 'react';
import '../style/NavBar.css'; // Import the external CSS file
import { SideBar } from './Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/provider/redux/store";
import Logo from "../../assets/image-removebg-preview.png"
import Link from 'next/link';
import { Button, Image } from 'antd';

export default function Nav() {
  
  const [showMenu, setShowMenu] = useState(false);
  const accountName = useSelector((state: RootState) => state.SetAccount.name);
  const anonStatus = useSelector((state: RootState) => state.SetStatus.name);
  const anonAge = useSelector((state: RootState) => state.SetAge.name);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isVerified = anonStatus === "logged-in" && anonAge != 0;
  console.log("the verification message:", isVerified);

  return (
    <>
      {isVerified ? (
        // Verified users
        <>
          <div className="atmax">
            <div className="nav-ini">
              <div className="left-nav">
              <Image preview={false} src={Logo.src} width={100} ></Image>
                <Button className="header-nav"><Link href="/">
                  Home
                </Link></Button>Button
                <Button className="header-nav"><Link href="/transfer">
                  Transfer
                </Link></Button>
                <Button className="header-nav"> <Link href="/Verifying">
                  SoundBox
                </Link></Button>
                <Button className="header-nav"> <Link href="/anon-verify">
                  AnonVerify
                </Link></Button>
              </div>
              <div style={{display:"flex" ,justifyContent:"center" , alignContent:"center" , alignItems:"center" , marginRight:"3%"}}>
                <Link href="/transfer">
                  Verified
                </Link>
              </div>
            </div>
          </div>

          <div className="atmin">
            <div className="nav-ini">
              <div>PayOn</div>
              <SideBar />
            </div>
          </div>
        </>
      ) : accountName ? (
        // Users with account name but not verified
        <>
          <div className="atmax">
            <div className="nav-ini">
              <div className="left-nav">
              <Image preview={false} src={Logo.src} width={100} ></Image>
                <Button className="header-nav"><Link href="/">
                  Home
                </Link></Button>
                <Button className="header-nav">How to use</Button>
              </div>
              <div style={{display:"flex" ,justifyContent:"center" , alignContent:"center" , alignItems:"center" , marginRight:"3%"}}>
                <Link href="/anon-verify">
                  <Button style={{ backgroundColor : "white" , border : "1px solid white" , width : "150px" , borderRadius : "20px" , height : "35px" , fontSize : "20px" , color : "black" , fontWeight : "600"}}>
                    <div style={{ borderRadius : "50%" , border : "15px solid #4BFCE6" }}></div>Verify
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="atmin">
            <div className="nav-ini">
            <Image preview={false} src={Logo.src} width={100} ></Image>
              <SideBar />
            </div>
          </div>
        </>
      ) : (
        // Default view
        <>
          <div className="atmax">
            <div className="nav-ini">
              <nav className="left-nav">
              <Image preview={false} src={Logo.src} width={100} ></Image>
                <Button className="header-nav"> <Link href="/">
                  Home
                </Link></Button>
                <Button className="header-nav">How to use</Button>
              </nav>
            </div>
          </div>

          <div className="atmin">
            <div className="nav-ini">
            <Image preview={false} src={Logo.src} width={100} ></Image>
              <SideBar />
            </div>
          </div>
        </>
      )}
    </>
  );
}
