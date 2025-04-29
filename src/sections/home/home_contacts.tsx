import { contactItems } from "@/data/homepage";
import type { FC } from "react";


const HomeContacts: FC = function () {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="pt-16 pb-16 text-center flex flex-row justify-center gap-x-12">
                {contactItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index}>
                            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 lg:h-16 lg:w-16">
                                <Icon className="h-5 w-5 text-gray-600 dark:text-gray-500 lg:h-8 lg:w-8" />
                            </div>
                            <p className="mb-2 text-xl font-bold dark:text-white">{item.title}</p>
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="font-semibold text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    {item.value}
                                </a>
                            ) : (
                                <span className="font-semibold text-primary-600 dark:text-primary-500">
                                    {item.value}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default HomeContacts;
