import * as React from 'react';
import { createTheme, styled, ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import { GetDesignTokens } from './Theme';
import { Outlet } from 'react-router-dom';



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));




export default function MiniDrawer() {
 
  const [mode, setMode] = React.useState(localStorage.getItem("currentValue") ? localStorage.getItem("currentValue") : "light");
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    // @ts-ignore
    setOpen(true);
  };

  const handleDrawerClose = () => {
     // @ts-ignore
     setOpen(false);
   };
   
   const theme = React.useMemo(() => createTheme(GetDesignTokens(mode)), [mode]);


  return (
  <ThemeProvider theme={theme} >
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* nav */} 
      <Navbar setMode={setMode} open={open} handleDrawerOpen={handleDrawerOpen}/>
      {/* sidebar */}
      <Sidebar open={open} handleDrawerClose={handleDrawerClose}  />
      {/* main */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet/>
      </Box>
    </Box>
     </ThemeProvider>
  );
 
}
