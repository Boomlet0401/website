import React from 'react';
import heading from '../assets/images/menu_logo.svg';
import overview from '../assets/icons/overview.svg';
import campaign from '../assets/icons/campaign.svg';
import influencer from '../assets/icons/influencer.svg';
import arrow from '../assets/icons/back-arrow.svg';
import search from '../assets/icons/search.svg';
import filter from '../assets/icons/filter.svg';
import BYN from '../assets/images/BYN.png';
import instagram from '../assets/icons/instagram.svg';
import facebook from '../assets/icons/facebook.svg';
import linkedin from '../assets/icons/linkedin.svg';
import twitter from '../assets/icons/twitter.svg';
import youtube from '../assets/icons/youtube.svg';
import Rishab from '../assets/images/Rishab.png';
import Bhuvan from '../assets/images/Bhuvan.png';
import Monkey from '../assets/images/Monkey.png';
import './App.css';

function App() {
  return (
    <div className="master">
    <div className="Navbar">
      <img src={heading} className="heading" alt="heading"/>
      <div className="subNav">
        <p className="overview"><img src={overview} alt="overview"/><t>OVERVIEW</t></p>
        <p className="campaign"><img src={campaign} alt="campaign"/><t>CAMPAIGN</t></p>
        <p className="influencer"><img src={influencer} alt="influencer"/><t>INFLUENCER</t></p>
        </div>
    </div>
    <div className="Header">
    <img src={arrow} className="arrow" alt="arrow"/>
    <img src={search} className="search" alt="search"/>
    <input type="text" className="searchbox" placeholder="Search Influencer"/>
    <button className="CSV">Import CSV</button>
    <button className="newInf">+ New Influencer</button>
    </div>
    <div className="Body">
      <p className="filter">Filters <img src={filter} className="filterImg"/></p>
      <div className="checkInfo">
      <input type="checkbox" className="check"/>
        <div className="infoBox">
          <img src={BYN} className="infoImg"/>
          <div className="basicInfo">
            <p>BYN - Be You Nick</p>
            <p className="smallBasicInfo">9678543234<br/>rishab@gypsycouple.com</p>
          </div>
          <div className="socialInfo">
          <img src={facebook} className="socialImg" alt="socialImg"/><t className="socialfigure">1.3M</t>
          <img src={instagram} className="socialImg" alt="socialImg"/><t className="socialfigure">2.5M</t>
          <img src={linkedin} className="socialImg" alt="socialImg"/><t className="socialfigure">900k</t>
          <img src={twitter} className="socialImg" alt="socialImg"/><t className="socialfigure">700k</t>
          <img src={youtube} className="socialImg" alt="socialImg"/><t className="socialfigure">10.3M</t>
          </div>
          <div className="tags">
            Couple
            <button className="tagbutton1">Travel</button>
            <button className="tagbutton2">Sports</button>
            <button className="tagbutton3">Travel</button>
          </div>
          <div className="footer">
            <t1>Updated by: </t1><t2> Sabista 13-09-2019</t2><t3>Added by: </t3><t2> Sabista 13-09-2019</t2>
            <button className="Delete">Delete</button>
            <button className="Edit">Edit</button>
            <button className="View">View</button>
          </div>
        </div>
      </div><br/>

      <div className="checkInfo">
      <input type="checkbox" className="check"/>
        <div className="infoBox">
          <img src={Rishab} className="infoImg"/>
          <div className="basicInfo">
            <p>Rishab Shah</p>
            <p className="smallBasicInfo">9678543234<br/>rishab@gypsycouple.com</p>
          </div>
          <div className="socialInfo">
          <img src={facebook} className="socialImg" alt="socialImg"/><t className="socialfigure">1.3M</t>
          <img src={instagram} className="socialImg" alt="socialImg"/><t className="socialfigure">2.5M</t>
          <img src={linkedin} className="socialImg" alt="socialImg"/><t className="socialfigure">900k</t>
          <img src={twitter} className="socialImg" alt="socialImg"/><t className="socialfigure">700k</t>
          <img src={youtube} className="socialImg" alt="socialImg"/><t className="socialfigure">10.3M</t>
          </div>
          <div className="tags">
            Male
            <button className="tagbutton1">Travel</button>
            <button className="tagbutton2">Sports</button>
            <button className="tagbutton3">Travel</button>
          </div>
          <div className="footer">
            <t1>Updated by: </t1><t2> Sabista 13-09-2019</t2><t3>Added by: </t3><t2> Sabista 13-09-2019</t2>
            <button className="Delete">Delete</button>
            <button className="Edit">Edit</button>
            <button className="View">View</button>
          </div>
        </div>
      </div><br/>

      <div className="checkInfo">
      <input type="checkbox" className="check"/>
        <div className="infoBox">
          <img src={Bhuvan} className="infoImg"/>
          <div className="basicInfo">
            <p>Bhuvan Bam</p>
            <p className="smallBasicInfo">9678543234<br/>rishab@gypsycouple.com</p>
          </div>
          <div className="socialInfo">
          <img src={facebook} className="socialImg" alt="socialImg"/><t className="socialfigure">1.3M</t>
          <img src={instagram} className="socialImg" alt="socialImg"/><t className="socialfigure">2.5M</t>
          <img src={linkedin} className="socialImg" alt="socialImg"/><t className="socialfigure">900k</t>
          <img src={twitter} className="socialImg" alt="socialImg"/><t className="socialfigure">700k</t>
          <img src={youtube} className="socialImg" alt="socialImg"/><t className="socialfigure">10.3M</t>
          </div>
          <div className="tags">
            Male
            <button className="tagbutton1">Travel</button>
            <button className="tagbutton2">Sports</button>
            <button className="tagbutton3">Travel</button>
          </div>
          <div className="footer">
            <t1>Updated by: </t1><t2> Sabista 13-09-2019</t2><t3>Added by: </t3><t2> Sabista 13-09-2019</t2>
            <button className="Delete">Delete</button>
            <button className="Edit">Edit</button>
            <button className="View">View</button>
          </div>
        </div>
      </div><br/>

      <div className="checkInfo">
      <input type="checkbox" className="check"/>
        <div className="infoBox">
          <img src={Monkey} className="infoImg"/>
          <div className="basicInfo">
            <p>Rishab Shah</p>
            <p className="smallBasicInfo">9678543234<br/>rishab@gypsycouple.com</p>
          </div>
          <div className="socialInfo">
          <img src={facebook} className="socialImg" alt="socialImg"/><t className="socialfigure">1.3M</t>
          <img src={instagram} className="socialImg" alt="socialImg"/><t className="socialfigure">2.5M</t>
          <img src={linkedin} className="socialImg" alt="socialImg"/><t className="socialfigure">900k</t>
          <img src={twitter} className="socialImg" alt="socialImg"/><t className="socialfigure">700k</t>
          <img src={youtube} className="socialImg" alt="socialImg"/><t className="socialfigure">10.3M</t>
          </div>
          <div className="tags">
            Male
            <button className="tagbutton1">Travel</button>
            <button className="tagbutton2">Sports</button>
            <button className="tagbutton3">Travel</button>
          </div>
          <div className="footer">
            <t1>Updated by: </t1><t2> Sabista 13-09-2019</t2><t3>Added by: </t3><t2> Sabista 13-09-2019</t2>
            <button className="Delete">Delete</button>
            <button className="Edit">Edit</button>
            <button className="View">View</button>
          </div>
        </div>
      </div><br/>

      <div className="checkInfo">
      <input type="checkbox" className="check"/>
        <div className="infoBox">
          <img src={BYN} className="infoImg"/>
          <div className="basicInfo">
            <p>Rishab Shah</p>
            <p className="smallBasicInfo">9678543234<br/>rishab@gypsycouple.com</p>
          </div>
          <div className="socialInfo">
          <img src={facebook} className="socialImg" alt="socialImg"/><t className="socialfigure">1.3M</t>
          <img src={instagram} className="socialImg" alt="socialImg"/><t className="socialfigure">2.5M</t>
          <img src={linkedin} className="socialImg" alt="socialImg"/><t className="socialfigure">900k</t>
          <img src={twitter} className="socialImg" alt="socialImg"/><t className="socialfigure">700k</t>
          <img src={youtube} className="socialImg" alt="socialImg"/><t className="socialfigure">10.3M</t>
          </div>
          <div className="tags">
            Male
            <button className="tagbutton1">Travel</button>
            <button className="tagbutton2">Sports</button>
            <button className="tagbutton3">Travel</button>
          </div>
          <div className="footer">
            <t1>Updated by: </t1><t2> Sabista 13-09-2019</t2><t3>Added by: </t3><t2> Sabista 13-09-2019</t2>
            <button className="Delete">Delete</button>
            <button className="Edit">Edit</button>
            <button className="View">View</button>
          </div>
        </div>
      </div><br/>

    </div>
    </div>
  );
}

export default App;
