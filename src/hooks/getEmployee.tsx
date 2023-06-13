import axios from "axios";

export const getEmployee = async () => {
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

    try {
        const response = await axios.get( "http://59.152.62.177:8085/api/Employee/EmployeeData"
        );
        return response.data;
    } catch ( error ) {
        console.log( error );
    }

}

