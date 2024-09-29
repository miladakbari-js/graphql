import { AppBar, Avatar, Container, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="700" flex={1}>
            کلینیک زیبایی مهسا
          </Typography>
          <Avatar alt="mahsa logo" src="./image/1.png"/>
        </Toolbar>
      </Container>
    </AppBar>
      );
}

export default Header;
