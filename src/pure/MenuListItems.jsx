import { AccessAlarm, Home, Settings } from '@mui/icons-material'
import { IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Navigate } from 'react-router-dom'

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return <Home />
        case 'TASKS':
            return <Home />
        case 'TASKS':
            return <Tasks />
        default:
            return <Home />;
    }
}
const MenuListItems = ({list}) => {

  return (
    <List>
        {list.map(({item, path, icon}, index) => (
            <ListItem key={index} onClick={() => <Navigate to={path} />}>
                <ListItemIcon>
                    {getIcon(icon)}
                </ListItemIcon>
                <ListItemText primary={text}/>

            </ListItem>
        )
        )}
    </List>
  )
}

export default MenuListItems