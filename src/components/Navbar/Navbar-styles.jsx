import styled from "@emotion/styled";
import theme from "../../config";

export const NavContainer = styled(`section`)`
  position: absolute;
  width: 100%;
  text-align: center;
`;

export const Nav = styled(`header`)`
  margin: 0 auto;
  width: 1170px;
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 1.4rem;
  a {
    padding: 1rem 3rem;
    border-radius: 50px;
    color: inherit;
    transition: 0.5s;
    :hover {
      background-color: ${theme.primary};
    }
  }
  .nav-btn {
    background-color: ${theme.primary};
    padding: 5px;
    border: none;
    outline: none;
    font-size: 1.8rem;
    visibility: hidden;
    opacity: 0;
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
