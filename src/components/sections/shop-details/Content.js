import React, { Component, Fragment } from "react";
import { Tab, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getProduct } from "../../../helper/Producthelper";
import { Rating, fetchFlavorIcon } from "../../../helper/helper";
import shopcategory from "../../../data/category.json";
import blogtags from "../../../data/blogtags.json";
import Featuredproducts from "../../layouts/Featuredproducts";
import Slider from "react-slick";
import ShowBox from "../show-data/ShowBox";
import Modal from "../modal/Modal";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
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

  openModal = () => {
    this.setState({ modalOpen: true });
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };

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
          <div
            style={{ paddingRight: "0px", paddingLeft: "0px" }}
            className="container"
          >
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
                        <Nav.Link
                          className="mr-65"
                          style={{ color: "white" }}
                          eventKey="tab1"
                        >
                          지갑내역
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          style={{
                            // borderBottom: "3px solid #ffc107",
                            color: "white",
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
                          <h5
                            style={{
                              color: "white",
                              textAlign: "center",
                              paddingBottom: "20px",
                            }}
                          >
                            나의 BTC 지갑주소
                          </h5>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                              paddingBottom: "20px",
                            }}
                          >
                            <p
                              style={{
                                width: "60%",
                                color: "white",
                                borderBottom: "2px solid #ffc107",
                              }}
                            ></p>
                            <button
                              style={{
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                color: "white",
                                width: "30%",
                                borderColor: "#white",
                              }}
                            >
                              복사
                            </button>
                          </div>
                          <ShowBox title="BTC 수량" content="0 BTC" />
                          <ShowBox title="USD 잔액" content="0 USD" />
                        </div>
                        <hr
                          style={{
                            marginBottom: "10px",
                            borderTop: "2px solid #ffc107",
                          }}
                        />
                        <i
                          style={{ paddingLeft: "10px", marginBottom: "10px" }}
                          className="fas fa-sync-alt fa-2x"
                        ></i>

                        <ul>
                          <li
                            style={{
                              height: "50px",
                              width: "100%",
                              backgroundColor: "gray",
                            }}
                          >
                            hihihi
                          </li>
                          <li
                            style={{
                              height: "50px",
                              width: "100%",
                              backgroundColor: "gray",
                            }}
                          >
                            hihihi
                          </li>
                          <li
                            style={{
                              height: "50px",
                              width: "100%",
                              backgroundColor: "gray",
                            }}
                          >
                            hihihi
                          </li>
                          <li
                            style={{
                              height: "50px",
                              width: "100%",
                              backgroundColor: "gray",
                            }}
                          >
                            hihihi
                          </li>
                          <li
                            style={{
                              height: "50px",
                              width: "100%",
                              backgroundColor: "gray",
                            }}
                          >
                            hihihi
                          </li>
                          <li
                            style={{
                              height: "50px",
                              width: "100%",
                              backgroundColor: "gray",
                            }}
                          >
                            hihihi
                          </li>
                          <li
                            style={{
                              height: "50px",
                              width: "100%",
                              backgroundColor: "gray",
                            }}
                          >
                            hihihi
                          </li>
                          <li
                            style={{
                              height: "50px",
                              width: "100%",
                              backgroundColor: "gray",
                            }}
                          >
                            hihihi
                          </li>

                          <li
                            style={{
                              height: "50px",
                              width: "100%",
                              backgroundColor: "gray",
                            }}
                          >
                            hihihi
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tab2">
                        <div
                          style={{
                            marginTop: "1.5rem",
                            marginBottom: "1.5rem",
                          }}
                        >
                          <ShowBox title="BTC 수량" content="0 BTC" />
                          <ShowBox title="USD 잔액" content="0 USD" />
                        </div>

                        <div
                          style={{
                            marginTop: "1.5rem",
                            marginBottom: "1.5rem",
                          }}
                        >
                          <ShowBox
                            title="1회 최소 출금 가능액"
                            content="0 USD"
                          />
                          <ShowBox
                            title="1회 최대 출금 가능액"
                            content="0 USD"
                          />
                          <ShowBox title="1일 출금 한도" content="0 USD" />
                        </div>

                        <div
                          style={{
                            paddingLeft: "23px",
                            display: "flex",
                            paddingBottom: "10px",
                          }}
                        >
                          <h5 style={{ paddingRight: "10px" }}>출금신청금액</h5>
                          <button
                            style={{
                              background: "black",
                              borderColor: "#ffc107",
                              color: "#ffc107",
                              width: "4rem",
                              height: "1.5rem",
                              fontSize: "0.8rem",
                              fontWeight: "bold",
                            }}
                          >
                            최대
                          </button>
                        </div>
                        <div
                          style={{ paddingBottom: "1.5rem", display: "flex" }}
                        >
                          <input placeholder="출금 신청 금액  " />
                          <h5
                            style={{
                              paddingRight: "1rem",
                            }}
                          >
                            USD
                          </h5>
                        </div>

                        <div
                          style={{
                            paddingLeft: "23px",
                            display: "flex",
                            paddingBottom: "10px",
                          }}
                        >
                          <h5 style={{ paddingRight: "10px" }}>BTC 환산액</h5>
                        </div>
                        <div
                          style={{ paddingBottom: "1.5rem", display: "flex" }}
                        >
                          <input placeholder="BTC 환산액  " />
                          <h5
                            style={{
                              paddingRight: "1rem",
                            }}
                          >
                            USD
                          </h5>
                        </div>

                        <div
                          style={{
                            paddingLeft: "23px",
                            paddingBottom: "10px",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "0.70rem",
                              fontWeight: "bold",
                            }}
                          >
                            변환 수수료 1%와 기본 출금 수수료 0.0005 BTC가
                            공제된 수량입니다.
                          </p>
                        </div>

                        <div
                          style={{
                            paddingLeft: "23px",
                            display: "flex",
                            paddingBottom: "10px",
                          }}
                        >
                          <h5 style={{ paddingRight: "10px" }}>
                            최종 출금 BTC
                          </h5>
                        </div>
                        <div
                          style={{ paddingBottom: "1.5rem", display: "flex" }}
                        >
                          <input placeholder="출금 금액  " />
                          <h5
                            style={{
                              paddingRight: "1rem",
                            }}
                          >
                            BTC
                          </h5>
                        </div>

                        <div
                          style={{
                            paddingLeft: "23px",
                            display: "flex",
                            paddingBottom: "10px",
                          }}
                        >
                          <h5 style={{ paddingRight: "10px" }}>최종 출금액</h5>
                        </div>
                        <div
                          style={{ paddingBottom: "1.5rem", display: "flex" }}
                        >
                          <input placeholder="출금 금액  " />
                          <h5
                            style={{
                              paddingRight: "1rem",
                            }}
                          >
                            USD
                          </h5>
                        </div>

                        <div
                          style={{
                            paddingLeft: "23px",
                            paddingBottom: "10px",
                          }}
                        >
                          <h5 style={{ paddingRight: "10px" }}>출금 주소</h5>
                        </div>
                        <div
                          style={{ paddingBottom: "1.5rem", display: "flex" }}
                        >
                          <input
                            className="aInput"
                            placeholder=" 출금 주소를 입력하시기 바랍니다."
                          />
                        </div>

                        <div
                          style={{
                            paddingLeft: "23px",
                            paddingBottom: "10px",
                          }}
                        >
                          <h5 style={{ paddingRight: "10px" }}>출금 후 잔액</h5>
                        </div>
                        <div
                          style={{
                            paddingBottom: "1.5rem",
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <h5
                            style={{
                              marginRight: "1rem",
                            }}
                          ></h5>
                          <h5
                            style={{
                              paddingRight: "1rem",
                            }}
                          >
                            USD
                          </h5>
                        </div>

                        <div
                          style={{
                            paddingLeft: "23px",
                            paddingBottom: "10px",
                          }}
                        >
                          <h5
                            style={{
                              paddingRight: "10px",
                              paddingBottom: "10px",
                            }}
                          >
                            인증방식
                          </h5>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              paddingBottom: "10px",
                            }}
                          >
                            <label
                              style={{
                                fontSize: "small",
                              }}
                              htmlFor={"ck0"}
                            >
                              <input
                                id="ck0"
                                style={{
                                  marginTop: "0.1rem",
                                  marginLeft: "0.1rem",
                                  height: "1rem",
                                  width: "1rem",
                                  marginRight: "0.3rem",
                                }}
                                type="checkbox"
                              />
                              SMS 인증
                            </label>
                            <button
                              style={{
                                marginRight: "1rem",
                                background: "black",
                                borderColor: "#ffc107",
                                color: "#ffc107",
                                width: "6rem",
                                height: "1.8rem",
                                fontSize: "0.7rem",
                                fontWeight: "bold",
                              }}
                            >
                              인증
                            </button>
                          </div>
                        </div>
                        <div>
                          <div
                            style={{
                              display: "flex",
                              paddingBottom: "10px",
                            }}
                          >
                            <input
                              style={{
                                width: "55%",
                              }}
                              className="aInput"
                              placeholder=" 전화번호 인증 코드"
                            />
                            <button
                              style={{
                                marginRight: "1rem",
                                background: "black",
                                borderColor: "#ffc107",
                                color: "#ffc107",
                                width: "6rem",
                                height: "1.8rem",
                                fontSize: "0.7rem",
                                fontWeight: "bold",
                              }}
                            >
                              확인
                            </button>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <button
                              onClick={this.openModal}
                              style={{
                                marginTop: "1rem",
                                background: "#ffc107",
                                outline: "0",
                                border: "0",
                                color: "black",
                                width: "90%",
                                height: "1.8rem",
                                fontSize: "0.7rem",
                                fontWeight: "bold",
                              }}
                            >
                              출금 신청
                            </button>
                            <Modal
                              open={this.state.modalOpen}
                              close={this.closeModal}
                              money={1203013021.231}
                              address={"sadsasadsa"}
                            />
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Content;
