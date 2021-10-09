import React , {useState, useRef} from 'react';
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

const Nav=()=>{
	return (
		<>
	 <Router>
	  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      <div>
				<header className="  gold tc pv4 avenir" >
			

				<h1 className="mt2 mb0 baskerville i fw1 f1 animate__animated animate__backInDown ">Proctorless</h1>
				 <h2 className="mt2 mb0 f6 fw4 ttu tracked animate__animated animate__jackInTheBox animate__delay-1s">"Changing the way teachers take examinations"</h2>
				 
				 <nav className="bt bb tc mw7 center dib mt4 ">
          <div className="bt bb tc mw7 dib center mt4 ">
              <div className="dib flex">
            <div>
              <Link to="/" className="f6 f5-l link bg-animate gold hover-bg-navy dib pa3 ph4-l animate__animated " >Home</Link>
            </div>
            <div>
              <Link to="/About" className="bombRightOut f6 f5-l link bg-animate gold hover-bg-navy dib pa3 ph4-l "> Demo</Link>
            </div>
            <div>
              <Link to="/users" className="f6 f5-l link bg-animate gold hover-bg-navy dib pa3 ph4-l animate__animated ">Register</Link>
            </div>
						<div>
              <Link to="/CON" className="f6 f5-l link bg-animate gold hover-bg-navy dib pa3 ph4-l animate__animated ">Contact us</Link>
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
		</video>
		</div>
		
	);
}

function About() {
  return (<div className="">
	<img src={i1}
	style={{
			position: "absolute",
			width: "100%",
			left: "50%",
			top: "50%",
			height: "100%",
			objectFit: "cover",
			transform: "translate(-50%,-50%)",
			zIndex: "-1"
		}} />
	</div>);
}

function Users() {
  return (<div className="">
	<img src={i1} style={{
			position: "absolute",
			width: "100%",
			left: "50%",
			top: "50%",
			height: "100%",
			objectFit: "cover",
			transform: "translate(-50%,-50%)",
			zIndex: "-1"
		}} />
	</div>);
}
function Contact() {
  return (<div className="">
	<img src={i1} style={{
			position: "absolute",
			width: "100%",
			left: "50%",
			top: "50%",
			height: "100%",
			objectFit: "cover",
			transform: "translate(-50%,-50%)",
			zIndex: "-1"
		}} />
	
	</div>);
}

export default Nav;
