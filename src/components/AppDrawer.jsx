import { useApp } from '../AppProvider';

import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@mui/material';

import {
    Home as HomeIcon,
    Person as ProfileIcon,
    PersonAdd as RegisterIcon,
    Login as LoginIcon,
    Logout as LogoutIcon,
} from '@mui/icons-material';
import { grey } from '@mui/material/colors';

export default function AppDrawer() {
    const { showDrawer, setShowDrawer, auth, setAuth } = useApp();

    const toggleDrawer = (newOpen) => () => {
        setShowDrawer(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={toggleDrawer(false)}>
            <Box sx={{ height: 200, background: grey[500] }}></Box>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                            <ListItemText primary="Home" />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            {auth && (
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ProfileIcon />
                                <ListItemText primary="Profile" />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setAuth(false)}>
                            <ListItemIcon>
                                <LogoutIcon />
                                <ListItemText primary="logout" />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            )}
            {!auth && (
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <RegisterIcon />
                                <ListItemText primary="Register" />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => setAuth(true)}>
                            <ListItemIcon>
                                <LoginIcon />
                                <ListItemText primary="Login" />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            )}
        </Box>
    );

    return (
        <div>
            <Drawer open={showDrawer} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
