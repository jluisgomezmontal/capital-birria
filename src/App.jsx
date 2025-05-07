import { Box, Link, Typography } from "@mui/material";
import { Carousel } from "./components/Carousel";
import { Restaurant } from "./components/Restaurant";
import { Menu } from "./components/Menu";
import { Informacion } from "./components/Informacion";

function App() {
  return (
    <div className="capital">
      <Carousel />
      <Restaurant />
      <Box textAlign="center">
        <Typography
          variant="h3"
          gutterBottom
          sx={{ my: 5, fontFamily: "Dancing Script, cursive" }}
        >
          Menú
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
      <Box
        textAlign="center"
        mt={4}
        sx={{
          fontSize: "14px",
          color: "gray.300",
          marginBottom: 3,
        }}
      >
        &copy; Todos los derechos reservados. <br />
        Diseño:{" "}
        <Link
          href="https://paginaswebacapulco.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{
            color: "primary.light",
            fontWeight: "bold",
          }}
        >
          Aplicaciones WEB Acapulco
        </Link>
      </Box>
    </div>
  );
}

export default App;
