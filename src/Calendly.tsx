import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InlineWidget } from "react-calendly";


function Calendly() {
    return (
        <div className="calendly">
          <InlineWidget url="https://calendly.com/stutoring?hide_gdpr_banner=1" />
        </div>
    );
  }
  
  export default Calendly;