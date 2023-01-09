import styled from "@emotion/styled";

export const Nav = styled(`header`)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8rem;
  height: 80px;
  background-color: red;
  color: white;
  font-size: 1.4rem;
  a {
    margin: 0 2rem;
    color: inherit;
  }
  .nav-btn {
    padding: 5px;
    border: none;
    outline: none;
    visibility: hidden;
    opacity: 0;
    font-size: 1.8rem;
  }
  @media (max-width: 1024px) {
    .nav-btn {
      visibility: visible;
      opacity: 1;
    }
    nav {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      transition: 1s;
      transform: translateY(-100vh);
      background-color: red;
    }
    .responsive_nav {
      transform: none;
    }
    .nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
    a {
      font-size: 1.5rem;
    }
  }
`;
