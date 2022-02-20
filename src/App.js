import React from "react";
import "./App.scss";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ViewPost, NewPost } from "./Components";
import ArchivePost from "./Components/ArchivePost/ArchivePost";
import EditPost from "./Components/EditPost/EditPost";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import user from "./Components/images/d.jpg";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

const pages = [
  {
    name: "Home",
    path: "/",
    page: <ViewPost />,
  },
  {
    name: "New Post",
    path: "/newpost",
    page: <NewPost />,
  },
  {
    name: "Edit",
    path: "/edit",
    page: <EditPost />,
  },
  {
    name: "Archive",
    path: "/archivepost",
    page: <ArchivePost />,
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginRight: "10px",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <AppBar
            position="static"
            sx={{ backgroundColor: " rgba(0, 0, 0, 0.12)", color: "black" }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                >
                  Blog
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => {
                    return (
                      <>
                        <Link to={page.path} style={{ textDecoration: "none" }}>
                          <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{
                              my: 2,
                              color: "white",
                              display: "block",
                              color: "black",
                            }}
                          >
                            {page.name}
                          </Button>
                        </Link>
                      </>
                    );
                  })}
                </Box>

                <Box sx={{ flexGrow: 0, display: "flex" }}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={user} />
                    </IconButton>
                  </Tooltip>

                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </div>

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
