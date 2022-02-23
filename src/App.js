import React from "react";
import "./App.scss";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { NewPost, EditPost, ArchivePost } from "./Components";
import AboutUs from "./Components/ViewPost/AboutUs"
import Blog from "./Components/ViewPost/Blog"
import Contact from "./Components/ViewPost/Contact"
import { Typography } from "@mui/material";
import logo from "./Components/images/logo.png";
import SubNav from "./Components/ViewPost/SubNav";
import SocialMedia from "./Components/ViewPost/SocialMedia";

const pages = [
  {
    name: "New Post",
    path: "/",
    page: <Blog  />,
  },

  {
    name: "New Post",
    path: "/newpost",
    page: <NewPost />,
  },

  {
    name: "New Post",
    path: "/edit",
    page: <EditPost />,
  },
  {
    name: "New Post",
    path: "/edit",
    page: <ArchivePost />,
  },

  {
    name: "New Post",
    path: "/about",
    page: <AboutUs />,
  },
  {
    name: "New Post",
    path: "/contact",
    page: <Contact />,
  },
];

function App() {

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
        <Typography component="div" style={{textAlign:"center"}}>
          <img src={logo} alt="logo" />
        </Typography>
       <SocialMedia />
      </div>
      <SubNav />
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
