import { useMutation } from "@tanstack/react-query";
import { createUser } from "../hooks/createUser";


export default function QueryUsers ( ) {

    return useMutation( createUser, {
        onSuccess: data => {
            console.log( data );
        },
    } )

}