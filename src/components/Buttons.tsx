import React from "react";

interface ButtonProps {
    label: string;
    hollow?: boolean;
    fullWidth?: boolean;
    action?: () => void;
}

export const STEMButton = ({ label, hollow, fullWidth, action }: ButtonProps) => {
    return (
        <button
            onClick={action}
            className={`${fullWidth ? "w-full" : "w-fit"} group relative ring-2 ring-white w-fit rounded-full  px-8 py-4 hover:ring-4 hover:cursor-pointer duration-300`}
        >
            <p className="relative z-20 font-bold text-white text-nowrap">
                {label}
            </p>
            
            {/* {!hollow && (
                <div className="absolute z-10 top-0 left-0 w-full h-full rounded-full bg-white opacity-0 group-hover:opacity-10 duration-300" />
            )} */}

            {!hollow && (
                <div className="absolute z-0 top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-blue to-periwinkle group-hover:brightness-125 duration-300" />
            )}
        </button>
    )
}