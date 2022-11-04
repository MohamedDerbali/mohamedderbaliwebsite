import { useRive, Layout, Fit, Alignment } from "rive-react";
import {
  AppBar,
  Grid,
  Box,
  IconButton,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RiveAni from "./rivetober_03.riv";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import web from "./services/web.svg";
import scrap from "./services/data-collection.svg";
import db from "./services/database-system.svg";
import mobile from "./services/mobile-weather-application.svg";
import desktop from "./services/desktop-banking.svg";
import deploy from "./services/server.svg";
import server from "./services/server-resource-scaling.svg";
import { Link } from "react-scroll";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
function App() {
  const [detectPageScroll, setDetectPageScroll] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const params = {
    src: RiveAni,
    animations: ["FaceAnim", "Wings", "Example", "Float"],
    layout: new Layout({
      fit: Fit.Fill,
      alignment: Alignment.TopCenter,
    }),
    autoplay: true,
  };
  const defaults = [true, true, true, true, true];
  const [questions, setQuestions] = useState(defaults);
  const [mailProperties, setMailProperties] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    phone: "",
  });
  const changeQuestion = (e, index) => {
    let arr = [...questions];
    arr[index] = !arr[index];
    setQuestions(arr);
  };
  const { RiveComponent } = useRive(params);

  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);
  }, []);

  const handlePageScroll = () => {
    if (window.scrollY > 0) {
      setDetectPageScroll(true);
    } else {
      setDetectPageScroll(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMailProperties({ ...mailProperties, [name]: value });
  };

  const sendMailToMohamed = async (e) => {
    if (
      mailProperties.name ||
      mailProperties.email ||
      mailProperties.message ||
      mailProperties.subject ||
      mailProperties.phone
    ) {
      window.open(`mailto:mohamed.derbali@esprit.tn?subject=${mailProperties.subject}&body=${mailProperties.message}%0D%0Aphone:${mailProperties.phone}`);
      return;
    }
    alert("you should fill all the fields");
  };

  return (
    <div className="App" id="home">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          style={
            !detectPageScroll
              ? { backgroundColor: "black", color: "white", opacity: "90%" }
              : {
                  backgroundColor: "black",
                  color: "white",
                  opacity: "90%",
                  boxShadow: "1px 1px 1px 1px white",
                }
          }
        >
          {openMenu && (
            <div className="navigationMenu">
              <Link
                to="home"
                spy={true}
                smooth={true}
                style={{ width: "100%" }}
              >
                <button className="navigationBtn">Home</button>
              </Link>
              <Link
                to="aboutMe"
                spy={true}
                smooth={true}
                style={{ width: "100%" }}
              >
                <button className="navigationBtn">About me</button>
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                style={{ width: "100%" }}
              >
                <button className="navigationBtn">Services</button>
              </Link>
              <Link
                to="workExperience"
                spy={true}
                smooth={true}
                style={{ width: "100%" }}
              >
                <button className="navigationBtn">Work experience</button>
              </Link>
              <Link
                to="contactMe "
                spy={true}
                smooth={true}
                style={{ width: "100%" }}
              >
                <button className="navigationBtn">Contact me</button>
              </Link>
              <Link to="FAQ" spy={true} smooth={true} style={{ width: "100%" }}>
                <button className="navigationBtn">FAQ</button>
              </Link>
            </div>
          )}
          <Toolbar>
            <IconButton
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <span className="code textLogo">{"</> Mohamed Dev"}</span>
            </Typography>
            <Button color="inherit">
              <span
                className="code emailBtn btnTopEmail"
                onClick={() => window.open("mailto:mohamed.derbali@esprit.tn")}
              >
                mohamed.derbali@esprit.tn
              </span>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        height="100vh"
        overflow={{ xs: "hidden", sm: "hidden", md: "hidden" }}
      >
        <Grid
          item
          xs={1}
          sm={2}
          md={2}
          key="i"
          style={{ backgroundColor: "black", color: "white" }}
        >
          {/* <h3>{"<Mohamed Derbali/>"}</h3> */}
        </Grid>
        <Grid item xs={4} sm={8} md={8} key="ii">
          <RiveComponent />
        </Grid>
        <Grid
          item
          xs={1}
          sm={2}
          md={2}
          key="iii"
          style={{ backgroundColor: "black", color: "white" }}
        ></Grid>
      </Grid>
      <div className="aboutMe" id="aboutMe">
        <h1 className="hugeCode">Hi, my name is </h1>
        <h1 className="basicText">Mohamed Derbali</h1>
        <h1 className="basicTextTransparent">I build things for the web.</h1>
        <p className="description">
          I am a software engineer specialiazing in designing, building, and
          <br />
          maintaining the server-side of web applications.
          <br />I am passionate about building excellent software that improves
          the <br />
          lives of those around me.
        </p>
        <Button color="inherit" style={{ marginLeft: "1%" }}>
          <span className="code emailBtn bounce">
            Check out the stacks i master
          </span>
        </Button>
      </div>
      <div className="services" id="services">
        <h1 className="basicText">Services</h1>
        <h1 className="code" style={{ marginBottom: "5%" }}>
          What i can do for you, here you will found my available services.
        </h1>
        <Grid
          container
          spacing={{ xs: 4, md: 8, sm: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4} key={1}>
            <Card
              className="MuiCard-root"
              sx={{
                maxWidth: 345,
                padding: "5%",
                backgroundColor: "rgb(53, 53, 53)",
                color: "white",
                boxShadow: "5px 5px rgb(255, 86, 120)",
              }}
            >
              <CardMedia
                component="img"
                height="350"
                image={web}
                alt="Web developement"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <span className="code">Web developement</span>
                </Typography>
                <Typography variant="body2">
                  <p className="code">
                    Javascript, NodeJs, ReactJs, Php, Laravel, Symfony, Html,
                    Css, Tailwind Css, SpringBoot, JavaEE, JSF, Angular
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4} key={1}>
            <Card
              className="MuiCard-root"
              sx={{
                maxWidth: 345,
                padding: "5%",
                backgroundColor: "rgb(53, 53, 53)",
                color: "white",
                boxShadow: "5px 5px rgb(255, 86, 120)",
              }}
            >
              <CardMedia
                component="img"
                height="auto"
                image={scrap}
                alt="Web developement"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <span className="code">Web Scrapping</span>
                </Typography>
                <Typography variant="body2">
                  <p className="code">BeautifulSoup 4, selinium</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4} key={1}>
            <Card
              className="MuiCard-root"
              sx={{
                maxWidth: 345,
                padding: "5%",
                backgroundColor: "rgb(53, 53, 53)",
                color: "white",
                boxShadow: "5px 5px rgb(255, 86, 120)",
              }}
            >
              <CardMedia
                component="img"
                height="auto"
                image={db}
                alt="Web developement"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <span className="code">Databases Managemenet</span>
                </Typography>
                <Typography variant="body2">
                  <p className="code">Mysql, MongoDB, PostgreSQL</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4} key={1}>
            <Card
              className="MuiCard-root"
              sx={{
                maxWidth: 345,
                padding: "5%",
                backgroundColor: "rgb(53, 53, 53)",
                color: "white",
                boxShadow: "5px 5px rgb(255, 86, 120)",
              }}
            >
              <CardMedia
                component="img"
                height="auto"
                image={mobile}
                alt="Web developement"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <span className="code">Mobile developement</span>
                </Typography>
                <Typography variant="body2">
                  <p className="code">
                    React native, Android, Javascript, Java
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4} key={1}>
            <Card
              className="MuiCard-root"
              sx={{
                maxWidth: 345,
                padding: "5%",
                backgroundColor: "rgb(53, 53, 53)",
                color: "white",
                boxShadow: "5px 5px rgb(255, 86, 120)",
              }}
            >
              <CardMedia
                component="img"
                height="auto"
                image={desktop}
                alt="Web developement"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <span className="code">Desktop developement</span>
                </Typography>
                <Typography variant="body2">
                  <p className="code">Qt, C++, Java, JavaFx, SDL, C</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4} key={1}>
            <Card
              className="MuiCard-root"
              sx={{
                maxWidth: 345,
                padding: "5%",
                backgroundColor: "rgb(53, 53, 53)",
                color: "white",
                boxShadow: "5px 5px rgb(255, 86, 120)",
              }}
            >
              <CardMedia
                component="img"
                height="auto"
                image={deploy}
                alt="Web developement"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <span className="code">Deployment</span>
                </Typography>
                <Typography variant="body2">
                  <p className="code">
                    Amazon Web Service, Heroku, Vercel, Netlify
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4} key={1}>
            <Card
              className="MuiCard-root"
              sx={{
                maxWidth: 345,
                padding: "5%",
                backgroundColor: "rgb(53, 53, 53)",
                color: "white",
                boxShadow: "5px 5px rgb(255, 86, 120)",
              }}
            >
              <CardMedia
                component="img"
                height="auto"
                image={server}
                alt="Web developement"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <span className="code">Server ressources Managemenet</span>
                </Typography>
                <Typography variant="body2">
                  <p className="code">Ngnix, Docker, Dns, Https</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <br />
      <div className="workExperience" id="workExperience">
        <h1 className="basicText" style={{ marginTop: "5%" }}>
          Work experience
        </h1>
        <div class="row ">
          <div class="fullWidth eight columns">
            <ul class="cbp_tmtimeline">
              <li>
                <div class="cbp_tmicon">
                  <BusinessCenterIcon
                    style={{ fontSize: 80, marginTop: "15%" }}
                    className="icon"
                  />
                </div>

                <div class="cbp_tmlabel wow fadeInRight animated">
                  <Box
                    style={{ width: "100%" }}
                    sx={{
                      display: "flex",
                      p: 1,
                    }}
                  >
                    <div sx={{ flexGrow: 1 }} style={{ marginRight: "20%" }}>
                      <h3 className="code">Backend engineer</h3>
                    </div>
                    <div style={{ marginRight: "1%" }}>
                      <CalendarMonthIcon />
                    </div>
                    <div>
                      <p
                        className="code"
                        style={{
                          marginTop: "-5%",
                          textAlign: "left",
                        }}
                      >
                        May 2022
                        <br />
                        Current
                      </p>
                    </div>
                  </Box>
                  <h4 className="code">Oney, France</h4>
                  <p class="projectParagraph code">
                    - Researching, designing, managing software programs. <br />
                    - Testing and evaluating new programs. <br />- Modifying
                    software to fix error, improve its performance. <br />
                    - Deploying software tools, processes and metrics. <br />
                    - Directing software programming and documentation
                    development. <br />
                    - Writing and implementing code. <br />
                    - Preparing reports on programming project specifications,
                    activities, or status. <br />- Consulting with engineering
                    staff to evaluate software-hardware interfaces and develop
                    specifications and performance requirements.
                  </p>
                </div>
              </li>
              <li>
                <div class="cbp_tmicon cbp_tmicon-screen">
                  <BusinessCenterIcon
                    style={{ fontSize: 80, marginTop: "15%" }}
                    className="icon"
                  />
                </div>
                <div class="cbp_tmlabel wow fadeInRight animated">
                  <Box
                    style={{ width: "100%" }}
                    sx={{
                      display: "flex",
                      p: 1,
                    }}
                  >
                    <div sx={{ flexGrow: 1 }} style={{ marginRight: "20%" }}>
                      <h3 className="code">
                        Full stack javascript
                        <br /> developer
                      </h3>
                    </div>
                    <div style={{ marginRight: "1%" }}>
                      <CalendarMonthIcon />
                    </div>
                    <div>
                      <p
                        className="code"
                        style={{
                          marginTop: "-5%",
                          textAlign: "left",
                        }}
                      >
                        August 2021
                        <br />
                        April 2022
                      </p>
                    </div>
                  </Box>
                  <h4 className="code">The team, France</h4>
                  <p class="projectParagraph code">
                    - Building and developing the server part architecture.{" "}
                    <br />
                    - Leading and coaching five javascript developers interns to
                    complete backend tasks. <br />
                    - Maintaining the existing user application by fixing bugs
                    and optimise the existing code. <br />
                  </p>
                </div>
              </li>
              <li>
                <div class="cbp_tmicon cbp_tmicon-mail">
                  <BusinessCenterIcon
                    style={{ fontSize: 80, marginTop: "15%" }}
                    className="icon"
                  />
                </div>
                <div class="cbp_tmlabel wow fadeInRight animated">
                  <Box
                    style={{ width: "100%" }}
                    sx={{
                      display: "flex",
                      p: 1,
                    }}
                  >
                    <div sx={{ flexGrow: 1 }} style={{ marginRight: "20%" }}>
                      <h3 className="code">
                        Full stack javascript
                        <br /> developer
                      </h3>
                    </div>
                    <div style={{ marginRight: "1%" }}>
                      <CalendarMonthIcon />
                    </div>
                    <div>
                      <p
                        className="code"
                        style={{
                          marginTop: "-5%",
                          textAlign: "left",
                        }}
                      >
                        January 2021
                        <br />
                        July 2021
                      </p>
                    </div>
                  </Box>
                  <h4 className="code">Lyveat, France</h4>
                  <p class="projectParagraph code">
                    - Maintain different applications (Restaurant, Client,
                    Admin, Rider). <br />
                    - Placing a chat solution using Ably io for realtime
                    communication. <br />- Implementation of drag and drop to
                    change elements orders. <br />- Establish a solution to
                    export restaurant tickets in the mobile application and
                    print them using the bluetooth printer.
                  </p>
                </div>
              </li>
              <li>
                <div class="cbp_tmicon cbp_tmicon-phone">
                  <BusinessCenterIcon
                    style={{ fontSize: 80, marginTop: "15%" }}
                    className="icon"
                  />
                </div>
                <div class="cbp_tmlabel wow fadeInRight animated">
                  <Box
                    style={{ width: "100%" }}
                    sx={{
                      display: "flex",
                      p: 1,
                    }}
                  >
                    <div sx={{ flexGrow: 1 }} style={{ marginRight: "20%" }}>
                      <h3 className="code">Mobile developer</h3>
                    </div>
                    <div style={{ marginRight: "1%" }}>
                      <CalendarMonthIcon />
                    </div>
                    <div>
                      <p
                        className="code"
                        style={{
                          marginTop: "-5%",
                          textAlign: "left",
                        }}
                      >
                        Feb 2021
                        <br />
                        Sep 2021
                      </p>
                    </div>
                  </Box>
                  <h4 className="code">Forbetter, Quebec</h4>
                  <p class="projectParagraph code">
                    - Creating a mobile application using react native and nest
                    js to defend women rights and help employees to find a job
                    in Quebec, Canada. <br />
                    - Deploy the backend application on amazon web service,
                    configure cluster for node js to make performing requests
                    faster and configure Nginx and Docker to balance the backend
                    application. <br />
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contactMe" id="contactMe">
        <h1 className="basicText">Contact me</h1>
        <h1 className="code" style={{ marginBottom: "5%" }}>
          While i'm good with smoke signals, there are simpler ways for me to
          get in touch.
        </h1>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <FormControl>
              <span className="label code">Nom:</span>
              <input
                id="my-input"
                className="code"
                name="name"
                onChange={handleChange}
                placeholder="write your name here.."
                value={mailProperties.name}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <span className="label code">Email:</span>
              <input
                id="my-input"
                className="code"
                name="email"
                onChange={handleChange}
                placeholder="write your email here.."
                value={mailProperties.email}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <span className="label code">Phone:</span>
              <input
                id="my-input"
                className="code"
                name="phone"
                onChange={handleChange}
                placeholder="example: (415) 200 - 8613"
                value={mailProperties.phone}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <span className="label code">Subject:</span>
              <input
                id="my-input"
                className="code"
                name="subject"
                onChange={handleChange}
                placeholder="write your subject here.."
                value={mailProperties.subject}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <span className="label code">Message:</span>
              <textarea
                id="my-textarea"
                className="code"
                name="message"
                onChange={handleChange}
                placeholder="write your message here.."
                value={mailProperties.message}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button color="inherit">
              <span
                className="code emailBtn"
                onClick={(e) => sendMailToMohamed(e)}
              >
                Send message
              </span>
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className="FAQ" id="FAQ">
        <h1 className="basicTextFAQ">Frequently Asked Questions</h1>
        {questions && questions[0] === true ? (
          <button
            className="plusQuestion"
            onClick={(e) => changeQuestion(e, 0)}
          >
            +
          </button>
        ) : (
          <button
            className="plusQuestion"
            onClick={(e) => changeQuestion(e, 0)}
          >
            -
          </button>
        )}
        <span className="code question">
          Are you open for freelance / contract work?
        </span>
        <div hidden={questions[0]}>
          <p className="response code">
            I am Delighted to build new applications, i would love the
            opportunity to talk with you about the position and what I might
            bring to it.
          </p>
        </div>
        <br />
        {questions && questions[1] === true ? (
          <button
            className="plusQuestion"
            onClick={(e) => changeQuestion(e, 1)}
          >
            +
          </button>
        ) : (
          <button
            className="plusQuestion"
            onClick={(e) => changeQuestion(e, 1)}
          >
            -
          </button>
        )}
        <span className="code question">
          Are you open for project collaborations?
        </span>
        <div hidden={questions[1]}>
          <p className="response code">
            I always enjoy working in team, i'm looking forward to chatting more
            about this.😀
          </p>
        </div>
        <br />
        {questions && questions[2] === true ? (
          <button
            className="plusQuestion"
            onClick={(e) => changeQuestion(e, 2)}
          >
            +
          </button>
        ) : (
          <button
            className="plusQuestion"
            onClick={(e) => changeQuestion(e, 2)}
          >
            -
          </button>
        )}
        <span className="code question">
          Are you open for guest-posts on your blog?
        </span>
        <div hidden={questions[2]}>
          <p className="response code">
            Yes, I do. Guest post is a valuable marketing tactic that can boost
            my traffic website. By accepting the guest post, my blog will get
            good content that can attract the audience, and it can make our
            website high rank in Google.
          </p>
        </div>
        <br />
        {questions && questions[3] === true ? (
          <button
            className="plusQuestion"
            onClick={(e) => changeQuestion(e, 3)}
          >
            +
          </button>
        ) : (
          <button
            className="plusQuestion"
            onClick={(e) => changeQuestion(e, 3)}
          >
            -
          </button>
        )}
        <span className="code question">
          Are you currently looking for fulltime roles?
        </span>
        <div hidden={questions[3]}>
          <p className="response code">
            I would love the opportunity to become a full-time employee. I am
            very excited at the prospect of this part-time job, but I would
            gladly accept a full-time position if it were ever available. I
            believe my organizational and time management skills would make me a
            very strong full-time employee.
          </p>
        </div>
        <br />
        {questions && questions[4] === true ? (
          <button
            className="plusQuestion"
            onClick={(e) => changeQuestion(e, 4)}
          >
            +
          </button>
        ) : (
          <button
            className="plusQuestion"
            onClick={(e) => changeQuestion(e, 4)}
          >
            -
          </button>
        )}
        <span className="code question">
          What's your past experience on web developement?
        </span>
        <div hidden={questions[4]}>
          <p className="response code">
            I've been working as web developer since 2018, i started with PHP
            and Symfony where i build many e-commerce applications that sells
            (perfume, candy and clothes) then i moved to learn Javascript that
            i've become addicted to it i learned NodeJs, ReactJs and NextJs and
            web design technologies (css, tailwindcss and bootstrap) after that
            i build 2 Backend application: the first is for a candian
            association named Forbetter where i volunteered to develop a backend
            application with expressJs and NodeJs, Second i worked as freelancer
            to create a backend application for a frensh company named the team
            that manages different web and mobile applications and last i've
            build my Blog using React, tailwindcss.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
