import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div>
      <div className="carousel w-full rounded-xl mt-5">
        <div id="item1" className="carousel-item w-full">
          <div
            className="hero lg:min-h-[70vh]  bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/sddqDn9K/roommates-happy-unboxing.webp)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <Fade cascade>
                  <h1 className="mb-5 text-5xl font-bold">
                    <Slide delay={500} triggerOnce>
                      <p>Find Your Perfect Roommate</p>
                    </Slide>
                  </h1>
                  <p className="mb-5">
                    Discover your ideal living partner with ease! Whether you're
                    looking for someone who shares your habits, values, or
                    schedule, our platform connects you with trustworthy and
                    compatible roommates
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div
            className="hero lg:min-h-[70vh]    bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(https://i.ibb.co/DDWRqYhR/find-room.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <Fade cascade>
                  <h1 className="mb-5 text-5xl font-bold ">
                    <Slide delay={500} triggerOnce>
                      <p>Find Roommate & Rent Your Ideal Room</p>
                    </Slide>
                  </h1>
                  <p className="mb-5">
                    Looking for the perfect roommate or the ideal place to live?
                    Our platform makes it easy to connect with like-minded
                    individuals, browse verified listings, and find
                    accommodations that match your lifestyle and budget.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <div
            className="hero lg:min-h-[70vh]   bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/35K24Bny/roommates-apps-featured.webp)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <Fade cascade>
                  <h1 className="mb-5 text-5xl font-bold">
                    <Slide delay={500} triggerOnce>
                      <p>Quality Time With Roommate</p>
                    </Slide>
                  </h1>
                  <p className="mb-5">
                    Enjoy meaningful moments and build lasting memories with
                    your roommate. From late-night talks to shared meals and
                    weekend adventures, quality time creates a stronger bond and
                    makes shared living more enjoyable.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Hero;
