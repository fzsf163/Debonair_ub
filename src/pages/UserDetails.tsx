import { Box, IconButton } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import EditProfile from '@mui/icons-material/BorderColorOutlined';
import { useState } from 'react'
import UpdateForm from "../components/UpdateForm";

type UserProps = {
    districeID: number,
    district: string,
    disvision: string,
    divisionId: number,
    empID: number,
    employeeType: string,
    firstName: string,
    lastName: string
}
export default function UserDetails () {

    const data = useLoaderData();
    const user: UserProps = data.readEmployeeData[ 0 ];

    const [ edit, setEdit ] = useState( false );

    return (
        <Box sx={ {
            width: '50%',
            textAlign: 'left',
            mx: 'auto',
            mt: 6,
            p: 4,
            borderRadius: 2,
            border: 1,
        } }>
            <Box sx={ {
                display: "flex",
                alignItems: 'center',
                justifyContent: 'start',
                gap: 3
            } }>
                <h1>User Details</h1>
                <IconButton aria-label="edit" onClick={ () => setEdit( !edit ) } >
                    <EditProfile sx={ {
                        color: "cornsilk",
                        fontSize: 35
                    } }></EditProfile>
                </IconButton>
            </Box>
            {
                edit ?
                    <div>
                        <h2>Name: { user.firstName } { user.lastName }</h2>
                        <Box sx={
                            {
                                fontSize: 20,
                            }
                        }>
                            <p>Role: { user.employeeType }</p>
                            <p>District: { user.district } </p>
                            <p>Division: { user.disvision }</p>
                        </Box>
                    </div>
                    :
                    <Box sx={ {
                        ".MuiPaper-root": {

                            backgroundColor: 'transparent'
                        }
                    } }>
                        <UpdateForm id={ user.empID }></UpdateForm>
                    </Box>
            }

        </Box>
    )
}