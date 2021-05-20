    import React from 'react'
    import Styles from './Header.module.css';
    import SS from '../../../Images/IntroductionImages/4.svg'
    import D from '../../../Images/IntroductionImages/5.svg'
    import Chart from '../../../Images/IntroductionImages/Chartful.svg'


    function Header() {
        return (
            <header className={Styles.Header}>
                <div className={Styles.Chaart}  ><img className={Styles.Chaartimage}  src={Chart} alt=''/>Chartful</div>
                <div style={{display:'flex',marginRight:'90px'}}>
                <button className={Styles.Signup}><img src={D} style={{width:'25px',height:"15px"}} alt=''/>Sign up</button>
                
                    <button className={Styles.Login}><img src={SS} style={{width:'25px',height:"15px"}} alt=''/>Login</button>

                </div>
            </header>
        )
    }

    export default Header
