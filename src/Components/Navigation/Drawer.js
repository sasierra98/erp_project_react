import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';

const drawerWidth = 240;

const InventoryItems = [
  {
    name: "Products",
    icon: <FastfoodIcon />,
    key: "products",
    path: "/products"
  },
  {
    name: "Categories",
    icon: <CategoryIcon />,
    key: "categories",
    path: "/categories"
  },
  {
    name: "Inventories",
    icon: <InventoryIcon />,
    key: "inventories",
    path: "/inventories"
  }
];


// const menuItems = [
  // InventoryItems
// ]

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function DrawerComponent(props) {
  const theme = useTheme();

  // const handleDrawerClose = () => {
    //  props.setOpen(false);
    // toggleApp(false);
  // };

  return (
    <Drawer variant="permanent" open={props.open}>
      <DrawerHeader>
        <IconButton onClick={props.setOpen}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {InventoryItems.map((inventory, index) => (
          <ListItem key={inventory.key} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              to={inventory.path}
              sx={{
                minHeight: 48,
                justifyContent: props.open ? 'initial' : 'center',
                px: 2.5,
              }}    
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: props.open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {inventory.icon}
              </ListItemIcon>
              <ListItemText primary={inventory.name} sx={{ opacity: props.open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </Drawer>
  );
}

const MemoizedDrawerComponent = React.memo(DrawerComponent);

export default MemoizedDrawerComponent;