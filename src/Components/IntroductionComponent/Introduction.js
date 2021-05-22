import React from 'react'
import Intro from '../../Images/IntroductionImages/introLog.svg'
import Header from '../IntroductionComponent/Header/Header'
import Styles from './Introduction.module.css'
import One from '../../Images/IntroductionImages/One.svg'
import Arrow from '../../Images/IntroductionImages/Arrow.svg'
import Six from '../../Images/IntroductionImages/Six.svg'
import Seven from '../../Images/IntroductionImages/Seven.svg'
import OurServiceOne from '../../Images/IntroductionImages/OurServiceOne.svg'
import OurServiceShadow from '../../Images/IntroductionImages/OurServiceShadow.svg'
import AnotherShadow from '../../Images/IntroductionImages/Shdow2.svg'
import OurServiceTwo from '../../Images/IntroductionImages/Secondchart.svg'
import Line from '../../Images/IntroductionImages/Line.svg'
import ThirdChart from '../../Images/IntroductionImages/ThirdChart.svg'
import Shadoww3 from '../../Images/IntroductionImages/Shadow3.svg'
import Shadoww4 from '../../Images/IntroductionImages/Shadow4.svg'
import Fourth from '../../Images/IntroductionImages/FourthChart.svg'
import Fivth from '../../Images/IntroductionImages/FivthChart.svg'
import Cicle from '../../Images/IntroductionImages/Cicle.svg'
import Vid from '../../Images/IntroductionImages/Vid.svg'
import Play from '../../Images/IntroductionImages/Play.svg'
import PurCicle from '../../Images/IntroductionImages/PurbleCicle.svg'
import BlueCicle from '../../Images/IntroductionImages/BlueCicle.svg'
import Footer from '../../Images/IntroductionImages/Footer.svg'
import FooterShadow from '../../Images/IntroductionImages/FooterShadow.svg'
import Message from '../../Images/IntroductionImages/Message.svg'
import Face from '../../Images/IntroductionImages/Face.svg'
import Ins from '../../Images/IntroductionImages/Inst.svg'
import Linked from '../../Images/IntroductionImages/Linked.svg'
import Twiit from '../../Images/IntroductionImages/Twiit.svg'
    function Introduction() {
        return (
            <div className={Styles.Main}>
                <Header/>

                <div className={Styles.FirstContent}>
                <div className={Styles.Content}> 
        <p className={Styles.pp}>The eyes and <br/> ears of the fellow trader </p><br/>
    <p className={Styles.pSmall}>Chartful provides technical analysis that will up your trading <br/>to the next level<br/>
            <button className={Styles.getstart}>Get started</button>
    </p>
    
        </div>


                <img src={Intro} alt='introduction' />

                </div>


            <div className={Styles.Secondintro}>
                <img src={One} alt=''/>
                <img src={Arrow} alt=''/>
                <img src={Six} alt=''/>
                <img src={Arrow} alt=''/>
                 <img src={Seven} alt=''/>
 </div>
                    <div className={Styles.OurServiceOne}>
                        <div className={Styles.OURSERVICee}></div>
                    <h2 className={Styles.OURSERVICe}>Our Service</h2>

                        <img className={Styles.Shadow} src={OurServiceShadow} alt=''/>
                        <div className={Styles.Blockone}>
                        <img  src={OurServiceOne} alt=''/>
                        <div>
                            <h2>Watchlists made by traders, for traders</h2>
<p>Chartful hosts a weekly vote amongst members regarding the top stocks they have on watch for the following week. The top voted stocks are put into a community built weekly watchlist. This provides insight into what other traders have their eyes on at the start of each trading week. Work together to beat the odds of the market. Utilize the Chartful community as a resource to assist you in your trading career.</p>
                        </div>
                        </div>
                        </div>
{/* ------------------------------------------------------------------------------------------------- */}

                        <div className={Styles.OurService2}>


                        <div className={Styles.Blockone2}>

                        <div>
                            <h2>Professional Technical Analysis</h2>
<p>Every Sunday the Chartful team provides high quality technical analysis for the top 10 most voted stocks from the weekly watchlist. Analysis will include a short-term, medium-term, and long-term technical outlook, allowing you to be prepared for the trading week to come, whilst catering to all trading styles.
</p>
                        </div>
                        <img  src={OurServiceTwo} alt=''/>

                        </div>
                        <img className={Styles.Shadow2} src={AnotherShadow} alt=''/>

                        </div>  
                        <img style={{marginTop:'-175px'}} src={Line} alt=''/>
{/* ------------------------------------------------------------------------------------------------- */}

<div className={Styles.OurServiceOne3}>

<img className={Styles.Shadow3} src={Shadoww3} alt=''/>

                        <div className={Styles.Blockone3}>
                        <img  src={ThirdChart} alt=''/>
                        <div>
                            <h2>Chartful Daily Picks</h2>
<p>Every morning the Chartful team will analyze the market to find the highest probability technical trade setups for the trading day. From there actionable trade plans will be created and shared with its members. These pre-market watchlists will also include analysis of the market indices, such as the S&P 500, Dow Jones Industrial Average, and Nasdaq.
</p>
                        </div>
                        </div>
                        </div>
{/* ------------------------------------------------------------------------------------------------- */}
<div className={Styles.OurServiceOne4}>

<img className={Styles.Shadow4} src={Shadoww4} alt=''/>

                        <div className={Styles.Blockone4}>
                        <img  src={Fourth} alt=''/>
                        <div>
                            <h2>The Stream</h2>
<p>Throughout the day stay up to date with the latest market, stock, and chart updates, with a live feed of updates and fresh ideas. We stay on-top of the current trends to make sure that you won't miss a thing. Chartful is always on the hunt for quality technical setups so that our members are set up with a high probability of success in their trading.

</p>
                        </div>
                        </div>
                        </div>
                        <img style={{marginTop:'-175px'}} src={Line} alt=''/>
                        {/* ------------------------------------------------------------------------------------------------- */}

<div className={Styles.OurServiceOne3}>


                 <div className={Styles.Blockone3}>
                    <img  src={Fivth} alt=''/>
                    <div>
                     <h2>Miss something?</h2>
                <p>Want to see a chart? Want to ask a question? No problem! Stay connected with the Chartful team and other traders through our on-site chatroom. Request technical analysis with ease through our chart request feature. </p>
                    </div> </div> 
                    <img className={Styles.Cicle} src={Cicle }alt=''/>
                    </div>
  {/* ------------------------------------------------------------------------------------------------- */}
                        <div className={Styles.Dive_into_Chartul}>
                        <div className={Styles.MyBorder}></div>
                            <h2>Dive into Chartul</h2>
                        </div>

                <div className={Styles.Content_Vid}>

                    <img className={Styles.IMAgevid} src={Vid} alt=''/>      
                     <img   className={Styles.IMAgePlay}src={Play} alt=''/>
                     <img   className={Styles.PurCicle}src={PurCicle} alt=''/>
                     <img   className={Styles.BlueCicle}src={BlueCicle} alt=''/>

                </div>
    {/* -------------------------------------------------------------------- */}
            <div className={Styles.Footer}>
            <img className={Styles.FooterShadow} src={FooterShadow} alt=""/>
            <img className={Styles.Footerimg} src={Footer} alt=""/>
            <div>
                <h1 style={{textAlign:'left'}}>Contact Us</h1>
             <h3 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                 <h2 
                 style={{
                     display:'flex',
                     marginTop: '-19p',
                     justifyContent:'center',
                     alignItems:'center',
                     width:"40px",height:'35px',backgroundColor:'white',border:'1px solid white',borderRadius:"50%"}}>
                     <img src={Message} alt=''/> </h2> <p style={{marginLeft:'10px'}}>info@simplychartful.com</p></h3> 

                     <div className={Styles.SocialMediaDiv} >
                   <h2><img src={Face} alt=''/></h2>
                   <h2><img src={Ins} alt=''/></h2>
                   <h2><img src={Twiit} alt=''/></h2>
                  <h2><img src={Linked} alt=''/></h2>
                  </div>
            </div> 

            </div>

            </div>
        )
    }

    export default Introduction