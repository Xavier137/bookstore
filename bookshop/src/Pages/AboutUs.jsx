import React from 'react'
import './About.css'

const AboutUs = () => {
  return (
    <div className='section'>
      <div className='container'>
        <div className='content-section'>
          <div className='title'>
            <h1>About Us</h1>
          </div>
          <div className='content'>
            <h2>Welcome To Our Library Information</h2>
            <p>The Library of the EACJ was created in 2024 with the resumption of the new East African Community.</p>
            <p>The library started its collection with limited resources, but is rapidly expanding with new books being purchased from recognised Law Publishers and subscriptions to new periodicals, both hard and soft copy.</p>
            <p>The Library's main role is to assist the Judges of the Court and staff of the Registry with their research. The Court's Library is also open to any other person interested with its resources.</p>
            <p>The Library's collection is primarily composed of works on public international law, international relations and the philosophy of law. The Library also has a collection of various law reports, specialized dictionaries and encyclopedias, including the All England Law Reports, Law Reports of the Commonwealth and the Encyclopedia Britannica. All questions regarding acquisition or consultation of the library materials should be addressed to the EACJ Registrar.</p>
          </div>
          <div className='Button'>
            <a href=''>Read More</a>
          </div>
          <div className='Social'>
            <a href='/'><img src='https://img.freepik.com/premium-psd/3d-circle-with-facebook-logo-isolated-transparent-background_125540-3726.jpg' alt='Facebook'></img></a>
            <a href='/'><img src='https://www.zilliondesigns.com/blog/wp-content/uploads/Twitter-New-Logo-X-2023-.jpg' alt='Twitter'></img></a>
            <a href='/'><img src='https://img.freepik.com/free-psd/3d-circle-with-instagram-symbol-isolated-transparent-background_125540-3727.jpg' alt='Instagram'></img></a>
          </div>
        </div>
        <div className='image-section'>
          <img src='https://thumbs.dreamstime.com/z/east-african-community-icon-set-circle-232318237.jpg' alt="East African Community"></img>
        </div>
      </div>
      <footer className='footer'>
        <div className='footer-content'>
          <div className='contact'>
            <h3>Contact Us</h3>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className='research'>
            <h3>Research</h3>
            <p>Explore our research databases for more information.</p>
          </div>
          <div className='references'>
            <h3>References</h3>
            <p>Find more resources in our references section.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutUs;
