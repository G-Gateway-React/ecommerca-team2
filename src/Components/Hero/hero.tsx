import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import img1 from "../../Assets/mask.png";
import Button from "../Button";
import Nav from "../NavBar/Navbar";

export const HeroContainer = styled(Container)`
  background-image: url(${img1});
  height: 100vh;
  background-size: "cover";
  background-position: "center center";
  display: "flex";
  flex-direction: "column";
`;

export const HeroBox = styled(Box)`
  height: "100%";
  display: "flex";
  align-items: "center";
  justify-content: "start";
`;

export const BoxContent = styled(Box)`
  width: 35%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  margin-left: 25px;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-weight: 200;
  line-height: 30px;

  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 200;
  }

  span {
    color: #d1094b;
  }
  h1,
  br {
    font-size: 60px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    line-height: 80%;
    letter-spacing: 0.5px;
  }
`;

function Hero() {
  return (
    <HeroContainer maxWidth="xl">
      <Nav />
      <HeroBox>
        <BoxContent>
          <h1>
            <span>NEW</span>
            <br />
            COLLECTION
          </h1>

          <h3>
            Our Easiest Chuck-On-And-Go Staples Come With A Serious Style
            Heritage That’s Liberating, Sexy, Comfy And Supremely Cool.
          </h3>

          <Button>SHOP NEW ARRIVALS</Button>
        </BoxContent>
      </HeroBox>
    </HeroContainer>
  );
}

export default Hero;
