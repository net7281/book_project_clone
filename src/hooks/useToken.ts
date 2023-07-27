import {useSelector} from "react-redux";
import {RootState} from "../redux/modules/rootReducer";

export const useToken = () =>{
    return useSelector<RootState, string | null>(
        (state) => state.auth.token
    )
}