import React from "react";

const Template = ({children}) => {
    return (
        <div>
            <div>오늘의 할일 (0)</div>
            <div>{children}</div>
        </div>
    );
};

export default Template;