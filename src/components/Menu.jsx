import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";

import tacos from "../assets/imagenes/tacos.webp";
import quesabirria from "../assets/imagenes/quesabirria.webp";
import volvanes from "../assets/imagenes/volcanes.webp";
import birria from "../assets/imagenes/birria.webp";
import ramen from "../assets/imagenes/ramen2.webp";
import pizza from "../assets/imagenes/pizza.webp";
import tazon from "../assets/imagenes/tazon.webp";
import refrescos from "../assets/imagenes/refrescos.webp";

const menu = [
  {
    nombre: "TACOS DE BIRRIA",
    img: tacos,
    descripcion:
      "Tacos servidos en tortilla hecha a mano, rellenos de deliciosa birria de res.",
    menu: [
      { nombre: "Orden de 3", precio: "75" },
      { nombre: "Pieza extra", precio: "25" },
    ],
  },
  {
    nombre: "QUESABIRRIAS",
    img: quesabirria,
    descripcion:
      "Crujientes tortillas de mano con queso derretido y jugosa birria de res.",
    menu: [
      { nombre: "Orden de 3", precio: "75" },
      { nombre: "Pieza extra", precio: "25" },
    ],
  },
  {
    nombre: "VOLCANES DE BIRRIA",
    img: volvanes,
    descripcion: "Base crujiente con birria y queso gratinado al estilo único.",
    menu: [
      { nombre: "Orden de 3", precio: "149" },
      { nombre: "Pieza extra", precio: "50" },
    ],
  },
  {
    nombre: "PLATILLO 1/4",
    img: birria,
    precio: "145",
    descripcion:
      "Birria acompañada de tortillas hechas a mano y guarniciones tradicionales.",
    menu: false,
  },
  {
    nombre: "PIZZA BIRRIA",
    img: pizza,
    precio: "189",
    descripcion:
      "Tortilla de harina con carne de birria, queso fundido y mucho sabor.",
    menu: false,
  },
  {
    nombre: "TAZÓN",
    img: tazon,
    precio: "139",
    descripcion:
      "Birria con todo su caldo, servida en tazón. Perfecta para los que buscan intensidad de sabor.",
    menu: false,
  },
  {
    nombre: "RAMEN",
    img: ramen,
    precio: "139",
    descripcion:
      "Ramen con caldo de birria y carne, una fusión deliciosa de sabores mexicanos y japoneses.",
    menu: false,
  },
  {
    nombre: "BIRRIA",
    img: birria,
    descripcion:
      "Birria de res de excelente calidad, ideal para compartir o llevar.",
    menu: [
      { nombre: "1 kg", precio: "650" },
      { nombre: "1 kg para llevar", precio: "550" },
      { nombre: "1/2 kg", precio: "325" },
      { nombre: "1/2 kg para llevar", precio: "275" },
    ],
  },
  {
    nombre: "BEBIDAS",
    img: refrescos,
    descripcion:
      "Complementa tu comida con nuestras bebidas frías y calientes.",
    menu: [
      { nombre: "Café negro", precio: "25" },
      { nombre: "Refrescos", precio: "30" },
      { nombre: "Agua natural chica", precio: "20" },
      { nombre: "Agua natural grande", precio: "30" },
      { nombre: "Agua fresca del día", precio: "30" },
      { nombre: "Cerveza 1/2", precio: "35" },
      { nombre: "Vaso clamato", precio: "35" },
      { nombre: "Vaso limón y sal", precio: "15" },
    ],
  },
];

export const Menu = () => {
  return menu.map((producto, index) => (
    <Box
      key={index}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ marginBottom: 8 }}
    >
      <Card sx={{ maxWidth: 345, width: "90%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={producto.img}
            alt="green iguana"
            sx={{ objectFit: "cover", objectPosition: "center bottom" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {producto.nombre}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              gutterBottom
            >
              {producto.descripcion}
            </Typography>
            {producto.menu ? (
              producto.menu.map((submenu, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                    gutterBottom
                  >
                    {submenu.nombre}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "red", fontWeight: "bold" }}
                  >
                    {"$ " + submenu.precio}
                  </Typography>
                </Box>
              ))
            ) : (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  gutterBottom
                >
                  PRECIO
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "red", fontWeight: "bold" }}
                >
                  {"$ " + producto.precio}
                </Typography>
              </Box>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  ));
};
