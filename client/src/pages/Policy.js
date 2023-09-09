import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>the aspect of information technology which deals with the sharing of personal information to the third parties.</p>
          <p>
Privacy is the right to control how your information is viewed and used, while security is protection against threats or danger.</p>

        </div>
      </div>
    </Layout>
  );
};

export default Policy;
