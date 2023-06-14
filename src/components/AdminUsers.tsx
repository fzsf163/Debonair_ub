import QueryUsers from "../query/QueryUsers";
// import DataTable from "./Table";
import AdminTable from "./AdminTable";
import { Box } from '@mui/material';

import FormModal from "./FormModal";

export default function AdminUsers () {

    const { data, isLoading } = QueryUsers();

    // const userCount: number = data?.readEmployeeData?.length;

    const userData = data?.readEmployeeData;

    const onlyAdmin = userData?.filter( ( user: { employeeType: string; } ) => user.employeeType === "Admin" );

    // console.log( onlyAdmin );

    return (

        <div>
            <Box sx={ { m: 3, p: 2, display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 4 } }>
                <h2>Admin Users: { onlyAdmin?.length } </h2>
                <div>
                    |
                </div>
                <FormModal></FormModal>
            </Box>

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