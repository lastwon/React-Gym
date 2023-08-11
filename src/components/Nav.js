import React, { useState } from "react";

import "../styles/nav.css";
import HamburgerMenu from "./HamburgerMenu";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav>
      <button onClick={handleOpenMenu} className="nav-menu">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <path
            d="M0 12h18v-2H0v2Zm0-5h18V5H0v2Zm0-7v2h18V0H0Z"
            fill="#2916BA"
          ></path>
        </svg>
      </button>
      {openMenu && (
        <HamburgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      )}
      <div className="logo">
        <svg viewBox="0 0 349 69" fill="none" width="262" height="52">
          <path
            d="M209.86 32.9197V50.4907C209.863 51.214 209.722 51.9307 209.447 52.5996C209.172 53.2686 208.768 53.8765 208.257 54.3886L195.422 67.2359C194.402 68.254 193.025 68.8335 191.584 68.8509H173.139C172.415 68.8515 171.698 68.7091 171.029 68.432C170.36 68.1549 169.753 67.7484 169.241 67.2359L156.37 54.4007C155.862 53.8848 155.462 53.2739 155.191 52.603C154.92 51.932 154.784 51.2142 154.791 50.4907V39.3555L161.725 41.2134V48.5842C161.725 49.4347 162.061 50.2507 162.66 50.855L172.787 60.9823C173.086 61.2797 173.44 61.5154 173.829 61.6758C174.219 61.8363 174.636 61.9183 175.058 61.9173H189.629C190.479 61.9141 191.294 61.5785 191.9 60.9823L202.015 50.855C202.315 50.5579 202.554 50.2042 202.716 49.8145C202.879 49.4247 202.963 49.0065 202.962 48.5842V38.2384L165.052 28.0747V20.3031L175.119 10.2366H189.593L199.66 20.3031V26.7511L192.726 24.9053V23.181L186.727 17.1702H177.996L172.313 22.8532L209.86 32.9197ZM186.727 51.705H177.996L171.961 45.6335V43.9577L165.028 42.0999V48.5478L175.094 58.6144H189.569L199.635 48.5478V40.7763L161.725 30.6126V20.2667C161.728 19.4167 162.064 18.6017 162.66 17.996L172.787 7.88082C173.083 7.57955 173.437 7.34056 173.827 7.1779C174.217 7.01525 174.635 6.93221 175.058 6.93367H189.629C190.052 6.93423 190.47 7.01819 190.859 7.18073C191.249 7.34327 191.603 7.58119 191.9 7.88082L202.015 17.996C202.315 18.2934 202.553 18.6472 202.715 19.0368C202.878 19.4265 202.962 19.8445 202.962 20.2667V27.6375L209.884 29.4954V18.3481C209.887 16.8878 209.311 15.4859 208.281 14.4502L195.422 1.61502C194.402 0.596946 193.025 0.0174191 191.584 1.751e-06H173.139C172.415 -0.000575928 171.698 0.14179 171.029 0.418933C170.36 0.696076 169.753 1.10254 169.241 1.61502L156.37 14.4502C155.337 15.4847 154.756 16.8863 154.755 18.3481V35.9191L192.398 45.9856L186.727 51.705ZM318.285 39.562L322.729 46.6778H318.358L314.302 40.2177C312.881 37.9591 312.347 37.4369 310.38 37.4369H305.62V46.6778H301.758V21.6631H312.808C318.88 21.6631 321.903 24.2618 321.903 29.374C321.903 33.5026 320.058 36.0041 316.269 37.0119C317.079 37.7427 317.761 38.6048 318.285 39.562ZM305.62 33.9883H312.335C316.196 33.9883 317.933 33.3447 317.933 29.544C317.933 26.1196 316.621 25.0632 312.335 25.0632H305.62V33.9883ZM239.634 32.2761H234.777C232.154 32.2761 230.928 31.0618 230.928 28.5604C230.928 26.0589 232.142 24.8325 235.093 24.8325H239.44C242.027 24.8325 243.241 25.6946 243.508 27.7104V27.9411H247.382V27.6497C247.029 23.8975 244.407 21.6874 240.011 21.4324H235.421C230.078 21.4324 227.127 23.9703 227.127 28.5847C227.127 33.199 229.92 35.7248 234.789 35.7248H239.732C242.354 35.7248 243.581 36.9391 243.581 39.6955C243.615 40.2432 243.528 40.7917 243.327 41.3022C243.126 41.8128 242.815 42.273 242.417 42.6504C242.018 43.0279 241.542 43.3134 241.022 43.4868C240.501 43.6602 239.949 43.7174 239.404 43.6542H235.154C233.502 43.6542 231.511 43.1442 231.086 40.7277V40.497H227.176V40.7884C227.552 44.5163 230.199 46.7871 234.461 47.0542H239.246C244.37 47.0542 247.43 44.2856 247.43 39.6712C247.43 35.0569 244.564 32.2761 239.634 32.2761ZM341.186 32.2761H336.329C333.658 32.2761 332.443 31.0618 332.443 28.4997C332.443 25.9375 333.658 24.7718 336.608 24.7718H340.944C343.53 24.7718 344.744 25.6339 345.011 27.6497V27.8804H348.885V27.5889C348.533 23.8368 345.91 21.6267 341.514 21.3717H336.936C331.581 21.3717 328.631 23.9096 328.631 28.524C328.631 33.1383 331.423 35.6641 336.293 35.6641H341.235C343.858 35.6641 345.084 36.8784 345.084 39.6348C345.114 40.1771 345.025 40.7193 344.824 41.224C344.624 41.7287 344.316 42.1838 343.922 42.5579C343.528 42.9319 343.058 43.2161 342.544 43.3907C342.03 43.5653 341.484 43.6262 340.944 43.5692H336.681C335.03 43.5692 333.038 43.0592 332.613 40.6427V40.412H328.716V40.7034C329.092 44.4313 331.739 46.7021 336.001 46.9692H340.786C345.91 46.9692 348.97 44.2006 348.97 39.5863C348.97 34.9719 346.117 32.2761 341.186 32.2761ZM285.887 21.8332L295.504 46.6778H291.4L288.85 39.987H278.735L276.063 46.6778H272.081L282.123 21.6631H285.826L285.887 21.8332ZM285.486 31.1347C284.843 29.4104 284.272 27.3947 283.896 26.2775C283.556 27.3947 282.924 29.4104 282.22 31.1347L280.022 36.7569H287.624L285.486 31.1347ZM251.559 25.0632H259.415V46.6778H263.289V25.0875H271.146V21.6631H251.559V25.0632ZM12.7785 32.2761H7.92127C5.29838 32.2761 4.07194 31.0618 4.07194 28.5604C4.07194 26.0589 5.28624 24.8325 8.24913 24.8325H12.5842C15.1707 24.8325 16.3971 25.6946 16.6521 27.7104V27.9411H20.5136V27.6497C20.1493 23.8975 17.5264 21.6874 13.1306 21.4324H8.55271C3.19764 21.4324 0.246885 23.9703 0.246885 28.5847C0.246885 33.199 3.03978 35.7248 7.90913 35.7248H12.8513C15.4742 35.7248 16.7007 36.9391 16.7007 39.6955C16.7342 40.2421 16.6478 40.7894 16.4473 41.2989C16.2469 41.8085 15.9374 42.268 15.5405 42.6453C15.1436 43.0225 14.6689 43.3083 14.1498 43.4826C13.6307 43.6569 13.0798 43.7154 12.5356 43.6542H8.22485C6.5734 43.6542 4.58194 43.1442 4.16908 40.7277V40.497H0.234741V40.7884C0.611175 44.5163 3.2705 46.7871 7.52055 47.0542H12.3049C17.4293 47.0542 20.4893 44.2856 20.4893 39.6712C20.4893 35.0569 17.6964 32.2761 12.7785 32.2761ZM100.597 46.7385H104.458V25.0875H112.327V21.6631H92.7281V25.0875H100.597V46.7385ZM57.6591 21.6631H53.7247V46.6778H57.6591V21.6631ZM70.725 27.1761C71.1135 27.9168 71.7085 28.9975 72.3886 30.1025L82.6616 46.5563L82.7466 46.6778H86.8509V21.6631H83.208V41.007C82.8194 40.2784 82.2608 39.2341 81.7023 38.3112L71.3686 21.7846L71.2957 21.6631H67.0578V46.6778H70.7007L70.725 27.1761ZM137.584 39.562C137.584 34.8626 134.755 32.1669 129.837 32.1669H124.98C122.345 32.1669 121.118 30.9526 121.118 28.4511C121.118 25.9496 122.333 24.7232 125.296 24.7232H129.655C132.254 24.7232 133.468 25.5853 133.723 27.6011V27.8318H137.584V27.5404C137.22 23.7882 134.609 21.5781 130.201 21.3231H125.624C120.268 21.3231 117.318 23.861 117.318 28.4754C117.318 33.0897 120.111 35.6155 124.992 35.6155H129.922C132.557 35.6155 133.772 36.8298 133.772 39.5863C133.805 40.1328 133.719 40.6801 133.518 41.1896C133.318 41.6992 133.008 42.1588 132.611 42.536C132.214 42.9132 131.74 43.199 131.221 43.3733C130.702 43.5476 130.151 43.6062 129.606 43.5449H125.344C123.693 43.5449 121.701 43.0349 121.289 40.6184V40.3877H117.378V40.6791C117.755 44.407 120.414 46.6778 124.664 46.9449H129.449C134.512 46.9935 137.584 44.2249 137.584 39.562ZM37.8538 21.8332L47.4711 46.6778H43.3667L40.8167 39.987H30.7016L28.0301 46.6778H24.0108L34.0531 21.6631H37.7567L37.8538 21.8332ZM37.441 31.1347C36.7974 29.4104 36.2267 27.3947 35.8624 26.2775C35.5224 27.3947 34.8909 29.4104 34.1866 31.1347L31.9766 36.7569H39.5781L37.441 31.1347Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
      <div className="log-in">
        <svg width="24" height="24" fill="rgb(41, 22, 186)" viewBox="0 0 16 16">
          <path d="M7.99992 1.33334C4.31992 1.33334 1.33325 4.32001 1.33325 8.00001C1.33325 11.68 4.31992 14.6667 7.99992 14.6667C11.6799 14.6667 14.6666 11.68 14.6666 8.00001C14.6666 4.32001 11.6799 1.33334 7.99992 1.33334ZM7.99992 3.33334C9.10659 3.33334 9.99992 4.22668 9.99992 5.33334C9.99992 6.44001 9.10659 7.33334 7.99992 7.33334C6.89325 7.33334 5.99992 6.44001 5.99992 5.33334C5.99992 4.22668 6.89325 3.33334 7.99992 3.33334ZM7.99992 12.8C6.33325 12.8 4.85992 11.9467 3.99992 10.6533C4.01992 9.32668 6.66659 8.60001 7.99992 8.60001C9.32659 8.60001 11.9799 9.32668 11.9999 10.6533C11.1399 11.9467 9.66659 12.8 7.99992 12.8Z"></path>
        </svg>
        <p>Log in</p>
        <p>Start today</p>
      </div>
    </nav>
  );
};

export default Nav;
