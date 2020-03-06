import React from 'react';
import nav from './nav.png';
import navhead from './navhead.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="heading">
        <h1>.</h1>
      </div>
        <div class="NavbarHeader">
          <img src={navhead} class="img2"/>
             Create Influencer
            <button class="NavbarButton1">Delete</button>
            <button class="NavbarButton2">Save</button>
        </div>
        <div class="Navbar">
          <img src={nav} class="img1"/>
             <p>.</p><br/>
             <p>.<br/></p><br/>
             <p>.</p>
        </div>
        <div class="main">
             <h1 class="heading1">Basic Details</h1>
             <div class="InfluencerName">
         <input type="text" class="b1"/>
         <label id="l1" class="l1">Influencer Name</label>
         <input type="selection" class="b2"/>
         <label id="l1" class="l2">Gender</label>
         <input type="email" class="b3"/>
         <label id="l1" class="l3">Email</label>
         <input type="text" class="b4"/>
         <label id="l1" class="l4">Influencer type</label>
         <input type="text" class="b5"/>
         <label id="l1" class="l5">Contact Details</label>
         <input type="text" class="b6"/>
         <label id="l1" class="l6">Country</label>
         <p class="piclabel">Influencer Photo</p>
         <div class="photoholder">Place Image Here</div>
         <div>
           <h2>Gender</h2>
         <input type="radio" name="radio" class="r1"/>
         <label class="g1">Male</label>
         <input type="radio" name="radio" class="r2"/>
         <label class="g2">Female</label>
         <input type="radio" name="radio" class="r3"/>
         <label class="g3">Couple</label>
         </div>
         <div class="IT">
           <h2>Influencer Type</h2>
         <input type="radio" name="radio1" class="r1"/>
         <label class="g1">CAT A</label>
         <input type="radio" name="radio1" class="r2"/>
         <label class="g2">CAT B</label>
         <input type="radio" name="radio1" class="r3"/>
         <label class="g3">CAT C</label>
         <input type="radio" name="radio1" class="r4"/>
         <label class="g3">Celebrity</label>
         </div><br/><br/><br/>
         <input type="text" class="s1"/><label id="l1" class="sl1">select languauges..</label><br/><br/><br/><br/>
         <input type="text" class="s2"/><label id="l1" class="sl2">select location..</label><br/><br/><br/><br/>
         <input type="text" class="s3"/><label id="l1" class="sl3">select category..</label><br/><br/><br/><br/>
         <input type="text" class="s4"/><label id="l1" class="sl4">select vendor..</label><br/><br/><br/><br/>
         <input type="textbox" class="s5"/>
         <label id="l1" class="sl5">Remarks</label>
        </div>
        <div class="social1">
          <h4 class="linkedin">LinkedIn Details</h4>
          <label class="container ct1">Verified
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container ct2">Active
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label><br/>
          <input type="text" class="b1 linkb1"/>
         <label id="l1" class="l1 linkl1">Link</label>
         <input type="text" class="b2"/>
         <label id="l1" class="l2 linkl2">Connections</label>
         <input type="text" class="b3"/>
         <label id="l1" class="l3 linkl3">Post Cost(in Rs.)</label>
        </div>
        <div class="social1">
          <h4 class="linkedin">Instagram Details</h4>
          <label class="container ct1">Verified
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container ct2">Active
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label><br/>
          <input type="text" class="b1 linkb1"/>
         <label id="l1" class="linkl1 inst1">Link</label>
         <input type="text" class="b2"/>
         <label id="l1" class="l2 linkl2 inst2">Followers</label>
         <input type="text" class="b3"/>
         <label id="l1" class="l3 linkl3 inst3">Video Cost(in Rs.)</label>
         <input type="text" class="b4 instb4"/>
         <label id="l1" class="l4  inst4">Story Cost(in Rs.)</label>
         <input type="text" class="b5 instb5"/>
         <label id="l1" class="l5  inst5">Post Cost(in Rs.)</label>
        </div><br/><br/>
        <div class="social1">
          <h4 class="linkedin">Blog Details</h4>
          <label class="container ct2">Active
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label><br/>
          <input type="text" class="b1 linkb1"/>
         <label id="l1" class="linkl1 blog1">Link</label>
         <input type="text" class="b2"/>
         <label id="l1" class="l2 linkl2 blog2">Monthly Page Views(mpv)</label>
         <input type="text" class="b3"/>
         <label id="l1" class="l3 linkl3 blog3">Article cost(in Rs.)</label>
        </div>
        <div class="social1">
          <h4 class="linkedin">Twitter Details</h4>
          <label class="container ct1">Verified
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container ct2">Active
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label><br/>
          <input type="text" class="b1 linkb1"/>
         <label id="l1" class="linkl1 twit1">Link</label>
         <input type="text" class="b2"/>
         <label id="l1" class="l2 linkl2 twit2">Connections</label>
         <input type="text" class="b3"/>
         <label id="l1" class="l3 linkl3 twit3">Post Cost(in Rs.)</label>
        </div>
        <div class="social1">
          <h4 class="linkedin">Facebook Details</h4>
          <label class="container ct1">Verified
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container ct2">Active
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label><br/>
          <input type="text" class="b1 linkb1"/>
         <label id="l1" class="linkl1 face1">Link</label>
         <input type="text" class="b2"/>
         <label id="l1" class="l2 linkl2 face2">Connections</label>
         <input type="text" class="b3"/>
         <label id="l1" class="l3 linkl3 face3">Post Cost(in Rs.)</label>
         <input type="text" class="b4 faceb4"/>
         <label id="l1" class="l4  face4">Story Cost(in Rs.)</label>
         <input type="text" class="b5 faceb5"/>
         <label id="l1" class="l5  face5">Post Cost(in Rs.)</label>
        </div>
        <div class="social1 social6">
          <h4 class="linkedin">Tiktok Details</h4>
          <label class="container ct1">Verified
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container ct2">Active
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label><br/>
          <input type="text" class="b1 linkb1"/>
         <label id="l1" class="linkl1 tktk1">Link</label>
         <input type="text" class="b2"/>
         <label id="l1" class="l2 tktk2">Connections</label>
         <input type="text" class="b3"/>
         <label id="l1" class="l3 tktk3">Post Cost(in Rs.)</label>
         <input type="text" class="b4 tktkb4"/>
         <label id="l1" class="l4  tktk4">Story Cost(in Rs.)</label>
        </div>
    </div>
    </div>
  );
}

export default App;
