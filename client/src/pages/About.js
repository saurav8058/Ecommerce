import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - 99SALE app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Hey there! 
          I’m currently pursuing my B.Tech and 
          I’ve got a year of experience under my best as a web developer.
           I’ve worked on three major projects so far. The first one was a clone of a car rental website,
            the second one focused on lead generation, and the last one was an EdTech project called StudyNotion. 
            It’s been an exciting journey and I’m eager to keep growing in this field!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
