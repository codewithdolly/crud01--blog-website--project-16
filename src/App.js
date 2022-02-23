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
// import SubNav from "./Components/ViewPost/SubNav";
import SocialMedia from "./Components/ViewPost/SocialMedia";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FeedIcon from '@mui/icons-material/Feed';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';

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
          {/* <SubNav /> */}
        </Box>

        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      {pages.map((page)=>{
        return (<>
          <Link to={page.path}><Tab icon={page.icon} label="RECENTS" /></Link>
        </>)
      })}
    </Tabs>


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
    icon: <FeedIcon />,
  },

  {
    name: "New Post",
    path: "/newpost",
    page: <NewPost />,
    icon: <PostAddIcon />,
  },

  {
    name: "Edit",
    path: "/edit",
    page: <EditPost />,
    icon: <SaveAsOutlinedIcon />,
  },
  {
    name: "Archive",
    path: "/archive",
    page: <ArchivePost />,
    icon: <ArchiveIcon />,
  },

  {
    name: "About Us",
    path: "/about",
    page: <AboutUs />,
    icon: <SentimentVerySatisfiedOutlinedIcon />,
  },
  {
    name: "Contact",
    path: "/contact",
    page: <Contact />,
    icon: <ConnectWithoutContactIcon />,
  },
];
