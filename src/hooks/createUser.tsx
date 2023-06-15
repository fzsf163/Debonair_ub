// http://59.152.62.177:8085/api/SaveEmployeeInformation

import axios from "axios";
type Props = {
    district: string,
    division: string,
    employeeType: string,
    firstName: string,
    lastName: string,
}
export const createUser = async ( user: Props ) => {

    // console.log( "From axios", user );

    try {
        const response = await axios.post( " http://59.152.62.177:8085/api/Employee/SaveEmployeeInformation", {
            user
        }
        );
        console.log( response.data );
    } catch ( error ) {
        alert( error );
    }

}