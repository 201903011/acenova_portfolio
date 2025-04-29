"use client";

import { SkillCardProps } from "@/types/skill_card_props";
import { Card } from "flowbite-react";
import Image from "next/image";
import { FC } from "react";

const SkillCard: FC<SkillCardProps> = function (values) {
    const {
        icon: Icon,
        title,
        description,
        isViewMore = false,
    } = values;
    return (
        <Card>
            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
                <svg
                    className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {Icon && <Icon className="h-10 w-10" />}
                    {/* <Image src={iconSrc} alt="" width={100} height={100} />
                    <img src={iconSrc} alt="Icon" className="h-full w-full object-contain" /> */}
                </svg>
            </div>
            <h3 className="text-xl font-bold dark:text-white">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400">
                {description}
            </p>
        </Card>
    );
}


export default SkillCard;