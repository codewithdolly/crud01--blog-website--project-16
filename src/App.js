import React from "react";
import "./App.scss";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { NewPost, EditPost, ArchivePost } from "./Components";
import AboutUs from "./Components/ViewPost/AboutUs";
import Blog from "./Components/ViewPost/Blog";
import Contact from "./Components/ViewPost/Contact";
import { Typography } from "@mui/material";
import logo from "./Components/images/logo.png";
import Container from "@mui/material/Container";
import SocialMedia from "./Components/ViewPost/SocialMedia";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FeedIcon from "@mui/icons-material/Feed";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import ArchiveIcon from "@mui/icons-material/Archive";
import CssBaseline  from '@mui/material/CssBaseline';

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <BrowserRouter>
        <Box>
          <div
            className="app"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography component="div" style={{ textAlign: "center" }}>
              <img src={logo} alt="logo" />
            </Typography>
            <SocialMedia />
          </div>
        </Box>
<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <CssBaseline />
        <Container sx={{ pt: 8 }} stickyHeader maxWidth="lg">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
          >
            {pages.map((page) => {
              return (
                <>
                  <Link
                    to={page.path}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Tab icon={page.icon} label="RECENTS" />
                  </Link>
                </>
              );
            })}
          </Tabs>
        </Container>
        </Box>

        <Routes>
          <Route index path="/newpost" element={<NewPost />} />
          {pages.map((page) => {
            return (
              <>
                <Route path={page.path} element={page.page} />
              </>
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const pages = [
  {
    name: "Blog",
    path: "/",
    page: <Blog />,
    icon: <FeedIcon className="icon" />,
  },

  {
    name: "New Post",
    path: "/newpost",
    page: <NewPost />,
    icon: <PostAddIcon className="icon" />,
  },

  {
    name: "Edit",
    path: "/edit",
    page: <EditPost />,
    icon: <SaveAsOutlinedIcon className="icon" />,
  },
  {
    name: "Archive",
    path: "/archive",
    page: <ArchivePost />,
    icon: <ArchiveIcon className="icon" />,
  },

  {
    name: "About Us",
    path: "/about",
    page: <AboutUs />,
    icon: <SentimentVerySatisfiedOutlinedIcon className="icon" />,
  },
  {
    name: "Contact",
    path: "/contact",
    page: <Contact />,
    icon: <ConnectWithoutContactIcon className="icon" />,
  },
];
