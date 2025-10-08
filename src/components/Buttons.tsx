import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ButtonProps {
    label: string;
    icon?: IconProp;
    hollow?: boolean;
    fullWidth?: boolean;
    action?: () => void;
    dark?: boolean;
}

export const STEMButton = ({ icon, label, hollow, fullWidth, dark, action }: ButtonProps) => {
    return (
        <button
            onClick={action}
            className={`group/button ${fullWidth ? "w-full" : "w-fit"} ${icon && 'pr-6'} ${dark ? 'outline-blue' : 'outline-white'} flex flex-row gap-2 items-center group relative outline-2 w-fit rounded-full p-2 hover:outline-4 hover:outline-offset-8 hover:cursor-pointer duration-300`}
        >
            {icon ? (
                <div className="h-6 w-6 aspect-square relative z-10 group-hover:bg-white text-white group-hover:text-periwinkle p-4 rounded-full duration-300 flex flex-row gap-2 items-center justify-center">
                    <FontAwesomeIcon icon={icon} className="relative z-20 text-2xl group-hover:text-lg group-hover/button:-rotate-15 duration-300" />
                </div>  
            ) : null}


            <p className="relative flex-1 z-20 font-bold text-nowrap text-xl uppercase text-white">
                {label}
            </p>

            {hollow ? (
                <div className="absolute z-0 top-0 left-0 w-full h-full rounded-full bg-blue opacity-0 group-hover:opacity-20 duration-300" />
            ) :(
                <div className="absolute z-0 top-0 left-0 w-full h-full rounded-full bg-blue duration-300" />
            )}
        </button>
    )
}