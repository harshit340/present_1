"use client";
import React, { useState } from 'react';
import '../style/NavBar.css'; // Import the external CSS file
import { SideBar } from './Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/provider/redux/store";
import Logo from "../../assets/image-removebg-preview.png"
import Link from 'next/link';
import { Image } from 'antd';

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
                <div><Image preview={false} src={Logo.src} ></Image></div>
                <span className="header-nav"><Link href="/">
                  Home
                </Link></span>
                <span className="header-nav"><Link href="/transfer">
                  Transfer
                </Link></span>
                <span className="header-nav"> <Link href="/Verifying">
                  SoundBox
                </Link></span>
                <span className="header-nav"> <Link href="/anon-verify">
                  AnonVerify
                </Link></span>
              </div>
              <div>
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
                <div><Image preview={false} src={Logo.src}></Image></div>
                <span className="header-nav"><Link href="/">
                  Home
                </Link></span>
                <span className="header-nav">How to use</span>
              </div>
              <div>
                <Link href="/anon-verify">
                  🔒 Verify
                </Link>
              </div>
            </div>
          </div>

          <div className="atmin">
            <div className="nav-ini">
              <div><Image preview={false} src={Logo.src}></Image></div>
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
                <span className="header-nav"> <Link href="/">
                  Home
                </Link></span>
                <span className="header-nav">How to use</span>
              </nav>
            </div>
          </div>

          <div className="atmin">
            <div className="nav-ini">
              <div><Image preview={false} src={Logo.src}></Image></div>
              <SideBar />
            </div>
          </div>
        </>
      )}
    </>
  );
}
