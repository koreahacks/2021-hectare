import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div id="home-container">
      <img
        id="home-main-image"
        alt="home main"
        src="https://lh3.googleusercontent.com/proxy/GbmqfxHQubDQNBABwdnIKKpRY-n0qlHRGwCjQfGSs2cM7dqcSd0-hiL3H4YcqQh98wdZRzoqDIY6VtKTHwhfXli6IrFiXoIr37KJ7xRC8r1vLfwyHfpA5OG8mu_WUx57Z5BXl9tp8g6hsB4aoH2Cgq2sidxYlT1CN-Mg34_SsZ642rsVCEHRqHtEejSIAZ4hoNabofb1vUv6NczjJ_IMFXvwVxCifQqu2Al-Rc62q4Re2fHnPVX2_nk7gj8EoUPKC9SgGZxfIGMvx51xsbf5uNy_2BajIbvG4dx8nQIVVrkyV_sSmDBmGAMxeoYkE_ha"
      />
      <Link to={"/hbti-test"} className="home-button" id="button1">
        <span>버튼1</span>
      </Link>
      <Link to={"/2"} className="home-button" id="button2">
        <span>버튼2</span>
      </Link>
      <Link to={"/3"} className="home-button" id="button3">
        <span>버튼3</span>
      </Link>
    </div>
  );
};

export default Home;
