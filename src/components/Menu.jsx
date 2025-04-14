import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";

import tacos from "../assets/imagenes/quesabirria.webp";
import volvanes from "../assets/imagenes/volcanes.webp";
import birria from "../assets/imagenes/birria.webp";
import ramen from "../assets/imagenes/ramen2.webp";
import refrescos from "../assets/imagenes/refrescos.webp";

const menu = [
  {
    nombre: "TACOS DE BIRRIA",
    img: tacos,
    descripcion: "TORTILLA DE MANO",
    menu: [
      { nombre: "ORDEN DE 3", precio: "75" },
      { nombre: "PIEZA EXTRA", precio: "25" },
    ],
  },
  {
    nombre: "VOLVANES DE BIRRIA",
    img: volvanes,
    descripcion: "FRIJOLES, CARNE Y QUESO GRATINADO",
    menu: [
      { nombre: "ORDEN DE 3", precio: "149" },
      { nombre: "PIEZA EXTRA", precio: "50" },
    ],
  },
  {
    nombre: "PLATILLO 1/4",
    img: birria,
    precio: "145",
    descripcion: "TORTILLAS DE MANO Y GUARNICIONES",
    menu: false,
  },
  {
    nombre: "TAZON",
    img: ramen,
    precio: "145",
    descripcion: "CARNE Y CALDO",
    menu: false,
  },
  {
    nombre: "BIRRIA",
    img: birria,
    menu: [
      { nombre: "1 KG", precio: "650" },
      { nombre: "1 KG PARA LLEVAR", precio: "550" },
      { nombre: "1/2 KG", precio: "325" },
      { nombre: "1/2 KG PARA LLEVAR", precio: "275" },
    ],
  },
  {
    nombre: "BEBIDAS",
    img: refrescos,
    menu: [
      { nombre: "CAFE NEGRO", precio: "25" },
      { nombre: "REFRESCOS", precio: "30" },
      { nombre: "AGUA NATURAL CHICA", precio: "20" },
      { nombre: "AGUA NATURAL GRANDE", precio: "30" },
      { nombre: "AGUA FRESCA DEL DIA", precio: "30" },
      { nombre: "CERVEZA 1/2", precio: "40" },
      { nombre: "VASO CLAMATO", precio: "35" },
      { nombre: "VASO LIMON Y SAL", precio: "15" },
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
