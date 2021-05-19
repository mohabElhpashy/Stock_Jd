    import './App.css';
 import Login from './Login'
 import Content from './Content'
 import React,{Fragment,useState} from 'react'
 import Axios from 'axios'
import Protect from './ProtectedRoute'
import Prof from "./Components/IntroductionComponent/Introduction"
 import { BrowserRouter as Router, Link, Route,  } from "react-router-dom";
 import { useHistory} from "react-router-dom";

    function App() {
    const [file,setfile]=useState()
    const [IsAuth,setIsAuth]=useState(true)
      let history=useHistory()
      // const  Upload = async()=>{
      //   const upload = await Axios.put(`https://first-images.s3.amazonaws.com/6098399eba4f4e0015a3e719/39f290d0-b2cd-11eb-b095-c38504afae19.jpg?AWSAccessKeyId=AKIA2IEGOASENNDQPNWW&Content-Type=image%2Fjpg&Expires=1620788907&Signature=TrwvfZV4cKtoFiVgOF5vjIlugeQ%3D`,Img, {
      //     headers: {
      //       "Content-Type": "jpg",
      //       'x-amz-acl': 'public-read'
      //     },
      //   });
      //   console.log(upload);
      // }
    
  const log=()=>{
    setIsAuth(true)
    console.log(IsAuth)
  }
    
      return (  
        <div className="App">
           <Router>
          <Route path="/" exact >
            <Login log={log}/>
            {/* </> */}

        
          </Route>
          <Protect path="/Profile" component={Content} IsAuth={localStorage.getItem("gitaccess")}/>


          <Protect path="/content" component={Prof} IsAuth={localStorage.getItem("gitaccess")}/>
      </Router> 
{/*        
      <input type="file" onChange={event=>setfile(event.target.files[0])}/>
      <button onClick={Upload}>Upload</button> */}

        </div>
      );
    }

    export default App;
