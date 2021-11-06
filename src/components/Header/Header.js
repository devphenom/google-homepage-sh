import React from "react";

// icons

// styles
import "./Header.scss";

const Header = () => {
  return <section>
  <div class="header">
      <div class="left">
      <nav>
          <ul>
              <li><div class="icon1"><a href="#"><i class="fa fa-bars"></i></a></div></li>
              <li><a  href="#" class="link">ALL</a></li>
              <li><a  href="#" class="link">IMAGES</a></li>
          </ul>
      </nav>
      </div>
      <div class="right">
          <div class="icon"><i class="fa fa-th"></i></div>
          <div class="image-div">
              <img class="image" src="../intern/image-irene.jpg">
          </div>
      </div>
  </div>
</section>;
};

export default Header;
