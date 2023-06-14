import { Box } from '@mui/material';
import QueryUsers from '../query/QueryUsers';
import EmployeeTable from './EmployeeTable';

import FormModal from './FormModal';


export default function EmployeeUsers () {

    const { data, isLoading } = QueryUsers();

    // const userCount: number = data?.readEmployeeData?.length;

    const userData = data?.readEmployeeData;

    // console.log( data );

    const onlyEmployee = userData?.filter( ( user: { employeeType: string; } ) => user.employeeType === "Employee" );
    return (

        <div>
            <Box sx={ { m: 3, p: 2, display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 4 } }>
                <h2>Employee Users: { onlyEmployee?.length }  </h2>
                <div>
                    |
                </div>
                <FormModal></FormModal>
            </Box>
            <Box>

                {
                    !isLoading ?
                        <Box sx={ { m: 3, p: 2, border: 1, borderRadius: 2 } }>
                            <EmployeeTable onlyEmployee={ onlyEmployee }></EmployeeTable>
                        </Box>
                        :
                        <Box sx={ { m: 3, p: 2, textAlign: "center" } } >
                            <h2>Loading...</h2>
                        </Box>
                }
            </Box>
        </div>
    )
}