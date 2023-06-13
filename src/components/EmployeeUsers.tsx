import { Box } from '@mui/material';
import QueryUsers from '../query/QueryUsers';

export default function EmployeeUsers () {

    const { data } = QueryUsers();

    // interface userDataProps {
    //     districeID: number,
    //     district: string,
    //     disvision: string,
    //     divisionId: number,
    //     empID: number,
    //     employeeType: string,
    //     firstName: string,
    //     lastName: string
    // }

    const userCount: number = data?.readEmployeeData?.length;

    const userData = data?.readEmployeeData;

    console.log( data );

    const onlyEmployee = userData?.filter( ( user: { employeeType: string; } ) => user.employeeType === "Employee" );
    return (

        <div>
            <Box flexDirection={'column'}>
                <h1>Users: { userCount } </h1>
                <h1>Employee user : { onlyEmployee.length }</h1>
            </Box>
        </div>
    )
}