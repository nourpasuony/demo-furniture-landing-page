import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const navItems = ["Home", "About", "Features", "Contact"];

const Logo = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: "1.5rem",
    color: "#fff",
    letterSpacing: "1px",
    flexGrow: 1,
}));

const NavButton = styled(Button)(({ theme }) => ({
    color: "#aaa",
    fontWeight: 600,
    textTransform: "none",
    fontSize: "16px",
    marginLeft: theme.spacing(3),
    "&:hover": {
        color: "#fff",
    }
}));

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="static"
            sx={{
                paddingBlock: 2,
                background: "none",
                boxShadow: "none",
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Logo variant="h6" component="div">
                        FurniShop
                    </Logo>
                    {/* Desktop Nav */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                        {navItems.map((item) => (
                            <NavButton key={item}>{item}</NavButton>
                        ))}
                    </Box>
                    {/* Mobile Burger */}
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuOpen}
                            sx={{ color: "#fff" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                        >
                            {navItems.map((item) => (
                                <MenuItem key={item} onClick={handleMenuClose}>
                                    <Button
                                        sx={{
                                            color: "#28777b",
                                            fontWeight: 600,
                                            textTransform: "none",
                                            width: "100%",
                                            justifyContent: "flex-start",
                                        }}
                                        fullWidth
                                    >
                                        {item}
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;