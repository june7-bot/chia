import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Headerthree";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footertwo";
import Content from "../sections/shop-details/Content";

const pagelocation = "Shop Details";

class Shopdetails extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: "100%",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundImage:
            "url(" + process.env.PUBLIC_URL + "/assets/img/background/bg1.jpg)",
          color: "white",
          backgroundSize: "cover",
        }}
      >
        <Content productId={this.props.match.params.id} />
      </div>
    );
  }
}

export default Shopdetails;
