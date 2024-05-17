import {useMutation} from "@tanstack/react-query";
import * as UserService from "../service/UserService";

export  const useMutationHooks = (fnCallback) => {
    const mutation = useMutation({
        mutationFn: fnCallback
    })
    return mutation;
}