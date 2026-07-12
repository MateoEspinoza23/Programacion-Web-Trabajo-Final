import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack
} from "@mui/material";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Soporte = () => {

  return (
    <Box
      sx={{
        maxWidth: 1000,
        margin: "40px auto",
        padding: 3
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={4}
      >
        Soporte Técnico
      </Typography>

      <Typography
        variant="body1"
        textAlign="center"
        color="text.secondary"
        mb={5}
      >
        Si tienes algún inconveniente con tus reservas, pagos o tu cuenta,
        nuestro equipo está listo para ayudarte.
      </Typography>

      <Stack spacing={3}>

        <Card elevation={4}>
          <CardContent>

            <Typography
              variant="h6"
              display="flex"
              alignItems="center"
              gap={1}
              gutterBottom
            >
              <SupportAgentIcon color="primary" />
              Centro de Atención
            </Typography>

            <Typography sx={{ mb: 2 }}>
              Nuestro equipo brinda soporte para cualquier inconveniente con
              reservas, pagos, registro de usuarios y consultas generales.
            </Typography>

            <Typography
              display="flex"
              alignItems="center"
              gap={1}
              sx={{ mb: 1 }}
            >
              <PhoneIcon color="success" />
              (+51) 984 794 756
            </Typography>

            <Typography
              display="flex"
              alignItems="center"
              gap={1}
              sx={{ mb: 1 }}
            >
              <EmailIcon color="error" />
              soporte@turibus.pe
            </Typography>

            <Typography sx={{ mt: 2 }}>
              Horario de atención:
              <br />
              Lunes a Viernes
              <br />
              8:00 AM - 6:00 PM
            </Typography>

          </CardContent>
        </Card>

        <Card elevation={4}>
          <CardContent>

            <Typography
              variant="h6"
              gutterBottom
            >
              Contacto Rápido
            </Typography>

            <Typography sx={{ mb: 3 }}>
              Si tu consulta es urgente, puedes comunicarte con nosotros
              mediante WhatsApp.
            </Typography>

            <Button
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/51984794756"
              target="_blank"
              fullWidth
            >
              Contactar por WhatsApp
            </Button>

          </CardContent>
        </Card>

      </Stack>

    </Box>
  );

};

export default Soporte;