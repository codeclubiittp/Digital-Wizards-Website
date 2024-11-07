import React from 'react';
// import { Link } from 'react-router-dom';
import '../css/ClubMember.css'; // Import CSS for styling

function ClubMember(){
    return (
        <div class="card">
        <div class="imgBx">
          <img src="img/prof-pic.jpg">
        </div>
      
        <div class="content">
          <div class="details">
            <h2>Prof. ABC<br><span>Assistant Professor</span></h2>
      
            <div class="data">
              <h3>Date of Joining : dd/mm/yyyy</h3>
              <h3>PhD : Institute ABC</h3>
              <h3>Area of Interest : Civil Eng.</h3>
              <h3>Contact : 9876543210</h3>
              <h3>Email : example@gmail.com</h3>
            </div>
      
            <div class="actionBtn">
              <button class="readmore" onclick="location.href='404.html';">Read More</button>
            </div>
      
          </div>
        </div>
      </div>
    );
}

export default ClubMember;