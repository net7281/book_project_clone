import {Navigate} from "react-router-dom";


const Home = ()=>{
    const token = useToken();

    if(token === null){
        return <Navigate replace to= '/singin'/>
    }
    return <ListContainer/>;
};

export default Home;