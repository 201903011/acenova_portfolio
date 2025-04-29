"use client"
import { quickLinks } from "@/data/navlink";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";



const HomeQLink: FC = function () {
    return (
        //     <div className="relative w-full overflow-hidden dark:bg-gray-900 dark:text-white py-6">
        //         <div className="scrolling-wrapper flex space-x-12">
        //             {/* Repeat the links twice for infinite scroll effect */}
        //             {[...Array(2)].map((_, index) => (
        //                 <div key={index} className="flex space-x-12">
        //                     {Object.values(quickLinks).map(({ name, href, icon }, index) => {
        //                         const Icon = icon ?? <></>;
        //                         return (
        //                             <Link
        //                                 key={`${name}-${index}`}
        //                                 href={href}
        //                                 className="flex items-center gap-2 text-2xl font-bold hover:text-blue-400 transition"
        //                             >
        //                                 {Icon && <Icon className="h-10 w-10" />}
        //                                 {/* {name} */}
        //                             </Link>
        //                         );
        //                     })}
        //                 </div>
        //             ))}
        //         </div>

        //         <style jsx>{`
        //     @keyframes scroll {
        //       0% {
        //         transform: translateX(0);
        //       }
        //       100% {
        //         transform: translateX(-50%);
        //       }
        //     }
        //     .scrolling-wrapper {
        //       width: 200%;
        //       animation: scroll 10s linear infinite;
        //     }
        //   `}</style>
        //     </div>
        <>
        </>
    );
};

export default HomeQLink;
