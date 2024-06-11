import React, { Component } from 'react';
import "./About.css";
import ife_photo from "../assets/ife_photo.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
            <img 
            className="profile_image"
            src= {ife_photo}
            alt="Profile Pic"
            ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">
                <h2>Ife Malomo</h2>
              </div>
                <div className="brief_description">
                  <p>Hi, my name is Ife Malomo! I am a Computer Science major at the University of Maryland on the Data Science track. I love to create art, and explore new mediums and art styles. Outside of coding and drawing, I enjoy checking out new places like local state parks and fairs to make the most of what's in my immediate vicinity.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}