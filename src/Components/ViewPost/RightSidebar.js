import React from "react";
import Box from "@mui/material/Box";
import FollowUs from "./FollowUs";
import Tags from "./Tags";
import NewsLetter from "./NewsLetter";
import RecentPost from "./RecentPost";
import LatestPosts from "./LatestPosts";

const RightSidebar = () => {
  return (
    <>
      <Box>
        <RecentPost />
        <LatestPosts />

        <FollowUs />
        <Tags />
        <NewsLetter />
      </Box>
    </>
  );
};

export default RightSidebar;
