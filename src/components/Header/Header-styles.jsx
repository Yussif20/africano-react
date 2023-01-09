import styled from "@emotion/styled";
import HeroImage from "../../assets/imgs/header.jpg";
import theme from "../../config";

export const Hero = styled(`section`)`
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background: url(${HeroImage}) fixed;
  color: ${theme.white};
  background-color: #444;
  background-blend-mode: overlay;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  h3 {
    font-size: 1.6rem;
  }
  p {
    font-size: 2.6rem;
  }
  .hero__btn {
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 3rem;
  }
  .btn-see {
    background-color: transparent;
    color: ${theme.white};
    border: 1px solid ${theme.white};
    :hover {
      color: ${theme.primary};
      background-color: ${theme.white};
    }
  }
  .btn-reg {
    background-color: ${theme.primary};
    border: 1px solid ${theme.white};
    color: ${theme.white};
    :hover {
      color: ${theme.primary};
      background-color: ${theme.white};
    }
  }
  @media (max-width: 1024px) {
    padding: 0.5rem 1rem;
  }
`;
