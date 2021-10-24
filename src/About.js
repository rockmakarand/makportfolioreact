import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from './images/waving hand.jfif'
import img2 from './images/apollo.png'
import img3 from './images/firebase.png'
import img4 from './images/gcloud.png'
import img5 from './images/graphql.png'
import img6 from './images/html5.png'
import img7 from './images/mongo.svg'
import img8 from './images/nodejs.png'
import img9 from './images/react.png'
import img10 from './images/redux.png'
import img11 from './images/smileyy.jpg'
import img12 from './images/youtube.png'
import img13 from './images/instaa.png'
import img14 from './images/git.png'
import img15 from './images/link.png'
import img16 from './images/css3.svg'

const About = () => {
    return (
        <div>
            <br/>
            <br/>
            <div class="vit" style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
            
            <div class="nit" style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
               <a href="https://instagram.com/rockrockymakarand___?utm_medium=copy_link"> <img src={img13} style={{height:50}}></img></a>
               </div>
               <div class="nit" style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
               <a href="https://rockmakarand/github.io"> <img src={img14} style={{height:50}}></img></a>
               </div>
               <div class="nit" style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
               <a href="social-linkedin-circle-512.webp"> <img src={img15}style={{height:50}}></img></a>

                </div>
                </div>

            <br/>
            <br/>
            <div class="oir" >
                <h2 style={{marginLeft:10}}>Hi <img src={img1} style={{height:60}}></img> I am Makarand.
                </h2>
                <br/>
                <h1 style={{marginLeft:10}}>I am a NOOB, who may be Happy one Day!.</h1>
                <br/>
                <h2 style={{marginLeft:10}}>I completed my schooling in Chennai's one of the famous school-S.B.O.A School and Junior College and right now pursuing my BTech at National
    Institute of Technology, Tiruchirapalli. I love to play with Data Structures and Algorithms.
</h2>
<br/>
<br/>

    <button style={{marginLeft:10}}  ><a href="https://github.com/rockmakarand" style={{textDecoration:'none'}}><p style={{color:'blue',textDecoration:'none',fontSize:25}}><b>See My Projects</b></p></a></button>
    <br/>
<br/>
    <h2 style={{textAlign:'center'}}>Skills I <b>Wish</b> to have..</h2>
    <br/>
<br/>

    <div class="nit" style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
        <img src={img2}class="ttt"  ></img>
        <img src={img3} class="ttt" ></img>
       
    </div>
    <br/>
    <br/>
    <div class="nit" style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
        <img src={img5} class="ttt" ></img>
        <img src={img6} class="ttt" ></img>
       
    </div>
    <br/>
    <br/>
   
  
    <div class="nit" style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
        <img src={img9} class="ttt" style={{marginLeft:30}}  ></img>
        <img src={img8}class="ttt" ></img>
        
    </div>
    <br/>
    <br/>
    <div class="nit" style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
        <img src={img10} class="ttt"  ></img>
        <img src={img7}class="ttt" ></img>
        
    </div>
    <br/>
    <br/>
    <div class="nit" style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
        <img src={img4} class="ttt"  ></img>
        <img src={img16}class="ttt" ></img>
        
    </div>
    <br/>
    <br/>
    <h2 style={{marginLeft:10}}>
        I also Have two <b>YouTube Channels</b> Links of which are Below (Do <b>Subscribe</b> to it <img src={img11} style={{height:60}}></img>)
    </h2>
    <br/>
    <br/>
    <h3 style={{marginLeft:10}}>First one is related to <b>JEE Preparation Apps</b></h3>
   
   <a href="https://www.youtube.com/channel/UCBjnrmPZQkGJkr5Fy1u2eZg"> <img src={img12} style={{height:160}}></img></a>
   <br/>
    <h3 style={{marginLeft:10}}>Second one is related to <b>Gaming</b></h3>
   
   <a href="https://www.youtube.com/channel/UCa5KA8bNbtZWDWlQrKK1a6A"> <img src={img12} style={{height:160}}></img></a>
   <br/>
    <br/>
    <br/>
    
   <h2 style={{marginLeft:10}}>Here is the Link to my <b>First React Website</b></h2>
   <br/>
   
   <button style={{marginLeft:10}}  ><a href="https://github.com/rockmakarand/reactjeenittweb" style={{textDecoration:'none'}}><p style={{color:'blue',textDecoration:'none',fontSize:25}}><b>React Webpage</b></p></a></button>
    <br/>





    
   
    <br/>
    <br/>
 
            </div>
            
        </div>
    )
}

export default About
