import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
export const Informacion = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 1,
        mx: "auto",
      }}
    >
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6">CAPITAL BIRRIA</Typography>
        <Typography variant="h6">CEL. 744-471-1234</Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{ mb: 2 }}
        color="success"
        endIcon={<CallIcon />}
      >
        LLAMAR
      </Button>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Llama y Recoge, De miércoles a sábado de 6pm a 10pm en Av. Sta. Cruz
        #268 col. Bella Vista, A un costado del Motel Palmas.
      </Typography>

      {/* Redes Sociales */}
      <Box display="flex" justifyContent="space-evenly" gap={2}>
        <Facebook sx={{ fontSize: 40, color: "#3b5998", cursor: "pointer" }} />
        <Instagram sx={{ fontSize: 40, color: "#e1306c", cursor: "pointer" }} />
        <WhatsApp sx={{ fontSize: 40, color: "#25d366", cursor: "pointer" }} />
      </Box>
    </Box>
  );
};
