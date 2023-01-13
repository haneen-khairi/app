import React from "react";
import img from "../img/mainimg.png";
import android from "../img/btnandroid.png";
import ios from "../img/btnios.png";
import img1 from "../img/mobi1.png";
import img2 from "../img/mobi2.png";
import img3 from "../img/mobi3.png";
import img4 from "../img/mobi4.png";
import mobileapp from "../img/bigimg2.png";

export function Home() {
  return (
    <div>
      <section className="home-sec-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="home-banner-sec-1">
                <span>Looking for a some fun?</span>
                <h1>Download Shawweet Now!</h1>
                <p>
                  Shawweet App allows you to get access to your favorite
                  activities and group sports where you explore, join, and get
                  connected to the activities organizers at the region
                </p>
                <div className="d-flex-start">
                  <a href="">
                    <img src={android} width={200} alt="" />
                  </a>
                  <a href="">
                    <img src={ios} width={200} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src={img} width={400} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="home-sec2">
        <div className="container">
          <div className="row">
            <div className="title-how-its-work">
              <h2>
                How Does It <b>Work?</b>
              </h2>
              <p>Ready to have some fun? Lets Go!</p>
            </div>
            <div className="box-section row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="box-big">
                  <div className="bgmain-box1">
                    <img src={img1} width={200} alt="" />
                  </div>
                  <h5>Create your Profile</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="box-big">
                  <div className="bgmain-box1">
                    <img src={img2} width={200} alt="" />
                  </div>
                  <h5>Explore available activities around you</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="box-big">
                  <div className="bgmain-box1">
                    <img src={img3} width={200} alt="" />
                  </div>
                  <h5>Book with your friends or join random people</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="box-big">
                  <div className="bgmain-box2">
                    <img src={img4} width={200} alt="" />
                  </div>
                  <h5>Have Fun!</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-sec3">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="home-banner-sec-1">
                <span>Get Our Aplication</span>
                <h2>You Can Easily Find Our App…!</h2>
                <p>
                  You won't even break a sweat trying to find and download our
                  app. It's almost too easy. In fact, you might accidentally
                  download it twice because it's so simple. But hey, more app
                  for you! Yay!
                </p>
                <div className="d-flex-start">
                  <a href="">
                    <img src={android} width={200} alt="" />
                  </a>
                  <a href="">
                    <img src={ios} width={200} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12">
            <div className="find-our-app">
              <img src={mobileapp} width={700} alt="" />
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
