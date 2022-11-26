import React from "react";


function Contact(){
// alert("contact me")
    return (
      <div className="contact">
        <h4 id="card">FEEL FREE TO CONTACT US ANY MOMENT</h4>
        <div className="card">
          <div>
            <ul class="list-group list-group-flush">
              <i class="list-group-item" aria-hidden="true">
                0791-440-828
              </i>
              <br />
              <i class="list-group-item" aria-hidden="true">
                0713-088-520
              </i>
              <br />
              <i class="list-group-item" aria-hidden="true">
                chungamjunior@gmail.com
              </i>
            </ul>
          </div>
          <div>
            <ul class="list-group list-group-flush">
              <i class="list-group-item">@chungamjunior</i>
              <br />
              <i class="list-group-item">Chunga Mjunior</i>
              <br />
              <i class="list-group-item">Chunga_Mjunior</i>
              <br />
            </ul>
          </div>
          <div>
            <ul class="list-group list-group-flush">
              <i class="list-group-item">chungamjunior@gmail</i>
              <i class="list-group-item">@chungamjunior</i>
              <br />
              <i class="list-group-item">Chunga Mjunior</i>
            </ul>
          </div>
        </div>
      </div>
    );
}
export default Contact;