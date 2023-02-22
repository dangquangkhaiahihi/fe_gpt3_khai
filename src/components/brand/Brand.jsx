import React from "react";
import "./brand.css";
import * as importedImage from "./import";

const Brand = () => {
  return (
    <div className="gtp3__brand section__padding">
      <div>
        <img src={importedImage.google} alt="google" />
      </div>
      <div>
        <img src={importedImage.slack} alt="slack" />
      </div>
      <div>
        <img src={importedImage.atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={importedImage.dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={importedImage.shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
