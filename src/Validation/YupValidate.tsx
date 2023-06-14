
import * as yup from "yup";

export const YupValidation = yup.object().shape( {
    firstName: yup
        .string()
        .min( 3, "Too Short !" )
        .max( 30, "Too Long !" )
        .required( "Required !" ),

    lastName: yup
        .string()
        .min( 3, "Too Short !" )
        .max( 30, "Too Long !" )
        .required( "Required !" ),

    division: yup
        .string()
        .required( "Required !" ),

    district: yup
        .string()
        .required( "Required !" ),

    role: yup
        .string()
        .required( "Required !" ),

} );
