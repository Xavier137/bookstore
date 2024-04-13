import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Menu } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const PAGES = ['HOME','PRODUCTS','ABOUT US','CONTACT US','LOGIN','SIGNUP']
const DrawerComp = () => {
const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
              {PAGES.map((page, index)=>(
                <ListItemButton onClick={() =>setOpenDrawer(false)} key={index}>
                <ListItemIcon>
                    <ListItemText>{page}</ListItemText>
                </ListItemIcon>
            </ListItemButton>
              )
              )}
                
            </List>
        </Drawer >
        <IconButton  sx={{color: 'green', marginLeft: 'auto'}}
        onClick={() => setOpenDrawer(!openDrawer)}>
      <MenuIcon/>
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp;
