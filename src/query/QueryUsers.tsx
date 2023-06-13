import { useQuery } from "@tanstack/react-query";
import { getEmployee } from "../hooks/getEmployee";

export default function QueryUsers () {
    
    return useQuery( {
        queryKey: [ "user-all" ],
        queryFn: getEmployee,
    } )

}