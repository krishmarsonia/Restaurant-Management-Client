import React from "react"


const LoadingHook = (props) => {
    const {isLoading} = props;
    if(isLoading){
        return <h2>Loding..</h2>
    }else{
        return <>{props.children}</>
    }
}

export default LoadingHook;