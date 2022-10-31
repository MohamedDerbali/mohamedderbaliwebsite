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
              <button className="navigationBtn">Contact me</button>
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
              <span className="code emailBtn">mohamed.derbali@esprit.tn</span>
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
        <h1 className="code" style={{marginBottom: "5%"}}>
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
    </div>
  );
}

export default App;
