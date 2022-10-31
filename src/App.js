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
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
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

  return (
    <div className="App">
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
              <button className="navigationBtn">Home</button>
              <button className="navigationBtn">About me</button>
              <button className="navigationBtn">Services</button>
              <button className="navigationBtn">Work experience</button>
              <button className="navigationBtn">Contact me</button>
              <button className="navigationBtn">FAQ</button>
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
              <span className="code">{"</> Mohamed Dev"}</span>
            </Typography>
            <Button color="inherit">
              <span
                className="code emailBtn"
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
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
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
                placeholder="write your name here.."
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <span className="label code">Email:</span>
              <input
                id="my-input"
                className="code"
                placeholder="write your email here.."
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <span className="label code">Phone:</span>
              <input
                id="my-input"
                className="code"
                placeholder="example: (415) 200 - 8613"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <span className="label code">Subject:</span>
              <input
                id="my-input"
                className="code"
                placeholder="write your subject here.."
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <span className="label code">Message:</span>
              <textarea
                id="my-textarea"
                className="code"
                placeholder="write your message here.."
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button color="inherit">
              <span className="code emailBtn">Send message</span>
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
