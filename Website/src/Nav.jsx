import React , {useState, useRef,useEffect} from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "tachyons/css/tachyons.min.css";
import v1 from "./exam.mp4";
import i1 from "./image2.jpg";
import i2 from "./image1.jpg";

//NavBar component
const Nav=()=>{
	return (
		<>
	 <Router>
	  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      <div>

				<header className="  black tc pv4 avenir" >  
				<div className="bg"> 
				 
				<h1 className="mt2 mb0 baskerville i fw1 f1 animate__animated animate__backInDown" id="typewriter">  PROCTORLESS </h1> 
				
				 <h2 className="mt2 mb0 f6 fw4 ttu tracked animate__animated animate__jackInTheBox animate__delay-1s" id="typewriterr"> "Changing the way teachers take examinations" </h2>     <br/>
				 </div>
				 //Routing
				 <nav className="bt bb tc mw7 center dib mt4 bold ">
          <div className="bt bb tc mw7 dib center mt4 ">
              <div className="dib flex">
            <div className="edits">
              <Link to="/" className="f6 f5-l link bg-animate white hover-bg-navy dib pa3 ph4-l animate__animated " id="nav1">Home</Link>
            </div>
            <div>
              <Link to="/About" className="bombRightOut f6 f5-l link bg-animate black hover-bg-light-green dib pa3 ph4-l" id="nav2"> Register </Link>
            </div>
            <div>
              <Link to="/users" className="f6 f5-l link bg-animate white hover-bg-navy2 dib pa3 ph4-l animate__animated" id="nav3">Preview</Link>
            </div>
						<div>
              <Link to="/CON" className="f6 f5-l link bg-animate black hover-bg-navy dib pa3 ph4-l animate__animated " id="nav4">Contact us</Link>
            </div>
						</div>
						
          </div>
					</nav>
                
					
          
					
				</header>
        
        <Switch>
          <Route path="/About" component={About}>
            <About />
          </Route>
          <Route path="/users" component={Users}>
            <Users />
          </Route>
          <Route path="/" exact component={Home}>
            <Home />
          </Route>
					<Route path="/CON" component={Contact}>
          <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
		</>
	);
}

function Home() {
  return (
		<div className="" >
		<video autoPlay loop muted style={{
			position: "absolute",
			width: "100%",
			left: "50%",
			top: "50%",
			height: "100%",
			objectFit: "cover",
			transform: "translate(-50%,-50%)",
			zIndex: "-1"
		}}>
		<source src={v1} type="video/mp4"/>
		</video>  <div className="f3 tc white"> <br/><br/>
					Proctorless is an AI based system to provide secure and live exam proctoring system. 
					<br/> <br/>We work with colleges, universities, employers, and certification providers to create secure, <br/> high-quality educational experiences – and ensure that learners who play by the rules are <br/>honored for their work. 
					</div>
		</div>
		
	);
}
//Registration form
function About() {
  return (<div className="">
	
	 <h1 className="about1"> Sign in </h1>
	 
	 <form  onsubmit="return false" className="about2">
  <label>
    E-mail address <br/> <br/>
    <input type="email" name="name" />
  </label>
  
  <br/> <br/> <br/>


	<label>
    Password <br/> <br/>
    <input type="text" name="name" />
  </label> <br/> <br/>
  <input  className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-gray" type="submit" value="Submit" />  <br/>  <br/> <br/> <br/>
</form>
	 
	
    
	</div>);
}
//Preview/Demo component
function Users() {
	
	document.addEventListener("visibilitychange", function(){
	 //document.title= document.visibilityState;
   console.log(document.visibilityState);
   if(document.visibilityState != 'visible')
     {alert("Please do not change the tab");}
   
	 // t1=document.title
		 //if(t1!= visible)
		 // {alert("Please do not change the tab");}

	});
	const [playing, setPlaying] = useState(false);
//Detecting keyboard shortcuts
useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 86) {
        alert("You used keyboard shortcuts to copy and paste.");
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
	const HEIGHT = 400;
	const WIDTH = 300;

	function startVideo () {
    console.log("Hello");
		setPlaying(true);
		//Accessing Webcam
		navigator.getUserMedia(
			{
				video: true,
			},
			(stream) => {
				let video = document.getElementsByClassName('app__videoFeed')[0];
				if (video) {
					video.srcObject = stream;
				}
			},
			(err) => console.error(err)
		);
	};

	function stopVideo () {
		setPlaying(false);
		let video = document.getElementsByClassName('app__videoFeed')[0];
		video.srcObject.getTracks()[0].stop();
	};
	
	return (<div className="grad"  >
	<div className="for">
	<section className="flex dib">
		<div className="app dib flex">
			<div className="app__container">
				<video className="t2"
				  position
					height={HEIGHT}
					width={WIDTH}
					muted
					autoPlay
					className="app__videoFeed"
				></video>
			</div>
                    //Video stop and start button
			<div className="app__input">
				{playing ? (
					<button onClick={stopVideo} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib black bg-light-purple">Stop</button>
				) : (
					<button className="startbuttonf6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green" onClick={startVideo}>Start</button>
				)}
		
			</div>
               //Question paper
		 <div className="appp"><img src="https://extensions.libreoffice.org/assets/screenshots/z/question-paper_0af0fc3d-4b69-4367-b5d1-904b5d5aeeb0__FitMaxWzEwMDAsMTAwMF0.png"/></div>
	    	</div>
			</section>	
				</div>
				
		</div>
	);
	
}
//Our Github links along with project repository link
function Contact() {
  return (<div className="">
	<ul>
	<br/>
		<pre className="tc">
	<a href="https://github.com/Aarushiduaa" className="link underline green hover-silver no-underline near-white bg-animate bg-near-black  inline-flex items-center ma2 tc br2 pa2"><svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
    Aarushi Dua</a>  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  





	<a href="https://github.com/RishitToteja" className="link underline green tc hover-silver no-underline near-white bg-animate bg-near-black  inline-flex items-center ma2 tc br2 pa2"><svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
    Rishit Toteja</a><br/><br/>
	<a href="https://github.com/aaryan2134" className="link underline green tc hover-silver no-underline near-white bg-animate bg-near-black  inline-flex items-center ma2 tc br2 pa2"><svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
       Aaryan Arora</a> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  
	<a href="https://github.com/Abhisht01" className="link underline green tc hover-silver no-underline near-white bg-animate bg-near-black  inline-flex items-center ma2 tc br2 pa2"><svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
    Abhisht Dixit</a><br/><br/><br/><br/>
	<a href="https://github.com/RishitToteja/TensorGANs_innovathon2021" className="link underline green tc hover-silver no-underline near-white bg-animate bg-near-black  inline-flex items-center ma2 tc br2 pa2"><svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
    Project Repository</a><br/><br/>
	</pre>
	</ul>

	
	</div>);
}


export default Nav;
