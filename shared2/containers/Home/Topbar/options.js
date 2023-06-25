import React from "react";
import { SidebarEcommerceIcon } from "@iso/config/icon.config";

const options = [
  {
    key: "all-clothes",
    label: "topbar.allClothes",
  },
  {
    key: "top",
    label: "topbar.top",
    children: [
      {
        key: "tshirt",
        label: "topbar.tshirt",
      },
      {
        key: "polo",
        label: "topbar.polo",
      },
      {
        key: "hoodie",
        label: "topbar.hoodie",
      },
    ],
  },
];
export default options;
