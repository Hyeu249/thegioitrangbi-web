import React from "react";
import { Layer, Center, Line } from "@iso/tgtb_components/utility/utility";

const data = [
  {
    id: 1,
    name: "Snake_Pattern_1",
    price: "210.000đ",
    src: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/April2023/Ao_thun_Oversize_84RISING_Youth_Cultureshadwo1.jpg",
  },
  {
    id: 2,
    name: "Snake_Pattern_2",
    price: "210.000đ",
    src: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/April2023/Ao_thun_oversize_basic_84RISINGshawdo6.jpg",
  },
  {
    id: 3,
    name: "Snake_Pattern_3",
    price: "210.000đ",
    src: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/image/April2023/Ao_thun_oversize_84RISING_REPRESENTshadwo2.jpg",
  },
  {
    id: 4,
    name: "Snake_Pattern_4",
    price: "210.000đ",
    src: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/April2023/Ao_thun_oversize_84RISING_ICONIC_LOGOshadow6.jpg",
  },
  {
    id: 5,
    name: "Snake_Pattern_5",
    price: "210.000đ",
    src: "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/April2023/Ao_thun_oversize_84RISING_BIG_ICONshadow1.jpg",
  },
];

function Gallery() {
  const imageWidth = 384;
  const width = imageWidth * 3 + 40;

  const virtual = { virtual: true };
  const virtualArray =
    data.length < 4 ? Array(4 - data.length).fill(virtual) : [];

  return (
    <div style={{ width }}>
      <div className="flex justify-between">
        <Total about={data.length} />
        <div>Sắp xếp: Mặc định</div>
      </div>
      <Line />
      <Layer height="20px" />
      <Center>
        <Paginate />
      </Center>
      <Layer height="20px" />
      <div className="flex justify-between flex-wrap" style={{ width }}>
        {[...data, ...virtualArray].map((item, index) => (
          <ImageFrame key={item.id} {...item} width={imageWidth} />
        ))}
      </div>
    </div>
  );

  function Total({ about }) {
    return <div>Tổng số lượng sản phẩm: ({about})</div>;
  }

  function ImageFrame({ width, virtual = false, name, price, src }) {
    const height = "354px";
    if (virtual) return <div style={{ width: width + "px", height }} />;

    return (
      <div
        style={{
          width: width + "px",
          // height: height,
          backgroundColor: "white",
          marginBottom: "20px",
        }}
      >
        <Exposer />
        <Spec />
      </div>
    );
    function Exposer() {
      return (
        <img
          style={{ width: width + "px", height, objectFit: "cover" }}
          src={src}
          alt="whatsup"
        />
      );
    }
    function Spec() {
      return (
        <Center>
          <div>
            <div>{name}</div>
            <div>{price}</div>
          </div>
        </Center>
      );
    }
  }
}

export default Gallery;

function Paginate() {
  return (
    <div className="flex">
      <Square page="1" />
      <Square page="2" />
      <Square page="3" />
      <Square page="4" />
    </div>
  );

  function Square({ page }) {
    const [isHover, setIssHover] = React.useState(false);
    return (
      <div
        className="pointer"
        style={{
          width: "35px",
          height: "35px",
          lineHeight: "35px",
          textAlign: "center",
          marginRight: "3px",
          borderRadius: "5px",
          border: `1px solid ${isHover ? "black" : "grey"}`,
        }}
        onMouseEnter={() => setIssHover(true)}
        onMouseLeave={() => setIssHover(false)}
      >
        {page}
      </div>
    );
  }
}
