/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */

import React from "react";

const Field = ({label, children, htmlFor , error}) => {

    const id = htmlFor || getChildId(children)

    return (
        <div className="flex flex-col items-start justify-start mt-2 mb-2 p-0 w-full ">
           { label && <label className="text-white mb-1 text-[20px]"  htmlFor={id}>{label}</label>}
           {children}
           {error && <div className="text-red-400 text-[18px]">{error.message}*</div>}
        </div>
    );
};

const getChildId =(children)=>{

   const child  = React.Children.only(children)

    if("id" in child?.props){ 
        
        return child.props.id
    }
}

export default Field;