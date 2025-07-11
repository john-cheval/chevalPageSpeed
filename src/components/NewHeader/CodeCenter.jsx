import Image from "next/image";
// import Link from "next/link";
import React from "react";
import CodeImage from "../../../public/Header/code.png";
import { ServiceList } from "./ServiceListN";
import { disableImageOptimization } from "@/util/constants";

const CodeCenter = ({ link, closeMegaMenu }) => {
  const {
    3813: code,
    3829: mobileapp,
    3830: webDdev,
    3828: ecommerce,
    3831: website,
  } = link;

  const sections = {
    "Mobile Apps": mobileapp,
    "Web Development": webDdev,
    "E-commerce": ecommerce,
    Website: website,
  };
  return (
    <>
      <div
        id="rightSideCode"
        className="col-span-7 bigMenuCol px-9 p-10 flex bigMain-gap-- gap-x-24-- bigMenu-bg"
      >
        {code?.map((section) => {
          const { title, url, attr_title } = section;
          const sectionData = sections[title];
          return (
            <div className="w-[33.33%]" key={title}>
              <ServiceList
                title={title}
                data={sectionData}
                attribute_title={attr_title}
                closeMegaMenu={closeMegaMenu}
                url={url}
              />
            </div>
          );
        })}
      </div>
      <div className="relative col-span-3 w-full h-full big_image">
        <Image
          src={CodeImage}
          alt="codeImage"
          className="object-cover w-full h-full"
          height={0}
          width={0}
          sizes="100vw"
          unoptimized={disableImageOptimization}
        />
      </div>
    </>
  );
};

export default CodeCenter;
