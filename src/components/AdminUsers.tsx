
import QueryUsers from "../query/QueryUsers";
import DataTable from "./Table";



export default function AdminUsers () {

    const { data } = QueryUsers();

    const userCount: number = data?.readEmployeeData?.length;

    const userData = data?.readEmployeeData;

    console.log( userData );

    const onlyAdmin = userData?.filter( ( user: { employeeType: string; } ) => user.employeeType === "Admin" );

    console.log( onlyAdmin );

    return (

        <div>
            <h1>Users: { userCount } </h1>
            <h1>admin user : { onlyAdmin?.length }</h1>
            <DataTable onlyAdmin={ onlyAdmin }></DataTable>
        </div>
    )
}