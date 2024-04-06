"use client";
import "./register.css";
import React, { useState } from "react";
import Link from "next/link";

import { useForm, SubmitHandler } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import axios from "axios";

type users = {
  Fname: string;
  Lname: string;
  Uname: string;
  email: string;
  Lemail: string;
  title: '1' | '2' | '3' | '4' | '5';

};
export default function Register() {
  const { user } = useKindeBrowserClient();
  const currentUser = user;
  const form = useForm<users>();
  const {register:userregister, handleSubmit, formState, control } = form;
 
  
    
  const onSubmit: SubmitHandler<users> = async (
      newuser: users
    ) => {
      const UserPost = {

        Fname: newuser.Fname,
        Lname: newuser.Lname,
        Uname: newuser.Uname,
        email: newuser.email,
        Lemail: newuser.Lemail,
        title: newuser.title,
        
      };
  
      try {
        const response = await axios.post("api/register", UserPost, {
          headers: { "Content-Type": "multipart/form-data" },
        });
  
        form.reset();
      } catch (error) {
        console.log(error);
      }
    };
  

  return (
    <>
  
      <div id="contentbox">
        <h1>Register</h1>
        <div className="register-box">
          <form id="form" name="register-form" method="post" action="">
            <fieldset>
              <legend>Register a new staff</legend>
              <br></br>

              <section>
                <>
                <label htmlFor="Fname">First Name:</label>
                <input 
                  type="text" 
                  id="Fname" 
                  name="Fname" 
                  required
                  {...userregister("Fname")}
                />

                <label htmlFor="Lname">Last Name:</label>
                <input 
                  type="text" 
                  id="Lname" 
                  name="Lname" 
                  required
                  {...userregister("Lname")}
                />

                <label htmlFor="username">Username:</label>
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  required
                  {...userregister("Uname")}
                />
                  
                <label htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  {...userregister("email")}
                />

                <label htmlFor="Lemail">Line Manager Email:</label>
                <input 
                  type="email" 
                  id="Lemail" 
                  name="Lemail" 
                  required
                  {...userregister("Lemail")}
                />

                  
                  <label htmlFor="title">Title:</label>
                  
                  <select {...userregister("title", { required: true })}>
                  <option value="">Select a Title</option>
                  <option value="1">Administrator</option>
                  <option value="2">IT Support Staff</option>
                  <option value="3">Line Managers</option>
                  <option value="4">Finance Team</option>
                  <option value="5">Employee</option>
                </select>

                </>
              </section>
              

              <div className="form-actions">
                <button type="submit">Confirm</button>

                <button type="reset">Clear</button>

                <button type="submit">Back</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
  

  }

// OLD VERSION BELOW 

//   "use client";
// import "./register.css";
// import React, { useState } from "react";
// import Link from "next/link";

// export default function Register() {
//   return (
//     <>
//     {/*
//       <div id="sidebar">
//         <a href="mainpage" className="sidebar_item">
//           Dashboard
//         </a>
//         <a href="view" className="sidebar_item">
//           View Claims
//         </a>
//         <a href="submit" className="sidebar_item">
//           Submit a Claim
//         </a>
//         <a href="report" className="sidebar_item">
//           Report an Issue
//         </a>
//         <a href="register" className="sidebar_item">
//           Register an Account
//         </a>
//         <a href="review" className="sidebar_item">
//           Review a Claim
//         </a>
//         <a href="profile" className="sidebar_item">
//           Profile
//         </a>
//       </div>
//   */}
//       <div id="contentbox">
//         <h1>Register</h1>
//         <div className="register-box">
//           <form id="form" name="register-form" method="post" action="">
//             <fieldset>
//               <legend>Register a new staff</legend>
//               <br></br>

//               <section>
//                 <>
//                   <label htmlFor="name">Full Name:</label>
//                   <input type="text" id="name" name="name" />
//                   <label htmlFor="username">Username:</label>
//                   <input type="text" id="username" name="username" />
//                   <label htmlFor="password">Password:</label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     minLength={8}
//                   />
//                   <label htmlFor="email">Email:</label>
//                   <input type="email" id="email" name="email" />
//                   <label htmlFor="bio">Contact Number:</label>
//                   <input
//                     type="number"
//                     id="contact"
//                     name="contact"
//                     minLength={12}
//                   />
//                   <label htmlFor="title">Title:</label>
//                   <select id="title" name="title">
//                     <option value="1">Administrator</option>
//                     <option value="1">IT Support Staff</option>
//                     <option value="2">Line Managers</option>
//                     <option value="1">Finance Team</option>
//                     <option value="1">Employee</option>
//                   </select>
//                 </>
//               </section>

//               <div className="form-actions">
//                 <button type="submit">Confirm</button>

//                 <button type="reset">Clear</button>

//                 <button type="submit">Back</button>
//               </div>
//             </fieldset>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }