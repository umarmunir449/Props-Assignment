//import { getImageUrl } from './utils.js';
import './App.css';
import React from 'react'
   
 function App({name,size,Profession,Qualification,Goal,person}) {
  return (
    <div>
    
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src='https://lh3.googleusercontent.com/a/AEdFTp7TujjgaJKoUCUWFb3Ge-p6rbAkNA5ZIp8m7NGtXw=s288-p-rw-no'
          alt={name}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {Profession}
          </li>
          <li>
            <b>Qulification </b> 
            {Qualification}
          </li>
          <li>
            <b>Goal: </b>
            {Goal}
          </li>
        </ul>
      </section>
      
    </div>
  )
}
function App2({name,size,Profession,services,Goal,From,uni,about,children}) {
  return (
    <div>
      
    
      <section className="profil">
        <h2>{name}</h2>
        
        <img
          className="avatar"
          src='https://pbs.twimg.com/profile_images/1518793535591522304/8MOreqvV_400x400.jpg'
          alt={name}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {Profession}
          </li>
          <li>
            <b>services:</b> 
            {services}
          </li>
          <li>
            <b>From: </b>
            {From}
          </li>
          <li>
            <b>University: </b>
            {uni}
          </li>
          <li>
            <b>About: </b>
            {about}
           
          </li>
        </ul>
      </section>
      
    </div>
  )
}




export default function Gallery() {
  return (
    <div>
     <h1> <label htmlFor='labl'>Pasing Data by using props to a Copmonent</label></h1>
   <App2  
   name='Mian Ahmad Basit'
   size={100}
   Profession="Anchor 
   |Full stack Web Mobile App Developer 
   | Digital Marketer |Blockchain Devolper 
   | Mern stack Jam stack 
   | Entrepreneur
   | Educationist
   |Metaverse Devolper
   |Flutter Trainer"
   From="Lahore District, Punjab, Pakistan"
   Goal =" To Become a "
   services="Training, Digital Marketing, Leadership Development, and Web Development"
   uni="Bahauddin Zakariya University"
   about="Mian Ahmad Basit Work as a cloud Native web & Mobile App Developer in many industries. 
   Mian Ahmad also working As a Digital Marketer with Many Industries & Software Houses.
    Now Mian Ahmad Basit is certified by Google Amazone & IBM & Different online platforms like EDX,
     Alison, Udemy, Coursera, etc in Different Field of Information Technology & Computer science
      Blockchain Mernstack jam stack Digital Marketing and cybersecurity. Now I'm a researcher of
       cyber security.
   Mian Ahmad Basit CEO of TEPS Marketing & Software Solutions Pakistan.TEPS Schools Academy &
    Computer College also offer much onsite & Online Training. Mian Ahmad Basit also works with
     Turtiledig Marketing Agency."
   /> 
    
     <App name='Umar Munir'
      size={150}
     
      Profession="Web Developer"
      Qualification="MS in Computer Science"
      Goal ="Become a Good Web-Developer"
      
      />
   
  
    </div>
  );
}
