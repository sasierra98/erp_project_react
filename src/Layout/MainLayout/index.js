import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled, useTheme } from '@mui/material/styles';
import DrawerComponent  from "../../Components/Navigation/Drawer";
import AppBarComponent from "../../Components/Navigation/AppBar";
import MiniDrawer2 from "../../Components/Drawer";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Outlet, useRoutes } from "react-router-dom";
import { InventoryPage } from "../../Pages/Inventory";
import { toggleApp } from "../../Store/reducers/actions";
import { isOpen } from "../../Store/reducers";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));


const Routes = () => {
    return useRoutes([
        {
            path: "/",
            element: <Outlet />,
            children: [
                {
                    path: "/inventories",
                    element: <InventoryPage />
                }
            ]
        }
    ]);
} 

export const MainLayout = (props) => {
    const drawerOpen = useSelector((state) => state.isOpen);
    // const [open, setOpen] = React.useState(drawerOpen);
    console.log(drawerOpen)

    const dispatch = useDispatch();

    const handleDrawerOpen = () => {
        // props.setOpen(true);
        //setOpen(true);
        dispatch(isOpen({isOpen: true}))  
        console.log("soy true")
    };

    const handleDrawerClose = () => {
        //  props.setOpen(false);
        //setOpen(false); 
        dispatch(isOpen({isOpen: false}))
        console.log("soy false")
      };
    

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* <MiniDrawer2/> */}
            <AppBarComponent open={drawerOpen} setOpen={handleDrawerOpen} />
            {/* <AppBarComponent dispatch={dispatch} /> */}
            
            {/* {open en && drawerComponent} */}
            <DrawerComponent open={drawerOpen} setOpen={handleDrawerClose} />
            {/* <DrawerComponent dispatch={dispatch} /> */}
            
            {/* {drawerComponent} */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Router>
                    <Routes />
                </Router>
            </Box>
        </Box>
        
    );
}