import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Blog from "./Blog";
import Contact from "./Contact"
import AboutUs from "./AboutUs"
import CssBaseline  from '@mui/material/CssBaseline';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SubNav = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
    <CssBaseline />
      <Container maxWidth="lg" sx={{ pt: 8 }} stickyHeader>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="secondary[100]"
              style={{ color: "#B19484"}}
              indicatorColor="secondery"
            >
              <Tab label="Blog" {...a11yProps(0)} />
              <Tab label="About Us" {...a11yProps(1)} />
              <Tab label="Contact" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Blog />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AboutUs />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Contact />
          </TabPanel>
        </Box>
      </Container>
    </>
  );
};

export default SubNav;
