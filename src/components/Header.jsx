import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import {
    Add as AddIcon,
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon,
    Menu as MenuIcon,
} from '@mui/icons-material';

import { useApp } from '../AppProvider';

export default function Header() {
    const { showForm, setShowForm, mode, setMode, setShowDrawer } = useApp();
    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <IconButton onClick={() => setShowDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography>App</Typography>
                </Box>
                <Box>
                    <IconButton
                        color="inherit"
                        onClick={() => setShowForm(!showForm)}>
                        <AddIcon />
                    </IconButton>
                    {/* change theme with condition */}
                    {mode == 'dark' ? (
                        <IconButton
                            color="inherit"
                            onClick={() => {
                                setMode('light');
                            }}>
                            <LightModeIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            color="inherit"
                            onClick={() => {
                                setMode('dark');
                            }}>
                            <DarkModeIcon />
                        </IconButton>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
