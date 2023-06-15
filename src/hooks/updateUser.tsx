import axios from "axios";

export const updateUser = async ( id: any , userDetails: any ) => {


    try {
        const response = await axios.post( `http://59.152.62.177:8085/api/Employee/UpdateEmployeeInformation/${ id }`,{
            userDetails
        }
        );
        return response.data;
    } catch ( error ) {
        console.log( error );
    }

}

