import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Box } from "@mui/material";
import styled from "styled-components";
import Students from "../assets/students.svg";
import { LightPurpleButton } from "../components/buttonStyles";
import WLogo from "../assets/logo.png";
import Result from "../assets/result.jpg";
import principal from "../assets/principal.JPG";
import mdSir from "../assets/md sir 1.JPG";
import deanSir from "../assets/dean.jpg";

const Homepage = () => {
  return (
    <>
      <Header>
        <LogoContainer>
          <img src={WLogo} alt="Logo" className="my-logo" />
        </LogoContainer>
        <ButtonContainer>
          <StyledLink to="/About">
            <LightPurpleButton variant="contained" fullWidth>
              ABOUT
            </LightPurpleButton>
          </StyledLink>
          <StyledLink to="/Gallery">
            <LightPurpleButton variant="contained" fullWidth>
              GALLERY
            </LightPurpleButton>
          </StyledLink>
          <StyledLink to="/CONTACT US">
            <LightPurpleButton variant="contained" fullWidth>
              CONTACT
            </LightPurpleButton>
          </StyledLink>
        </ButtonContainer>
      </Header>

      <StyledContainer>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <ResponsiveImage src={Students} alt="students" />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <StyledTitle>WELCOME TO<br />HIET GROUP OF<br />INSTITUTIONS, SHAHPUR</StyledTitle>
              <StyledText>
                Streamline collage management, class organization, and add
                students and faculty. Seamlessly track attendance, assess
                performance, and provide feedback. Access records, view marks, and
                communicate effortlessly.
              </StyledText>
              <StyledBox>
                <StyledLink to="/choose">
                  <LightPurpleButton variant="contained" fullWidth>
                    Login
                  </LightPurpleButton>
                </StyledLink>
                <StyledText>
                  Don't have an account?{" "}
                  <Link to="/Adminregister" style={{ color: "#550080" }}>
                    Sign up
                  </Link>
                </StyledText>
              </StyledBox>
            </StyledPaper>
          </Grid>
        </Grid>
      </StyledContainer>

      <SectionTitle>Managing Authorities</SectionTitle>
      <StyledContainer>
        <Grid container spacing={4} justifyContent="center"> {/* Added spacing */}
          <Grid item xs={30} md={4}>
            <StyledPaper elevation={3}>
              <EqualSizeImage src={mdSir} alt="Managing Director" />
              <StyledTitle>Managing<br />Director:<br />Sh. Dushyant Kaistha</StyledTitle>
              <StyledText>
                "Under the visionary leadership of our Managing Director, Sh. Dushyant Kaistha..."
              </StyledText>
            </StyledPaper>
          </Grid>
          <Grid item xs={30} md={4}>
            <StyledPaper elevation={3}>
              <EqualSizeImage src={deanSir} alt="Dean" />
              <StyledTitle>Dean<br />Sh. Naresh Sharma</StyledTitle>
              <StyledText>
                "Sh. Naresh Sharma, our esteemed Dean, is a visionary leader..."
              </StyledText>
            </StyledPaper>
          </Grid>
          <Grid item xs={30} md={4}>
            <StyledPaper elevation={3}>
              <EqualSizeImage src={principal} alt="Principal" />
              <StyledTitle>Principal<br />Dr. Arjun Kumar</StyledTitle>
              <StyledText>
                "Dr. Arjun Kumar, our esteemed Principal, is a dedicated leader..."
              </StyledText>
            </StyledPaper>
          </Grid>
        </Grid>
      </StyledContainer>

      <SectionTitle>Recent</SectionTitle>
      <StyledContainer>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <ResponsiveImage src={Result} alt="Result" className="result" style={{placeItems:"center"}}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <StyledTitle>Result of<br />Computer Science Department<br />6th Semester</StyledTitle>
              <StyledText>
                "Congratulations on your impressive result as a Computer Science student..."
              </StyledText>
            </StyledPaper>
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
};

export default Homepage;

const Header = styled.div`
  display: flex;
  flex-direction: column; /* Changed to column direction */
  align-items: center; /* Centering items */
  padding: 15px;
`;

const LogoContainer = styled.div`
  margin-bottom: 20px; /* Adjusted margin for spacing */
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  padding: 15px;
  margin-bottom: 60px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto; /* Changed from fixed height */
`;

const StyledPaper = styled.div`
  padding: 24px;
  text-align: center; /* Center text for better alignment */
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 1.5rem; /* Adjusted font size for better responsiveness */
  color: #252525;
  font-weight: bold;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 1.25rem; /* Smaller font size for mobile */
  }
`;

const StyledText = styled.p`
  margin-top: 10px; /* Reduced margin for better spacing */
  margin-bottom: 10px;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ResponsiveImage = styled.img`
  width: 80%;
  height: auto; /* Ensures the height is automatic */
  border-radius: 15px; /* Optional for rounded corners */
`;


const EqualSizeImage = styled.img`
  width: 80%; /* Ensures equal width */
  height: 250px; /* Set a fixed height to ensure uniformity */
  
  border-radius: 15px; /* Optional for rounded corners */
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem; /* Adjusted for better responsiveness */
  margin: 50px 0;

  @media (max-width: 768px) {
    font-size: 2rem; /* Smaller font size for mobile */
  }
`;