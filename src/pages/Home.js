import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  function mouseOver(e) {
    e.target.style = "background: #b088f9; color: white;";
  }
  function mouseLeave(e) {
    e.target.style =
      "background: #f7f7f7; border-color: #b088f9;  color: black";
  }
  return (
    <div id="home-container">
      <h2 id="home-title">헬스 능력 테스트</h2>
      <h3 id="home-subtitle">당신의 헬스 유형과 능력은 과연?</h3>
      <img
        id="home-main-image"
        alt="home main"
        src="https://lh3.googleusercontent.com/proxy/GbmqfxHQubDQNBABwdnIKKpRY-n0qlHRGwCjQfGSs2cM7dqcSd0-hiL3H4YcqQh98wdZRzoqDIY6VtKTHwhfXli6IrFiXoIr37KJ7xRC8r1vLfwyHfpA5OG8mu_WUx57Z5BXl9tp8g6hsB4aoH2Cgq2sidxYlT1CN-Mg34_SsZ642rsVCEHRqHtEejSIAZ4hoNabofb1vUv6NczjJ_IMFXvwVxCifQqu2Al-Rc62q4Re2fHnPVX2_nk7gj8EoUPKC9SgGZxfIGMvx51xsbf5uNy_2BajIbvG4dx8nQIVVrkyV_sSmDBmGAMxeoYkE_ha"
      />
      <Link
        to={"/hbti-test"}
        className="home-button"
        id="button1"
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
        onTouchStart={mouseOver}
        onTouchEnd={mouseLeave}
      >
        헬창력 알아보기
      </Link>
      <Link
        to={"/2"}
        className="home-button"
        id="button2"
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
        onTouchStart={mouseOver}
        onTouchEnd={mouseLeave}
      >
        헬BTI 알아보기
      </Link>
      <Link
        to={"/3"}
        className="home-button"
        id="button3"
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
      >
        헬궁합 연예인편
      </Link>
    </div>
  );
};

export default Home;
