import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import decore from "../../Assets/images/Decore.png";
import travel from "../../Assets/images/Traveller 1.png";
import aeroplane from "../../Assets/images/Group.png";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import group1 from "../../Assets/images/Group 48.png";
import group2 from "../../Assets/images/Group 49.png";
import group3 from "../../Assets/images/Group 50.png";
import destination1 from "../../Assets/images/Rectangle 14.jpg";
import destination2 from "../../Assets/images/Rectangle 14 (1).png";
import destination3 from "../../Assets/images/Rectangle 14.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import trip from "../../Assets/images/Rectangle 17.jpg";
import PoolIcon from "@mui/icons-material/Pool";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import CropIcon from "@mui/icons-material/Crop";
import DomainIcon from "@mui/icons-material/Domain";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WidgetsIcon from "@mui/icons-material/Widgets";
import triptorome from "../../Assets/images/image 32.png";
import tag1 from "../../Assets/images/image 27.png";
import tag2 from "../../Assets/images/image 28.png";
import tag3 from "../../Assets/images/image 29.png";
import tag4 from "../../Assets/images/image 30.png";
import tag5 from "../../Assets/images/image 31.png";
import EmailIcon from "@mui/icons-material/Email";
import contact from '../../Assets/images/Group 42.png'
const Home = () => {
  // make array of object for service part
  const serviceCard = [
    {
      img: group1,
      title: "Calculated Weather ",
      content: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      img: aeroplane,
      title: " Best Flights ",
      content: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      img: group3,
      title: "Local Events",
      content:
        "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
    },
    {
      img: group2,
      title: "Customization",
      content: "We deliver outsourced aviation services for military ",
    },
  ];

  // Destination card

  const destinationCard = [
    {
      img: destination1,
      location: "Rome,Italy",
      Rate: "$5.5k",
      trip: "10 days trip",
      icon: <TelegramIcon />,
    },
    {
      img: destination2,
      location: "London,Uk",
      Rate: "$4.5k",
      trip: "12 days trip",
      icon: <TelegramIcon />,
    },
    {
      img: destination3,
      location: "Full Europe",
      Rate: "$15k",
      trip: "28 days trip",
      icon: <TelegramIcon />,
    },
  ];

  // trip list part

  const listpart = [
    {
      icon: <CropIcon />,
      title: "Choose Destination",
      content: "Lorem ipsum dolor sit amet, consectetur .",
    },
    {
      icon: <DirectionsCarFilledIcon />,
      title: "Make Payment",
      content: "Lorem ipsum dolor sit amet, consectetur ",
    },
    {
      icon: <PoolIcon />,
      title: "Reach Airport on Selected Date",
      content: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];

  // tag part

  const Tagpart = [
    { img: tag1 },
    { img: tag2 },
    { img: tag3 },
    { img: tag4 },
    { img: tag5 },
  ];

  return (
    <>
      <Box sx={{ position: "relative" }}>
        {/* Decorative part - No changes, not animated */}
        <Box>
          <img
            src={decore}
            alt="decore"
            style={{
              position: "absolute",
              right: "0",
              top: "-114px",
              height: "736px",
              zIndex: "-999",
              width: "100%",
            }}
          />
        </Box>

        {/* Main content wrapped in motion */}
        <Container maxWidth="lg">
          <Grid container>
            <Grid md={5}>
              <Box sx={{ padding: "110px 0px" }}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "Poppins",
                      textTransform: "uppercase",
                      fontWeight: "Bold",
                      color: "#DF6951",
                      paddingBottom: "30px",
                    }}
                  >
                    Best Destinations around the world
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "60px",
                      fontFamily: "Volkhov",
                      fontWeight: "Bold",
                      color: "#181E4B",
                      paddingBottom: "35px",
                      letterSpacing: "0px",
                      lineHeight: "60px",
                    }}
                  >
                    Travel, enjoy and live a new and full life
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Poppins",
                      fontWeight: "Medium",
                      color: "#5E6282",
                      paddingBottom: "16px",
                      lineHeight: "30px",
                    }}
                  >
                    Built Wicket longer admire do barton vanity itself do in it.
                    Preferred to sportsmen it engrossed listening. Park gate
                    sell they west hard for the.
                  </Typography>
                </motion.div>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    paddingTop: "30px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F1A501",
                      color: "#fff",
                      textTransform: "none",
                      fontFamily: "Poppins",
                      padding: "12px 30px",
                      borderRadius: "10px",
                      boxShadow: "none",
                      marginRight: "15px",
                    }}
                  >
                    Find out more
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#fff",
                      color: "#686D77",
                      textTransform: "capitalize",
                      fontFamily: "Poppins",
                      padding: "12px 30px",
                      borderRadius: "10px",
                      boxShadow: "none",
                    }}
                  >
                    <PlayCircleIcon
                      sx={{
                        marginRight: "15px",
                        fontSize: "30px",
                        color: "#DF6951",
                        boxShadow: "none",
                      }}
                    />
                    Play demo
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid
              md={7}
              sx={{
                position: "relative",
                zIndex: "999",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img src={travel} alt="travel" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                sx={{}}
              >
                <img
                  src={aeroplane}
                  alt="aeroplane"
                  style={{ position: "absolute", top: "55px", left: "115px" }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* end banner section */}

        {/* start service part */}

        <Box sx={{ padding: "60px 0px" }}>
          <Container>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "18px",
                color: "#5E6282",
                paddingBottom: "10px",
              }}
            >
              CATEGORY
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Volkhov",
                fontWeight: "Bold",
                fontSize: "50px",
                color: "#14183E",
                paddingBottom: "50px",
              }}
            >
              We Offer Best Services
            </Typography>
            <Grid container>
              {serviceCard.map((item) => {
                return (
                  <>
                    <Grid md={3}>
                      <Card sx={{ maxWidth: 245, boxShadow: "none!important" }}>
                        <CardMedia
                          sx={{
                            height: 50,
                            width: "50px",
                            margin: "auto",
                            marginBottom: "15px",
                          }}
                          image={item.img}
                          title="green iguana"
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                              textAlign: "center",
                              fontWeight: "SemiBold",
                              fontFamily: "Open Sans",
                              color: "#1E1D4C",
                              fontSize: "20px",
                              paddingBottom: "10px",
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#5E6282",
                              textAlign: "center",
                              fontSize: "16px",
                              fontWeight: "Medium",
                              lineHeight: "26px",
                              fontFamily: "Open Sans",
                              fontFamily: "Poppins",
                              maxWidth: "180px",
                              margin: "auto",
                            }}
                          >
                            {item.content}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Container>
        </Box>
        {/* end service part */}

        {/* start Destinations part */}

        <Box sx={{ padding: "60px 0px" }}>
          <Container>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "18px",
                color: "#5E6282",
                paddingBottom: "10px",
              }}
            >
              Top Selling
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Volkhov",
                fontWeight: "Bold",
                fontSize: "50px",
                color: "#14183E",
                paddingBottom: "50px",
              }}
            >
              Top Destinations
            </Typography>
            <Grid container>
              {destinationCard.map((item) => {
                return (
                  <>
                    <Grid md={4}>
                      <Card
                        sx={{
                          minWidth: "300px",
                          borderRadius: "20px",
                          overflow: "hidden",
                          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                          backgroundColor: "#fff",
                          position: "relative",
                          maxWidth: "300px",
                        }}
                      >
                        {/* Image Section */}
                        <Box
                          sx={{
                            minWidth: "10%", // Ensures the Box spans the full width of the card
                            height: "210px", // Adjust height as needed
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={item.img} // Your image URL or dynamic source
                            alt="Destination"
                            style={{
                              width: "100%", // Ensures the image spans the full width
                              objectFit: "cover",
                              backgroundPosition: "Top",
                              backgroundSize: "cover",
                            }}
                          />
                        </Box>

                        {/* Content Section */}
                        <Box
                          sx={{
                            padding: "30px 16px",
                          }}
                        >
                          {/* Destination and Price */}
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: "15px",
                              fontFamily: "Poppins",
                            }}
                          >
                            <Typography
                              variant="h6"
                              sx={{
                                fontSize: "18px",
                                fontWeight: "Medium",
                                color: "#5E6282",
                                fontFamily: "Poppins",
                              }}
                            >
                              {item.location}
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{
                                fontSize: "0.9rem",
                                fontWeight: "Medium",
                                color: "#5E6282", // Highlighted price color
                              }}
                            >
                              {item.Rate}
                            </Typography>
                          </Box>

                          {/* Trip Duration */}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              color: "#757575", // Subtle gray text
                              fontFamily: "Poppins",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                marginRight: "8px",
                                color: "#000",
                              }}
                            >
                              {item.icon}
                            </Box>
                            <Typography sx={{ color: "#5E6282" }}>
                              {item.trip}
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Container>
        </Box>
        {/* end destination part */}

        {/* start Trip steps */}

        <Box sx={{ padding: "80px 0px" }}>
          <Container>
            <Grid container>
              <Grid md={6}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "18px",
                      color: "#5E6282",
                      fontWeight: "SemiBold",
                      paddingBottom: "10px",
                    }}
                  >
                    Easy and Fast
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Volkhov",
                      fontSize: "50px",
                      color: "#14183E",
                      fontWeight: "Bold",
                      paddingBottom: "20px",
                      lineHeight: "auto",
                      textTransform: "capitalize",
                    }}
                  >
                    Book your next trip <br /> in 3 easy steps
                  </Typography>
                  {listpart.map((item) => {
                    return (
                      <>
                        <Box sx={{ padding: "20px 0px", display: "flex" }}>
                          <Box
                            sx={{
                              padding: "10px",
                              marginRight: "20px",
                              backgroundColor: "#FFA90F",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: "12px",
                              color: "#fff",
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "16px",
                                fontWeight: "Bold",
                                fontFamily: "Poppins",
                                color: "#5E6282",
                                paddingBottom: "px",
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "16px",
                                fontFamily: "Poppins",
                                color: "#5E6282",
                              }}
                            >
                              {item.content}
                            </Typography>
                          </Box>
                        </Box>
                      </>
                    );
                  })}
                </Box>
              </Grid>
              <Grid md={6}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "80px",
                  }}
                >
                  <Box
                    sx={{
                      width: "340px",
                      height: "140px",
                      borderRadius: "50%",
                      border: "1px solid red",
                      backgroundColor: "#59B1E6",
                      filter: "blur(70px)",
                      opacity: "80%",
                      position: "absolute",
                      right: "10%",
                      top: "10%",
                      zIndex: "-99",
                    }}
                  ></Box>
                  <Card
                    sx={{
                      minWidth: 325,
                      padding: "15px 20px",
                      borderRadius: "18px",
                      boxShadow: "0px 4px 10px #84829A",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 140 }}
                      image={trip}
                      title="green iguana"
                    />
                    <CardContent sx={{ padding: "10px 0px" }}>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontFamily: "Poppins",
                          fontWeight: "Medium",
                          paddingBottom: "8px",
                        }}
                      >
                        Trip To Greece
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "16px",
                          fontFamily: "Poppins",
                          fontWeight: "Medium",
                          paddingBottom: "15px",
                          color: "#84829A",
                        }}
                      >
                        14-29 June | by Robbin joseph
                      </Typography>
                      <ul
                        style={{
                          margin: "0px",
                          padding: "0px",
                          display: "flex",
                          paddingBottom: "20px",
                        }}
                      >
                        <li
                          style={{
                            listStyle: "none",
                            marginRight: "13px",
                            backgroundColor: "#F5F5F5",
                            padding: "9px 9px",
                            borderRadius: "50%",
                            color: "#84829A",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <TelegramIcon />
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            marginRight: "13px",
                            backgroundColor: "#F5F5F5",
                            padding: "9px 9px",
                            borderRadius: "50%",
                            color: "#84829A",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <WidgetsIcon />
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            marginRight: "13px",
                            backgroundColor: "#F5F5F5",
                            padding: "9px 9px",
                            borderRadius: "50%",
                            color: "#84829A",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <TelegramIcon />
                        </li>
                      </ul>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#84829A",
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            fontWeight: "Medium",
                            letterSpacing: "-2%",
                          }}
                        >
                          <DomainIcon
                            sx={{
                              color: "#84829A",
                              marginRight: "10px",
                              width: "16px",
                              height: "16px",
                            }}
                          />
                          24 people going
                        </Typography>
                        <FavoriteBorderIcon sx={{ color: "#4152CA" }} />
                      </Box>
                    </CardContent>
                  </Card>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "60%",
                      width: "300px",
                      height: "117px",
                      left: "60%",
                    }}
                  >
                    <Card
                      sx={{
                        height: "100%",
                        padding: "15px 20px",
                        borderRadius: "20px",
                        boxShadow: "0px 2px 4px #84829A",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        paddingBottom: "20px",
                      }}
                    >
                      <CardMedia
                        sx={{ overflow: "hidden", marginRight: "15px" }}
                      >
                        <img
                          src={triptorome}
                          alt=""
                          style={{ borderRadius: "50%" }}
                        />
                      </CardMedia>
                      <CardContent sx={{ padding: "0px" }}>
                        <Typography
                          sx={{
                            color: "#84829A",
                            fontWeight: "Medium",
                            fontSize: "14px",
                            fontFamily: "Poppins",
                            paddingBottom: "2px",
                          }}
                        >
                          Ongoing
                        </Typography>
                        <Typography
                          sx={{
                            color: "#080809",
                            fontWeight: "Medium",
                            fontSize: "18px",
                            fontFamily: "Poppins",
                            paddingBottom: "5px",
                            letterSpacing: "1.5%",
                          }}
                        >
                          Trip to rome
                        </Typography>
                        <Typography
                          sx={{
                            color: "#080809",
                            fontWeight: "Medium",
                            fontSize: "14px",
                            fontFamily: "Poppins",
                            paddingBottom: "0px",
                            letterSpacing: "1.5%",
                          }}
                        >
                          <span style={{ color: "" }}>40%</span>completed
                        </Typography>
                        <progress
                          id="file"
                          value="40"
                          max="100"
                          style={{ color: "#8A79DF" }}
                        >
                          {" "}
                          32%{" "}
                        </progress>
                      </CardContent>
                    </Card>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* end trip part */}
        {/* start tagline part  */}
        <Box sx={{ padding: "60px 0px" }}>
          <Container>
            <Grid container>
              {Tagpart.map((item) => {
                return (
                  <>
                    <Grid md={2.3} spacing={2}>
                      <Card
                        sx={{
                          margin: "10px",
                          width: "172px",
                          height: "110px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          boxShadow: "none",
                        }}
                      >
                        <img
                          src={item.img}
                          alt=""
                          style={{ filter: "grayscale(100%)" }}
                        />
                      </Card>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Container>
        </Box>
        {/* end tagline part  */}

        {/* start contact part  */}
        <Box sx={{ padding: "40px 0px",paddingBottom:"80px" }}>
          <Container>
            <Grid container>
              <Grid md={12}>
                <Box
                  sx={{
                    padding: "70px 100px",
                    backgroundColor: "rgba(223, 215, 249, 0.3)", // Semi-transparent background
                    borderRadius: "129px 20px 20px 20px",
                    border: "0px solid #6246E5",
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "33px",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      color: "#5E6282",
                      letterSpacing: "0",
                      textAlign: "center",
                      lineHeight: "54px",
                      paddingBottom: "80px",
                    }}
                  >
                    Subscribe to get information, latest news and other
                    interesting offers about Jadoo
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                      sx={{
                        marginRight: "15px",
                        width: "40%",
                        backgroundColor: "#fff",
                        "& .MuiOutlinedInput-root": {
                          border: "none", // Removes the border
                        },
                      }}
                      placeholder="Enter your email"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        background:
                          "linear-gradient(to right, #FF946D, #FF7D68)",
                        padding: "0px 35px",
                        borderRadius: "15px",
                        boxShadow: "none",
                        "&hover": {
                          boxShadow: "none",
                        },
                        textTransform: "capitalize",
                        fontSize: "17",
                        fontFamily: "open Sans",
                      }}
                    >
                      Subscribe
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-15px",
                      right: "-20px",
                      width: "70px",
                      height: "70px",
                      background:"linear-gradient(to bottom,#747DEF,#5E3BE1)",
                      borderRadius:"50%",
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center",
                      color:"#fff"

                    }}
                  >
                    <TelegramIcon sx={{fontSize:"40px"}} />
                  </Box>
                  <Box sx={{position:"absolute",top:"0",right:"0",opacity:"0.1"}}>
                    <img src={contact} alt="" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* end contact part  */}
      </Box>
    </>
  );
};

export default Home;
