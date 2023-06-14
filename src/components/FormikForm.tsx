import {
    Box,
    Button,
    Grid,
    Paper,
    TextField,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
// import { YupValidation } from "../Validation/YupValidate";
import * as yup from "yup";

const BasicFormValidation = () => {
    type Props = {
        district: string,
        division: string,
        employeeType: string,
        firstName: string,
        lastName: string,
    }
    const initialValue: Props = {
        district: '',
        division: '',
        employeeType: '',
        firstName: '',
        lastName: '',

    };

    const validate = yup.object().shape( {

        firstName: yup
            .string()
            .min( 3, "Too Short !" )
            .max( 60, "Too Long !" )
            .required( "Required !" ),

        lastName: yup
            .string()
            .min( 3, "Too Short !" )
            .max( 60, "Too Long !" )
            .required( "Required !" ),

        division: yup
            .string()
            .min( 3, "Too Short !" )
            .max( 60, "Too Long !" )
            .required( "Required !" ),

        district: yup
            .string()
            .min( 3, "Too Short !" )
            .max( 60, "Too Long !" )
            .required( "Required !" ),


        employeeType: yup
            .string()
            .min( 3, "Too Short !" )
            .max( 60, "Too Long !" )
            .required( "Required !" ),

    } );

    const handleSubmit = ( values: unknown ) => {
        console.log( values );
        // console.log( JSON.stringify( values ) );
        // props.resetForm();
    };

    return (
        <Grid container>
            <Grid item sm={ 3 } xs={ false }></Grid>
            <Grid item sm={ 6 } xs={ 12 }>
                <Paper>
                    <Box>
                        <Formik
                            initialValues={ initialValue }
                            onSubmit={ handleSubmit }
                            validationSchema={ validate }
                        >
                            { ( props ) => {
                                // const { firstName } = props.values;
                                return (
                                    <Form>
                                        {/* First Way */ }
                                        <Field
                                            as={ TextField }
                                            label="First Name"
                                            name="firstName"
                                            fullWidth
                                            variant="outlined"
                                            margin="dense"
                                            helperText={ <ErrorMessage name="firstName" /> }
                                            required
                                            InputLabelProps={ {
                                                sx: {
                                                    color: "cornsilk",
                                                }
                                            } }

                                            sx={ {
                                                color: "cornsilk",
                                                ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "white"
                                                },
                                                "input": {
                                                    color: "cornsilk"
                                                }
                                            } }

                                            error={ props.errors.firstName && props.touched.firstName }
                                        />
                                        {/* Second Way */ }
                                        <Field
                                            as={ TextField }
                                            label="Last Name"
                                            type="text"
                                            name="lastName"
                                            fullWidth
                                            variant="outlined"
                                            margin="dense"
                                            required
                                            InputLabelProps={ {
                                                sx: {
                                                    color: "cornsilk"
                                                }
                                            } }

                                            sx={ {
                                                color: "cornsilk",
                                                ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "white"
                                                },
                                                "input": {
                                                    color: "cornsilk"
                                                }
                                            } }
                                            helperText={ <ErrorMessage name="lastName" /> }
                                            error={ props.errors.lastName && props.touched.lastName }
                                        />

                                        <Field
                                            as={ TextField }
                                            label="Role"
                                            name="employeeType"
                                            fullWidth
                                            variant="outlined"
                                            margin="dense"
                                            required
                                            InputLabelProps={ {
                                                sx: {
                                                    color: "cornsilk",
                                                    ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "white"
                                                    },
                                                }
                                            } }

                                            sx={ {
                                                color: "cornsilk",
                                                ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "white"
                                                },
                                                "input": {
                                                    color: "cornsilk"
                                                }
                                            } }
                                            helperText={ <ErrorMessage name="employeeType" /> }
                                            error={
                                                props.errors.employeeType && props.touched.employeeType
                                            }
                                        />

                                        <Field
                                            as={ TextField }
                                            label="Division"
                                            name="division"
                                            type="text"
                                            fullWidth
                                            variant="outlined"
                                            margin="dense"
                                            required
                                            InputLabelProps={ {
                                                sx: {
                                                    color: "cornsilk",
                                                    ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "white"
                                                    },
                                                }
                                            } }

                                            sx={ {
                                                color: "cornsilk",
                                                ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "white"
                                                },
                                                "input": {
                                                    color: "cornsilk"
                                                }
                                            } }
                                            helperText={ <ErrorMessage name="division" /> }
                                            error={ props.errors.division && props.touched.division }
                                        />

                                        <Field
                                            as={ TextField }
                                            label="District"
                                            name="district"
                                            type="text"
                                            fullWidth
                                            variant="outlined"
                                            margin="dense"
                                            required
                                            InputLabelProps={ {
                                                sx: {
                                                    color: "cornsilk",
                                                }
                                            } }

                                            sx={ {
                                                color: "cornsilk",
                                                ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "white"
                                                },
                                                "input": {
                                                    color: "cornsilk"
                                                }
                                            } }
                                            helperText={ <ErrorMessage name="district" /> }
                                            error={
                                                props.errors.district &&
                                                props.touched.district
                                            }
                                        />

                                        <Button
                                            variant="contained"
                                            type="submit"
                                            color="primary"
                                            fullWidth
                                            sx={ {
                                                py: 2,
                                                mt: 2
                                            } }
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                );
                            } }
                        </Formik>
                    </Box>
                </Paper>
            </Grid>
            <Grid item sm={ 3 } xs={ false }></Grid>
        </Grid>
    );
};

export default BasicFormValidation;
