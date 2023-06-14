import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AddPerson from '@mui/icons-material/PersonAddOutlined';
import { IconButton } from '@mui/material';

export default function FormModal () {
    const [ open, setOpen ] = React.useState( false );
    const theme = useTheme();
    const fullScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    const handleClickOpen = () => {
        setOpen( true );
    };

    const handleClose = () => {
        setOpen( false );
    };

    return (
        <div>
            <IconButton onClick={ handleClickOpen }>
                <AddPerson sx={ { color: "cornsilk", fontSize: 35 } }></AddPerson>
            </IconButton>
            <Dialog
                fullScreen={ fullScreen }
                open={ open }
                onClose={ handleClose }
                aria-labelledby="responsive-dialog-title"
                sx={ {
                    backgroundColor: "transparent",
                    ".MuiPaper-root": {
                        backgroundColor: "rgb(2, 19, 51)",
                        color: "cornsilk"
                    },
                    ".MuiDialogContentText-root": {
                        color: "cornsilk"
                    },
                    ".MuiButton-text": {
                        color: 'cornsilk'
                    }
                } }
            >
                <DialogTitle id="responsive-dialog-title">
                    { "Add a User" }
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <input type='text'></input>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={ handleClose }>
                        Cancel
                    </Button>
                    <Button onClick={ handleClose } autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}