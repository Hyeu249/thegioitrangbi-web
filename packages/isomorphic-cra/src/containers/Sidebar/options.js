import React from "react";
import { SidebarEcommerceIcon } from "@iso/config/icon.config";

const options = [
  {
    key: "library",
    label: "sidebar.library",
    leftIcon: <SidebarEcommerceIcon size={19} />,
    children: [
      {
        key: "image",
        label: "sidebar.image",
      },
      {
        key: "image-library",
        label: "sidebar.imageLibrary",
      },
    ],
  },
];
export default options;
