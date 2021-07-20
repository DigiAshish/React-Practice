import React from "react";
import { Link } from "react-router-dom";

const DropDownMenu = () => {
  return (
    <>
      <p> Hello from DropDownMenu </p>
      <nav id="nav">
        <ul id="navigation">
          <li>
            {/* <a href="/home" class="first"> */}
            <Link to={{ pathname: "/home", about: { name: "Niki" } }}>
              Home
            </Link>

            {/* </a> */}
          </li>
          <li>
            <a href="#">Services</a>
            <ul>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Logo Design</a>
              </li>
              <li>
                <a href="#">Identity & Branding &raquo;</a>
                <ul>
                  <li>
                    <a href="#">Business Cards</a>
                  </li>
                  <li>
                    <a href="#">Brochures</a>
                  </li>
                  <li>
                    <a href="#">Envelopes</a>
                  </li>
                  <li>
                    <a href="#">Flyers</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Wordpress</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Protfolio</a>
            <ul>
              <li>
                <a href="#">Graphic Design</a>
              </li>
              <li>
                <a href="#">Photography</a>
              </li>
              <li>
                <a href="#">Architecture</a>
              </li>
              <li>
                <a href="#">Calligraphy</a>
              </li>
              <li>
                <a href="#">Film &raquo;</a>
                <ul>
                  <li>
                    <a href="#">John Carter</a>
                  </li>
                  <li>
                    <a href="#">The Avengers</a>
                  </li>
                  <li>
                    <a href="#">The Amazing SpiderMan</a>
                  </li>
                  <li>
                    <a href="#">Madagascar 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Graffity </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Testimonial</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#" class="last">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default DropDownMenu;
