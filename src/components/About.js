import React from 'react';
import TextAnimation from 'react-animate-text';




const About = () => {
	const myStyle = {
		position:"relative",
		maxwidth:"600px",
		padding:"50px",
		background:"rgba(255,255,255,.4)",
		boxshadow:"0 5px 15px rgba(0,0,0,.7)",
		fontFamily: "cursive"


	  };

	  const Anchorlink = {
	
		width:"50px"


	  }
	 
	return (
		
		<div className="Home">
			<center>
				<h1> 
					<b>
					<TextAnimation number='5'>A warm welcome to my art pannel <i class ="fa fa-paint-brush" aeria-hidden="true"></i></TextAnimation>
				<br/>
						<h3 style={myStyle} className="black">Good Day Folks &#129321; !! Myself nomenclatured as <b > "Rahul Manohara" </b>, an artist from heritage city <b> Mysuru </b>, I have been in the industry for over a quite good amount of years
I have specialised in Wall paintings, art work for <b>cafe's, personalised custom room art, concept based art, portraits in oil painting, acrylic painting, charcoal art, mural art</b></h3>
                        <h3 style={myStyle} className="black">If there are any projects do contact me on <b>8880488882 / rahulmanohar0596@gmail.com</b><br/>
						also feel free to DM me on social hubs <br/><a style={Anchorlink} class="fab fa-facebook" href="https://www.facebook.com/rahulm80" rel="noopener noreferrer" target="_blank"></a>
						<a style={Anchorlink} class="fab fa-instagram" href="https://instagram.com/sketchx_05?utm_medium=copy_link" rel="noopener noreferrer" target="_blank"></a>	
						</h3>
						
					</b>
				</h1>
                <br/>
			</center>
		</div>
	)
}

export default About;