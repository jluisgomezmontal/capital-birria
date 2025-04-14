import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
export const Informacion = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mx: "auto",
      }}
    >
      {/* Redes Sociales */}
      <Box display="flex" justifyContent="space-evenly" gap={2}>
        <a
          href="https://www.facebook.com/capital.birria?locale=es_LA"
          target="blank"
        >
          <Facebook
            sx={{ fontSize: 40, color: "#3b5998", cursor: "pointer" }}
          />
        </a>
      </Box>
      <Typography variant="body1" sx={{ my: 3 }}>
        Visitanos de Lunes a Domingo de 8 am a 4.30pm
      </Typography>
    </Box>
  );
};
