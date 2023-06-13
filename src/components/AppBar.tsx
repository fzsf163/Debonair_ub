import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

export default function DenseAppBar () {

    return (
        <Box sx={ { flexGrow: 1 } }>
            <AppBar position="static" sx={ { backgroundColor: "inherit" } }>
                <Toolbar variant="dense" sx={ { p: 2 } }>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={ { mr: 2 } }>
                        <HomeIcon sx={ {
                            fontSize: '29px'
                        } } />
                    </IconButton>
                    <Typography variant="h6" color="inherit" fontSize={ 29 } component="div">
                        Home
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}