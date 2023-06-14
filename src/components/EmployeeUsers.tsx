import { Box } from '@mui/material';
import QueryUsers from '../query/QueryUsers';
import EmployeeTable from './EmployeeTable';


export default function EmployeeUsers () {

    const { data, isLoading } = QueryUsers();

    const userCount: number = data?.readEmployeeData?.length;

    const userData = data?.readEmployeeData;

    // console.log( data );

    const onlyEmployee = userData?.filter( ( user: { employeeType: string; } ) => user.employeeType === "Employee" );
    return (

        <div>
            <Box flexDirection={ 'column' }>
                <h1>Users: { userCount } </h1>
                {
                    !isLoading ?
                        <Box sx={ { m: 3, p: 2, border: 1, borderRadius: 3 } }>
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