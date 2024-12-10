import { createContext, useContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

import App from './App';

const AppContext = createContext();

export function useApp() {
    return useContext(AppContext);
}

export default function AppProvider() {
    const [showForm, setShowForm] = useState(false);
    const [auth, setAuth] = useState(false); // Add auth state
    // create mode
    const [mode, setMode] = useState('light');
    const [showDrawer, setShowDrawer] = useState(false);
    // use Memo because when change something dont want to change theme and run one time
    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode,
            },
        });
    }, [mode]);

    return (
        <AppContext.Provider
            value={{
                showForm,
                setShowForm,
                mode,
                setMode,
                showDrawer,
                setShowDrawer,
                auth,
                setAuth,
            }}>
            <ThemeProvider theme={theme}>
                <App />
                <CssBaseline />
            </ThemeProvider>
        </AppContext.Provider>
    );
}
