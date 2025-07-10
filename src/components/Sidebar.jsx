import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, useNavigate } from 'react-router';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import XIcon from '@mui/icons-material/X';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const drawerWidth = 240;

export default function Sidebar() {
  // const navigate = useNavigate();
  const datosIndiceSuperior = [
    {
      name: "Inicio",
      icono: HomeIcon,
      path: "/",
    },
  ]

  const datosIndiceInferior = [
    {
      name: "Active learning",
      icono: SmartToyIcon,
      path: "/proyect1",
    },
    {
      name: "Clasificador datos academicos y Web scraping",
      icono: ScreenSearchDesktopIcon,
      path: "/proyect2",
    },
    {
      name: "Web scraping Google News",
      icono: NewspaperIcon,
      path: "/proyect3",
    },
    {
      name: "Análisis de datos, propinas en Nueva York",
      icono: LocalTaxiIcon,
      path: "/proyect4",
    },
    {
      name: "Image recognition apertura de ojo",
      icono: VisibilityIcon,
      path: "/proyect5",
    },
    {
      name: "Named entity recognition con datos de X",
      icono: XIcon,
      path: "/proyect6",
    },
  ]
// 
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, textAlign: "left"}}>
            Portafolio Joaquin Quiroz
          </Typography>
          {/* <Button color='eee'>
            Obscuro
          </Button>
          <Button color='eee'>
            idioma
          </Button> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {datosIndiceSuperior.map((i, index) => (
              // <Link to={i.path}>
                <ListItem key={i.name} disablePadding>
                  <ListItemButton onClick={() => window.location.assign(i.path)}>
                    <ListItemIcon>
                      <i.icono></i.icono>
                    </ListItemIcon>
                    <ListItemText primary={i.name} />
                  </ListItemButton>
                </ListItem>
              // </Link>
            ))}
          </List>
          <Divider />
          <Typography variant='overline' p={2} textAlign={"center"}>
            Proyectos
          </Typography>
          <List>
            {datosIndiceInferior.map((i, index) => (
              <ListItem key={i.name} disablePadding>
                <ListItemButton onClick={() => window.location.assign(i.path)}>
                  <ListItemIcon>
                    {<i.icono></i.icono>}
                  </ListItemIcon>
                  <ListItemText primary={i.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}