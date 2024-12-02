import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import playstore from "../../Assets/images/Google Play.png";
const Footer = () => {
  return (
    <>
      <Box sx={{ paddingBottom: "50px", paddingTop: "20px" }}>
        <Container>
          <Grid
            container
            sx={{
              padding: "0px 40px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            spacing={3}
          >
            <Grid md={2.4}>
              <Typography
                sx={{
                  fontSize: "44px",
                  fontFamily: "Poppins",
                  fontWeight: "Medium",
                  color: "#181E4B",
                  paddingBottom: "0px",
                }}
              >
                Jadoo.
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontFamily: "Poppins",
                  fontWeight: "Medium",
                  color: "#5E6282",
                  paddingBottom: "20px",
                }}
              >
                Book your trip in minute, get full <br />
                Control for much longer.
              </Typography>
            </Grid>
            <Grid md={2.4} sx={{ paddingLeft: "50px" }}>
              <Typography
                sx={{
                  fontSize: "21px",
                  fontFamily: "Poppins",
                  fontWeight: "Bold",
                  color: "#181E4B",
                  paddingTop: "55px",
                }}
              >
                Company
              </Typography>
              <ul style={{ margin: "0px", padding: "0px" }}>
                <li
                  style={{
                    listStyle: "none",
                    padding: "5px 0px",
                    fontFamily: "Poppins",
                    color: "#5E6282",
                    fontWeight: "Medium",
                  }}
                >
                  <a
                    href=""
                    style={{
                      color: "#5E6282",
                      textDecoration: "none",
                      fontWeight: "Medium",
                    }}
                  >
                    About
                  </a>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    padding: "5px 0px",
                    fontFamily: "Poppins",
                    color: "#5E6282",
                    fontWeight: "Medium",
                  }}
                >
                  <a
                    href=""
                    style={{
                      color: "#5E6282",
                      textDecoration: "none",
                      fontWeight: "Medium",
                    }}
                  >
                    Careers
                  </a>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    padding: "5px 0px",
                    fontFamily: "Poppins",
                    color: "#5E6282",
                    fontWeight: "Medium",
                  }}
                >
                  <a
                    href=""
                    style={{
                      color: "#5E6282",
                      textDecoration: "none",
                      fontWeight: "Medium",
                    }}
                  >
                    Mobile
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid md={2.4} sx={{ paddingLeft: "30px" }}>
              <Typography
                sx={{
                  fontSize: "21px",
                  fontFamily: "Poppins",
                  fontWeight: "Bold",
                  color: "#181E4B",
                  paddingTop: "55px",
                }}
              >
                Contact
              </Typography>
              <ul style={{ margin: "0px", padding: "0px" }}>
                <li
                  style={{
                    listStyle: "none",
                    padding: "5px 0px",
                    fontFamily: "Poppins",
                    color: "#5E6282",
                    fontWeight: "Medium",
                  }}
                >
                  <a
                    href=""
                    style={{
                      color: "#5E6282",
                      textDecoration: "none",
                      fontWeight: "Medium",
                    }}
                  >
                    Help/FAQ
                  </a>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    padding: "5px 0px",
                    fontFamily: "Poppins",
                    color: "#5E6282",
                    fontWeight: "Medium",
                  }}
                >
                  <a
                    href=""
                    style={{
                      color: "#5E6282",
                      textDecoration: "none",
                      fontWeight: "Medium",
                    }}
                  >
                    Press
                  </a>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    padding: "5px 0px",
                    fontFamily: "Poppins",
                    color: "#5E6282",
                    fontWeight: "Medium",
                  }}
                >
                  <a
                    href=""
                    style={{
                      color: "#5E6282",
                      textDecoration: "none",
                      fontWeight: "Medium",
                    }}
                  >
                    Affilates
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid md={2.4}>
              <Typography
                sx={{
                  fontSize: "21px",
                  fontFamily: "Poppins",
                  fontWeight: "Bold",
                  color: "#181E4B",
                  paddingTop: "55px",
                }}
              >
                More
              </Typography>
              <ul style={{ margin: "0px", padding: "0px" }}>
                <li
                  style={{
                    listStyle: "none",
                    padding: "5px 0px",
                    fontFamily: "Poppins",
                    color: "#5E6282",
                    fontWeight: "Medium",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      color: "#5E6282",
                      textDecoration: "none",
                      fontWeight: "Medium",
                    }}
                  >
                    Airlinefees
                  </a>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    padding: "5px 0px",
                    fontFamily: "Poppins",
                    color: "#5E6282",
                    fontWeight: "Medium",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      color: "#5E6282",
                      textDecoration: "none",
                      fontWeight: "Medium",
                    }}
                  >
                    Airline
                  </a>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    padding: "5px 0px",
                    fontFamily: "Poppins",
                    color: "#5E6282",
                    fontWeight: "Medium",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      color: "#5E6282",
                      textDecoration: "none",
                      fontWeight: "Medium",
                    }}
                  >
                    Low Fare Tip
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid md={2.4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  paddingTop: "60px",
                  paddingBottom: "15px",
                }}
              >
                <Box
                  sx={{
                    width: "41px",
                    height: "41px",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    marginRight: "10px",
                    background:
                      "conic-gradient(from 45deg, #F289AA, #C68BF0, #D164DA, #C963E8)",
                    color: "#fff",
                  }}
                >
                  <InstagramIcon />
                </Box>
                <Box
                  sx={{
                    width: "41px",
                    height: "41px",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    marginRight: "10px",
                  }}
                >
                  <AccessibilityIcon />
                </Box>
                <Box
                  sx={{
                    width: "41px",
                    height: "41px",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    marginRight: "10px",
                  }}
                >
                  <TwitterIcon />
                </Box>
              </Box>
              <Typography
                sx={{
                  paddingBottom: "10px",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "Medium",
                  color: "#5E6282",
                }}
              >
                Discover Our App
              </Typography>
              <Box>
                <img src={playstore} alt="" />
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid md={12}>
              <Typography
                sx={{
                  paddingTop: "40px",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "Medium",
                  fontFamily: "Poppins",
                  color:"#5E6282"
                }}
              >
                All rights reserved@Jadoo.com
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
