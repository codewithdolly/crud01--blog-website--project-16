import React from "react";
import "./App.scss";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { NewPost } from "./Components";
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
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

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

        <Container stickyHeader maxWidth="lg">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon label tabs example"
                sx={{ pb: 3 }}
              >
                {pages.map((page) => {
                  return (
                    <>
                      <Link
                        to={page.path}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Tab icon={page.icon} label={page.name} />
                      </Link>
                    </>
                  );
                })}
              </Tabs>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <InputBase
                  sx={{ ml: 1, backgroundColor: "#fff" }}
                  placeholder="Search..."
                  inputProps={{ "aria-label": "Search..." }}
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              </Box>
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
          </Box>
        </Container>
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

  // {
  //   name: "New Post",
  //   path: "/newpost",
  //   page: <NewPost />,
  //   icon: <PostAddIcon className="icon" />,
  // },

  // {
  //   name: "Edit",
  //   path: "/edit",
  //   page: <EditPost />,
  //   icon: <SaveAsOutlinedIcon className="icon" />,
  // },
  // {
  //   name: "Archive",
  //   path: "/archive",
  //   page: <ArchivePost />,
  //   icon: <ArchiveIcon className="icon" />,
  // },

  {
    name: "About Us",
    path: "/about",
    page: <AboutUs />,
    icon: <GroupIcon className="icon" />,
  },
  {
    name: "Contact",
    path: "/contact",
    page: <Contact />,
    icon: <ConnectWithoutContactIcon className="icon" />,
  },
];
