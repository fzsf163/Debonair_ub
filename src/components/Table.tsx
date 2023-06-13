type Props = {
    onlyAdmin: []
}
type userDataProps = {
    districeID: number,
    district: string,
    disvision: string,
    divisionId: number,
    empID: number,
    employeeType: string,
    firstName: string,
    lastName: string
}
export default function DataTable ( { onlyAdmin }: Props ) {


    return (
        <div>
            <h1>{ onlyAdmin?.length }</h1>
            {
                onlyAdmin?.map( ( user: userDataProps ) => (
                    <p key={ user.empID }>{ user.districeID }</p>
                ) )
            }
        </div>
    )


}