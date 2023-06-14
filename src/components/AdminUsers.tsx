
import QueryUsers from "../query/QueryUsers";
// import DataTable from "./Table";
import AdminTable from "./AdminTable";
import { Box } from '@mui/material';

export default function AdminUsers () {

    const { data, isLoading } = QueryUsers();

    const userCount: number = data?.readEmployeeData?.length;

    const userData = data?.readEmployeeData;

    const onlyAdmin = userData?.filter( ( user: { employeeType: string; } ) => user.employeeType === "Admin" );

    // console.log( onlyAdmin );

    return (

        <div>
            <h1>Users: { userCount } </h1>
            {/* <h1>admin user : { onlyAdmin?.length }</h1> */ }

            {
                !isLoading ?
                    <Box sx={ { m: 3, p: 2, border: 1, borderRadius: 2 } }>
                        <AdminTable onlyAdmin={ onlyAdmin }></AdminTable>
                    </Box>
                    :
                    <Box sx={ { m: 3, p: 2, textAlign: "center" } } >
                        <h2>Loading...</h2>
                    </Box>

            }
        </div>
    )
}