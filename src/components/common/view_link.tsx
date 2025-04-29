import { FC } from "react";


const ViewLink: FC<{ href: string, text: string, padding?: string }> = function ({ href, text, padding }) {
    return (
        <p className={padding ?? "text-center mt-8"}>
            <a
                href={href}
                className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
            >
                {text}&nbsp;
                <svg
                    className="ml-1 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </a>
        </p>
    );

}

export default ViewLink;