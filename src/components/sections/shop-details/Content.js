import React, { Component, Fragment } from "react";
import { Tab, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getProduct } from "../../../helper/Producthelper";
import { Rating, fetchFlavorIcon } from "../../../helper/helper";
import shopcategory from "../../../data/category.json";
import blogtags from "../../../data/blogtags.json";
import Featuredproducts from "../../layouts/Featuredproducts";
import Slider from "react-slick";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 1,
      nav1: null,
      nav2: null,
    };
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  DecreaseItem = () => {
    if (this.state.clicks < 1) {
      this.setState({
        clicks: 0,
      });
    } else {
      this.setState({
        clicks: this.state.clicks - 1,
      });
    }
  };
  handleChange(event) {
    this.setState({ clicks: event.target.value });
  }
  render() {
    const productId = this.props.productId;
    const item = getProduct(productId);
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      infinite: true,
      centerMode: true,
      fade: true,
    };
    const settingsThumb = {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            focusOnSelect: true,
          },
        },
      ],
    };
    return (
      <Fragment>
        <section className="py-0 pt-120 pb-120">
          <div className="container">
            <div className="cw-product-des-details">
              <div className="row">
                <div className="col-md-12">
                  <h2
                    style={{
                      color: "white",
                      textAlign: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    지갑 관리
                  </h2>
                  <Tab.Container defaultActiveKey="tab1">
                    <Nav
                      variant="pills"
                      className="nav nav-pills justify-content-center"
                    >
                      <Nav.Item>
                        <Nav.Link style={{ color: "white" }} eventKey="tab1">
                          지갑내역
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          style={{
                            borderBottom: "3px solid #ffc107",
                            color: "white",
                            imageResolution,
                          }}
                          eventKey="tab2"
                        >
                          출금
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item></Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="tab1">
                        <div style={{ marginTop: "1.5rem" }}>
                          <h3 style={{ color: "white", textAlign: "center" }}>
                            나의 BTC 지갑주소
                          </h3>
                          <div></div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tab2">
                        <div className="cw-shop-product-spec-table">
                          <table className="table table-bordered">
                            <tbody>
                              {item.specifications.map((spec, i) => (
                                <tr key={i}>
                                  <th>{spec.title}</th>
                                  <td>{spec.text}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="cw-section cw-shop-section pt-120 pb-120">
          <Featuredproducts />
        </section> */}
      </Fragment>
    );
  }
}

export default Content;
