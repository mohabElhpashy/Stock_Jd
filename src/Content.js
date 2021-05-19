import React from 'react'
import Axios from 'axios'
import { useHistory} from "react-router-dom";
import {withRouter} from 'react-router-dom'

function Content() {
    // const history=useHistory();

    const LogOut=()=>{
        Axios.get('https://trading-stock.herokuapp.com/authentication/logout',
        {headers:{'Authorization':localStorage.getItem('token')}}).then(res=>{localStorage.clear()
        window.location="/"})}

    return (
        <div>
            <h1>You Are Login!!!!</h1>
                  <button onClick={LogOut}>LogOut</button>

        </div>
    )
}

export default withRouter(Content)
