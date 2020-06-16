import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "gatsby";
import Gallery from '../components/Gallery/dashboard';
import { ROUTES } from '../assets/constants';


const Dashboard = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    window.location.href = 'mailto:perspectivesbyv@gmail.com?subject=perspectivesbyv contract&body=' + data.message + "<br>" + data.name + "<br>" + data.email;
    reset();
  }

  return (
    <div id="main">
      <section id="section-one" className="panels" onContextMenu={e => { e.preventDefault(); }}>
        <div className="section-container">
          <div className='about-banner-sec'>
          </div>
        </div>
        <div className="about-banner-text">
          <h2>About Myself</h2>
          <p>
            Growing up with an artistic side made sure I was going to do something distinctive which led me to pursue bachelors in architecture and in those 5 years the two things which grew up on me the most were photography and travelling.
          <br />
          Soon after graduating I did my masters in Still Photography from AAFT, Noida. Having an edge with my expertise in architecture and photography I am now determined to become a renowned photographer.
        </p>
        </div>
      </section>
      <section id="two">
        <h2>Recent Work</h2>
        <Gallery />
        <ul className="actions">
          <li>
            <Link to={ROUTES.PORTFOLIO} className="button">Full Portfolio</Link>
          </li>
        </ul>
      </section>

      <section id="three">
        <h2>Get In Touch</h2>
        <div className="row">
          <div className="8u 12u$(small)">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row uniform 50%">
                <div className="6u 12u$(xsmall)">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    ref={register}
                  />
                </div>
                <div className="6u 12u$(xsmall)">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    ref={register}
                  />
                </div>
                <div className="12u">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="4"
                    ref={register}
                  ></textarea>
                </div>
              </div>
              <ul className="actions" style={{ marginTop: 30 }}>
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </form>
          </div>
          <div className="4u 12u$(small)">
            <ul className="labeled-icons">
              {/* <li>
              <h3 className="icon fa-home">
                <span className="label">Address</span>
              </h3>
              1234 Somewhere Rd.
              <br />
              Nashville, TN 00000
              <br />
              United States
            </li> */}
              <li>
                <h3 className="icon fa-mobile">
                  <span className="label">Phone</span>
                </h3>
              +91 981-855-3100
            </li>
              <li>
                <h3 className="icon fa-envelope-o">
                  <span className="label">Email</span>
                </h3>
                <a href="#">perspectivesbyv@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
