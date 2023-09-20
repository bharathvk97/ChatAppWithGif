import React from 'react'
// import './App.css'
import './style.css';
// import logo from '../img/logo.svg'
import { TypeAnimation } from 'react-type-animation';
import { useNavigate, Link  } from 'react-router-dom'

const LandingPage = () => {
  const navigate=useNavigate()
  const signinpage=(e)=>{
    e.preventDefault()
    navigate('/loginpage')
  }
  const signuppage=(e)=>{
    e.preventDefault()
    navigate('/signuppage')
  }
  return (
    <div className='landing'>
      <div className='landing-left'>
        <img className='logo' src='img/logo.svg' alt='afa' />
        <div style={{
          marginTop: "auto",
          marginBottom: "auto"
        }}>


          <div className='typewriter-container'>
            <TypeAnimation className='typewriter'
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'What is the capital of France?',
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                'Can you recommend a good book to read?',
                4000,
                'Can you tell me a joke!',
                5000,
                'Whats the best way to lose weight?',
                9000
              ]}
              wrapper="span"
              speed={50}
              repeat={3}
            />
          </div>
          <div className='typewriter-container-2'>
            <TypeAnimation className='typewriter-2'
              sequence={[
                // Same substring at the start will only be typed out once, initially
                '', 3000,
                'The capital of France is Paris.',
                4000, // wait 1s before replacing "Mice" with "Hamsters"
                'Of course! I recommend "The Catcher in the Rye" by J.D. Salinger. It is a classic coming-of-age novel.',
                4000,
                'Sure, here is a joke: Why dont scientists trust atoms? Because they make up everything!',
                4000,
                'Losing weight involves a combination of a healthy diet and regular exercise. Its important to consult a doctor or nutritionist for a personalized plan.',
                2000
              ]}
              wrapper="span"
              speed={80}
              repeat={3}
            />
          </div>
        </div>
        {/* <img className='robot' src={robot} alt='afa' style={{
          width:"700px",
          marginTop:"140px"
        }}/> */}
        {/* <img className='hi-bubble' src={hi} alt='afa'/> */}

      </div>
      <div className='landing-right'>
        <div className='landing-right-box'>
          <div className='avatar-container'>
            <video className='avatar-video' autoPlay loop muted>
              <source src="/video/ai_avatar.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h2>Get Started</h2>
          <button onClick={signinpage}style={{
            // marginRight:'20px'
          }}>Log in</button>
          <button onClick={signuppage}>Sign Up</button>

          <div className='terms'>Terms and conditions</div>


        </div>
      </div>
    </div>
  )
}

export default LandingPage