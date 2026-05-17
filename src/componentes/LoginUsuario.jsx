import React,{useState} from "react";
import {Button, Stack,TextField,Paper} from "@mui/material"



const LoginUsuario=()=>{
    return(
        <>
        <Paper sx={{
            width:400,
            p:3
        }}>
            <Stack spacing={2} mt={3}>
                <TextField label="correo" fullWidth/>
                <TextField label="contraseña" type="password" fullWidth/>
                <Button  variant="contained">
                    Ingresar
                </Button>
            </Stack>

        </Paper>
        </>
    )
}
export default LoginUsuario;