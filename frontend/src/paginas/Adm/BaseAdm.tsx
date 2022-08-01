import { Box, Button, Typography, AppBar, Container, Toolbar, Link, Paper } from "@mui/material"
import { Link as RouterLink, Outlet } from 'react-router-dom'
import AdmBar from './../../componentes/includes/AdmBar/index';

const BaseAdm = () => {
    return (
        <>
            <AppBar position="static">
                <AdmBar />
            </AppBar>
            <Box>
                <Container maxWidth="lg" sx={{ mt: 1 }}>
                    <Outlet />
                </Container>
            </Box>
        </>
    )
}

export default BaseAdm