import {FallbackProps} from "react-error-boundary";

const Error = ({error}:FallbackProps)=>{
    if (error === undefined){
        return (
            <div>알수없는 에러</div>
        )
    }

    return (
        <div>
            <h1>{`${error.message()}의 에러가 발생`}</h1>
        </div>
    );
}

export default Error;