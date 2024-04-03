import React from 'react';
import './mainlayout.css'

export default function mainlayout() {
  return (
    <>
      <header> <p class="header_item">FDM Expenses App</p>   <p class="header_item"><a href="#home">Sign out</a></p> </header>
      <div id="sidebar">
      <ul>
          <li>temp1</li>
          <li>temp2</li>
          <li>temp3</li>
          <li>temp4</li>
          <li>temp5</li>
        </ul>
      </div>
      <div id="contentbox">
            mainarea
      </div>
    </>
  )
}