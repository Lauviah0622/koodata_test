import React from "react";
import styled from "styled-components";

// Loader style from https://loading.io/css/
function Loader({ className }) {
  return (
    <div className={className}>
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default styled(Loader)`
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .loader div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: var(--color-white);
    animation: lds-facebook 0.9s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .loader div:nth-child(1) {
    left: 8px;
    animation-delay: -0.18s;
  }
  .loader div:nth-child(2) {
    left: 32px;
    animation-delay: -0.09s;
  }
  .loader div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
`;
