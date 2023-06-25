import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Center, Layer, Line } from "@iso/tgtb_components/utility/utility";
import Topbar from "./Topbar/Topbar";
import options from "./Topbar/options";
import Gallery from "./Gallery/Gallery";
import { stripTrailingSlash } from "./Topbar/Topbar";

var _ = "#d5d5d5";

const Home = () => {
  return (
    <div>
      <Layer paddingTop="20px" />
      <Center>
        <Banner title="thế giới trang bị" />
      </Center>
      <Layer paddingTop="10px" />
      <Layer padding="0px 10vw" borderTop="1px solid #d5d5d5" height="50px">
        <Topbar
          options={options}
          style={{ fontSize: "16px", fontWeight: "600" }}
        />
      </Layer>
      <Location />
      <Layer paddingTop="20px" />
      <Center>
        <Gallery />
      </Center>
      <Layer paddingTop="20px" />
      <Line />
      <Footer />
    </div>
  );
};

export default Home;

function Banner({ title }) {
  return (
    <div style={{ fontSize: "34px", fontWeight: 900 }}>
      {title.toUpperCase()}
    </div>
  );
}

function Location() {
  return (
    <div
      style={{
        height: "50px",
        lineHeight: "50px",
        textAlign: "center",
        backgroundColor: "#d5d5d5",
      }}
    >
      Trang chủ/ Tshirt
    </div>
  );
}
function Footer({ options = FooterOptions() }) {
  const heading = { fontSize: "14px", fontWeight: "500", marginBottom: "10px" };
  const link = {
    display: "block",
    fontWeight: "400",
    color: "black",
    marginBottom: "5px",
  };
  let match = useRouteMatch();
  const url = stripTrailingSlash(match.url);

  return (
    <Layer padding="40px 15vw">
      <div className="flex justify-between">
        {options.map(({ key, name, sub = [] }, i) => (
          <div key={i}>
            <div style={heading}>{name}</div>
            {sub.map(({ key, name }) => (
              <Link style={link} key={key} to={`${url}/${key}`}>
                {name.toUpperCase()}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <Layer paddingTop="20px" />
      <div style={heading}>Theo dõi chúng tôi</div>
    </Layer>
  );
}

function FooterOptions() {
  return [
    {
      key: "product",
      name: "Sản phẩm",
      sub: [
        { key: "all-clothes", name: "Tất cả sản phẩm" },
        { key: "tshirt", name: "Áo thun" },
        { key: "polo", name: "Áo polo" },
        { key: "hoodie", name: "Áo hoodie" },
      ],
    },
    {
      key: "about-us",
      name: "Về chúng tôi",
      sub: [
        { key: "stories", name: "Câu chuyện về Thế giới Thời Trang" },
        { key: "work-time", name: "Giờ làm việc" },
        { key: "contact", name: "Liên hệ" },
        { key: "parner", name: "Đối tác" },
      ],
    },
    {
      key: "guide",
      name: "Hướng dẫn",
      sub: [
        { key: "shopping-guide", name: "Hướng dẫn mua hàng" },
        { key: "size-guide", name: "Hướng dẫn chọn size" },
        { key: "warranty-exchange", name: "Đổi trả bảo hành" },
        { key: "points-policy", name: "Chính sách tích điểm" },
      ],
    },
    {
      key: "policy",
      name: "Chính sách",
      sub: [
        { key: "payment-policy", name: "Chính sách thanh toán" },
        { key: "shipping-policy", name: "Chính sách vận chuyển" },
        { key: "exchange-policy", name: "Chính sách đổi trả" },
        { key: "warranty-policy", name: "Chính sách bảo hành" },
      ],
    },
  ];
}
