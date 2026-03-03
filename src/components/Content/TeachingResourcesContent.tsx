import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { STEMButton } from "../Buttons";
import { faBasketball, faCartPlus, faDownload, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import Image from "next/image";

export const TeachingResourcesContent = () => {
    const resources = [
        {
            image: "/images/TeacherResources/Career Exploration thumnail.png",
            alt: "Career Exploration Thumbnail",
        },
        {
            image: "/images/TeacherResources/EHL lesson.png",
            alt: "EHL Lesson Thumbnail"
        },
        {
            image: "/images/TeacherResources/FSML math extension.png",
            alt: "FSML Math Extension Thumbnail"
        },
        {
            image: "/images/TeacherResources/FSML STEAM extension.png",
            alt: "FSML STEAM Extension Thumbnail"
        },
        {
            image: "/images/TeacherResources/gridirn photo.jpeg",
            alt: "Gridiron Thumbnail"
        }
    ];

    return (
        <div className="flex flex-col gap-8 items-center w-full lg:max-w-4/5">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-col lg:flex-row justify-center items-start w-full">
                {resources.map((resource, index) => (
                    <li key={index} className="flex flex-col items-center p-4 hover:pt-0 hover:pb-8 hover:rotate-3 duration-300">
                        <Link
                            href="https://www.teacherspayteachers.com/store/stemplay-labs"
                            target="_blank"
                        >
                            <Image
                                src={resource.image}
                                alt={resource.alt}
                                width={1080}
                                height={720}
                                className={`aspect-square rounded-md object-center text-white flex justify-center items-center text-center shadow-lg`}
                            />
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="flex flex-col-reverse lg:flex-row gap-4 items-center w-full p-4">
                <Link
                    href="https://dhxaj.share.hsforms.com/2whQ6o7biT-a_z9Ytybv7Ig"
                    target="_blank"
                >
                    <Image
                        src={"/images/TeacherResources/BasketballCurriculum.png"}
                        alt={"Basketball Curriculum Thumbnail"}
                        width={420}
                        height={320}
                        className={`aspect-square rounded-md object-center text-white flex justify-center items-center text-center shadow-lg`}
                    />
                </Link>

                <div className="flex-1 flex flex-col gap-4 items-center justify-center lg:items-end">
                    <h3 className="text-2xl font-bold text-center lg:text-right">
                        Try Our Basketball Curriculum!
                    </h3>
                    
                    <div className="bg-periwinkle px-4 py-2 rounded-sm">
                        <p className="text-white"><span className="font-bold">FREE</span> until March 18</p>
                    </div>
                    <p className="text-center lg:text-right">
                        Experience the engaging, real-world application of our curriculum with a free basketball-themed lesson plan designed to get your students moving and learning
                    </p>

                    <STEMButton
                        label={"Basketball Lessons"}
                        icon={faBasketball}
                        action={() => { window.open("https://dhxaj.share.hsforms.com/2whQ6o7biT-a_z9Ytybv7Ig", "_blank") }}
                    />
                </div>
            </div>

        </div>
    )
}