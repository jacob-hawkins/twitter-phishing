import "./page1.css"
import Login1 from "../../components/login1/Login1";
import { Close, Twitter } from '@mui/icons-material';

import React from 'react'

export default function Page1() {
  return (
    <div className="page">
      <div className="mainbox">
        <div className="topbar">
          <a href="" className="closebutton">
            <Close id="close" />
          </a>
          <Twitter id="twitterIcon" />
        </div>
        <div className="content">
          <Login1 />
        </div>
      </div>
    </div>
  )
}

