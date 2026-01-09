import React from "react";

import Nav from "../../../Component/Nav/Nav";
import Footer from "../../../Component/Footer/Footer";
import Perjalanan from "./Perjalanan";
import Penampilan from "./Penampilan";
import Main from "./Main";

const SYC = () => {
  return (
    <div>
      <Nav />
      <Main />
      <Penampilan />
      <Perjalanan />
      <Footer />
    </div>
  );
};

export default SYC;
