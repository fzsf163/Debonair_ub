import QueryUsers from "../query/QueryUsers";


export default function AdminUsers () {

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

    const onlyAdmin = userData.filter( ( user: { employeeType: string; } ) => user.employeeType === "Admin" );

    return (

        <div>
            <h1>user length: { userCount } </h1>
            <h1>admin user : { onlyAdmin.length }</h1>
        </div>
    )
}