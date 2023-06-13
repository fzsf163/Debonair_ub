import {
    useQuery,
} from '@tanstack/react-query'


import { getEmployee } from '../hooks/getEmployee'

export default function EmployeeUsers () {

    const { data} = useQuery( {
        queryKey: [ "user-all" ],
        queryFn: getEmployee,
    } )

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

    const onlyEmployee = userData.filter( ( user: { employeeType: string; } ) => user.employeeType === "Employee" );
    return (

        <div>
            <h1>user length: { userCount } </h1>
            <h1>Employee user : { onlyEmployee.length }</h1>
        </div>
    )
}