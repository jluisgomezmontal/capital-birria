import { Box, Typography } from "@mui/material";
import { Carousel } from "./components/Carousel";
import { Restaurant } from "./components/Restaurant";
import { Menu } from "./components/Menu";
import { Informacion } from "./components/Informacion";

function App() {
  return (
    <>
      <Carousel />
      <Restaurant />
      <Box textAlign="center">
        <Typography
          variant="h3"
          gutterBottom
          sx={{ mt: 2, fontFamily: "Dancing Script, cursive" }}
        >
          Menu
        </Typography>
      </Box>
      <Menu />
      <Informacion />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.65405407789!2d-99.37521132352276!3d16.793878519628887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ca3b00198a1fc7%3A0x622279f61a05b2a2!2sCapital%20birria!5e0!3m2!1ses-419!2smx!4v1743797179641!5m2!1ses-419!2smx"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default App;
