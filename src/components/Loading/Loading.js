import React from "react";
import loadingStyles from "./loading.module.css";

const Loading = () => {
    return (
        <div className={loadingStyles.wrapper}>
            <div className={loadingStyles.loader}></div>
        </div>
    );
};

export default Loading;
