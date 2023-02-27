import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerComponent from './Drawer';
import AppBarComponent from './AppBar';


export default function MiniDrawer() {
//   const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarComponent open={open} setOpen={setOpen} />
      <DrawerComponent open={open} setOpen={setOpen} />
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box> */}
    </Box>
  );
}