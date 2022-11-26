import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="footer-col">
          <h4>Contacts</h4>
          <ul>
            <li>
              <i class="fa fa-phone" aria-hidden="true">
                0791-440-828
              </i>
            </li>
            <li>
              <i class="fa fa-phone" aria-hidden="true">
                0713-088-520
              </i>
            </li>
            <li>
              <i class="fa fa-envelope" aria-hidden="true"></i>
              chungamjunior@gmail.com
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get More Info</h4>
          <ul>
            <li>Trust Centre</li>
            <li>Terms of use</li>
            <li>Privacy and Policy</li>
            <li>Overview</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/judiciary/how-to-2/">How To</a>
            </li>
            <li>
              <a href="https://www.judiciary.go.ke/our-partners/">
                Our Partners
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa fa-twitter-square">@chungamjunior</i>
          <br />
          <i class="fa-brands fa-facebook"></i>
          <i class="fa fa-facebook-square">Chunga Mjunior</i>
          <br />
        </div>
      </div>
      <div className="rights">
        <h6>2022 Chunga Mjunior. All rights reserved.</h6>
      </div>
    </div>
  );
}

export default Footer



