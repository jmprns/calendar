// import React from "react";

const Input = ({type, label, register}) => {
    return (
        <>
            <label
                className="block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <input
                ref={register}
                type={type}
                className="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </>
    );
};

export default Input;
