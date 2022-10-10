import React from "react";

interface IconProps {
    className?: string
}

export function Logo({ className }: IconProps) {
    return (
        <svg
            height="60"
            width="169"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g>
                <path
                    d="M12.2 36.5c-2.667 0-4.683-.75-6.05-2.25-1.367-1.533-2.05-3.717-2.05-6.55v-2h5.2v2.4c0 2.267.95 3.4 2.85 3.4.933 0 1.633-.267 2.1-.8.5-.567.75-1.467.75-2.7 0-1.467-.333-2.75-1-3.85-.667-1.133-1.9-2.483-3.7-4.05-2.267-2-3.85-3.8-4.75-5.4-.9-1.633-1.35-3.467-1.35-5.5 0-2.767.7-4.9 2.1-6.4C7.7 1.267 9.733.5 12.4.5c2.633 0 4.617.767 5.95 2.3 1.367 1.5 2.05 3.667 2.05 6.5v1.45h-5.2v-1.8c0-1.2-.233-2.067-.7-2.6-.467-.567-1.15-.85-2.05-.85-1.833 0-2.75 1.117-2.75 3.35a6.73 6.73 0 001 3.55c.7 1.1 1.95 2.433 3.75 4 2.3 2 3.883 3.817 4.75 5.45s1.3 3.55 1.3 5.75c0 2.867-.717 5.067-2.15 6.6-1.4 1.533-3.45 2.3-6.15 2.3zM28.953 6h-5.75V1h17v5h-5.75v30h-5.5V6zm22.913 30.5c-2.666 0-4.7-.75-6.1-2.25-1.4-1.533-2.1-3.717-2.1-6.55V1h5.5v27.1c0 1.2.234 2.067.7 2.6.5.533 1.2.8 2.1.8.9 0 1.584-.267 2.05-.8.5-.533.75-1.4.75-2.6V1h5.3v26.7c0 2.833-.7 5.017-2.1 6.55-1.4 1.5-3.433 2.25-6.1 2.25zM64.984 1h8.4c2.733 0 4.783.733 6.15 2.2 1.366 1.467 2.05 3.617 2.05 6.45v17.7c0 2.833-.684 4.983-2.05 6.45-1.367 1.467-3.417 2.2-6.15 2.2h-8.4V1zm8.3 30c.9 0 1.583-.267 2.05-.8.5-.533.75-1.4.75-2.6V9.4c0-1.2-.25-2.067-.75-2.6-.467-.533-1.15-.8-2.05-.8h-2.8v25h2.8zm17.183-9.9L83.817 1h5.85l3.75 12.85h.1L97.267 1h5.35l-6.65 20.1V36h-5.5V21.1zM106.095 1h14.55v5h-9.05v9.75h7.1v5h-7.1V36h-5.5V1zm18.187 0h5.5v30h9.05v5h-14.55V1zm18.188 0h5.5v35h-5.5V1zm15.469 17.1L151.889 1h5.8l3.7 11.3h.1l3.8-11.3h5.2l-6.05 17.1 6.35 17.9h-5.8l-4-12.2h-.1l-4.1 12.2h-5.2l6.35-17.9z"
                    fill="#FF1010"
                />
            </g>
            <defs />
        </svg>
    );
}

export function Bell({ className }: IconProps) {
    return (
        <svg
            height="30"
            width="30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M22.5 10a7.5 7.5 0 00-15 0c0 8.75-3.75 11.25-3.75 11.25h22.5S22.5 18.75 22.5 10zM17.163 26.25a2.5 2.5 0 01-4.325 0"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    )
}

export function StudyFlixTitle({ className }: IconProps) {
    return (
        <svg
            height="144"
            width="405"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g>
                <path
                    d="M24.08 87.2c-6.4 0-11.24-1.8-14.52-5.4-3.28-3.68-4.92-8.92-4.92-15.72v-4.8h12.48v5.76c0 5.44 2.28 8.16 6.84 8.16 2.24 0 3.92-.64 5.04-1.92 1.2-1.36 1.8-3.52 1.8-6.48 0-3.52-.8-6.6-2.4-9.24-1.6-2.72-4.56-5.96-8.88-9.72-5.44-4.8-9.24-9.12-11.4-12.96-2.16-3.92-3.24-8.32-3.24-13.2 0-6.64 1.68-11.76 5.04-15.36C13.28 2.64 18.16.8 24.56.8c6.32 0 11.08 1.84 14.28 5.52 3.28 3.6 4.92 8.8 4.92 15.6v3.48H31.28v-4.32c0-2.88-.56-4.96-1.68-6.24-1.12-1.36-2.76-2.04-4.92-2.04-4.4 0-6.6 2.68-6.6 8.04 0 3.04.8 5.88 2.4 8.52 1.68 2.64 4.68 5.84 9 9.6 5.52 4.8 9.32 9.16 11.4 13.08S44 60.56 44 65.84c0 6.88-1.72 12.16-5.16 15.84-3.36 3.68-8.28 5.52-14.76 5.52zM64.288 14h-13.8V2h40.8v12h-13.8v72h-13.2V14zm54.991 73.2c-6.4 0-11.28-1.8-14.64-5.4-3.36-3.68-5.04-8.92-5.04-15.72V2h13.2v65.04c0 2.88.56 4.96 1.68 6.24 1.2 1.28 2.88 1.92 5.04 1.92s3.8-.64 4.92-1.92c1.2-1.28 1.8-3.36 1.8-6.24V2h12.72v64.08c0 6.8-1.68 12.04-5.04 15.72-3.36 3.6-8.24 5.4-14.64 5.4zM150.761 2h20.16c6.56 0 11.48 1.76 14.76 5.28 3.28 3.52 4.92 8.68 4.92 15.48v42.48c0 6.8-1.64 11.96-4.92 15.48-3.28 3.52-8.2 5.28-14.76 5.28h-20.16V2zm19.92 72c2.16 0 3.8-.64 4.92-1.92 1.2-1.28 1.8-3.36 1.8-6.24V22.16c0-2.88-.6-4.96-1.8-6.24-1.12-1.28-2.76-1.92-4.92-1.92h-6.72v60h6.72zm41.24-23.76L195.961 2h14.04l9 30.84h.24l9-30.84h12.84l-15.96 48.24V86h-13.2V50.24zM249.428 2h34.92v12h-21.72v23.4h17.04v12h-17.04V86h-13.2V2zm43.65 0h13.2v72h21.72v12h-34.92V2zm43.65 0h13.2v84h-13.2V2zm37.126 41.04L359.334 2h13.92l8.88 27.12h.24L391.494 2h12.48l-14.52 41.04L404.694 86h-13.92l-9.6-29.28h-.24L371.094 86h-12.48l15.24-42.96z"
                    fill="#F0ECEC"
                />
            </g>
            <defs />
        </svg>
    )
}

export function Play({ className }: IconProps) {
    return (
        <svg
            height="24"
            width="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M8.629 17.807l8-6-8-6" fill="#141414" />
        </svg>
    )
}

export function Info({ className }: IconProps) {
    return (
        <svg
            height="24"
            width="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M12 5.455a6.545 6.545 0 100 13.09 6.545 6.545 0 000-13.09zM4 12a8 8 0 1116 0 8 8 0 01-16 0z"
                fill="#fff"
                fillRule="evenodd"
            />
            <path
                d="M12 11c.552 0 1 .373 1 .833v3.334c0 .46-.448.833-1 .833s-1-.373-1-.833v-3.334c0-.46.448-.833 1-.833zM11 9c0-.552.445-1 .995-1h.01c.55 0 .995.448.995 1s-.445 1-.995 1h-.01A.998.998 0 0111 9z"
                fill="#fff"
                fillRule="evenodd"
            />
        </svg>
    )
}

export function ChevronRight({ className }: IconProps) {
    return (
        <svg
            height="24"
            width="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M9 18l6-6-6-6"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    )
}

export function SLetter({ className }: IconProps) {
    return (
        <svg
            height="34"
            width="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g>
                <path
                    d="M6.44 25.35c-1.867 0-3.278-.525-4.235-1.575C1.248 22.702.77 21.173.77 19.19v-1.4h3.64v1.68c0 1.587.665 2.38 1.995 2.38.653 0 1.143-.187 1.47-.56.35-.397.525-1.027.525-1.89 0-1.027-.233-1.925-.7-2.695-.467-.793-1.33-1.738-2.59-2.835-1.587-1.4-2.695-2.66-3.325-3.78C1.155 8.947.84 7.663.84 6.24c0-1.937.49-3.43 1.47-4.48C3.29.687 4.713.15 6.58.15c1.843 0 3.232.537 4.165 1.61.957 1.05 1.435 2.567 1.435 4.55v1.015H8.54v-1.26c0-.84-.163-1.447-.49-1.82-.327-.397-.805-.595-1.435-.595-1.283 0-1.925.782-1.925 2.345 0 .887.233 1.715.7 2.485.49.77 1.365 1.703 2.625 2.8 1.61 1.4 2.718 2.672 3.325 3.815.607 1.143.91 2.485.91 4.025 0 2.007-.502 3.547-1.505 4.62-.98 1.073-2.415 1.61-4.305 1.61z"
                    fill="#FF1010"
                />
            </g>
            <defs />
        </svg>
    )
}

export function PlayModule({ className }: IconProps) {
    return (
        <svg
            height="40"
            width="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M17 26l8-6-8-6" fill="#fff" />
            <rect height="39" width="39" rx="19.5" stroke="#fff" x=".5" y=".5" />
        </svg>
    )
}

export function Add({ className }: IconProps) {
    return (
        <svg
            height="40"
            width="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M20 13v14M13 20h14"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <rect height="39" width="39" rx="19.5" stroke="#fff" x=".5" y=".5" />
        </svg>
    )
}

export function Like({ className }: IconProps) {
    return (
        <svg
            height="40"
            width="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M16.064 28h-2.438a1.64 1.64 0 01-1.15-.469A1.587 1.587 0 0112 26.4v-5.6c0-.424.171-.831.476-1.131.305-.3.719-.469 1.15-.469h2.438m5.69-1.6v-3.2a2.38 2.38 0 00-.713-1.697A2.459 2.459 0 0019.316 12l-3.252 7.2V28h9.17c.392.004.773-.131 1.071-.38.3-.25.496-.599.555-.98l1.122-7.2a1.575 1.575 0 00-.381-1.29 1.623 1.623 0 00-1.245-.55h-4.601z"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <rect height="39" width="39" rx="19.5" stroke="#fff" x=".5" y=".5" />
        </svg>
    )
}

export function Dislike({ className }: IconProps) {
    return (
        <svg
            height="40"
            width="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M23.936 12h2.17c.46-.008.907.15 1.256.446.35.295.576.706.638 1.154v5.6a1.84 1.84 0 01-.638 1.155c-.349.295-.796.453-1.256.445h-2.17m-5.69 1.6v3.2c0 .637.256 1.247.713 1.697.458.45 1.078.703 1.725.703l3.252-7.2V12h-9.17a1.641 1.641 0 00-1.071.381c-.3.25-.496.598-.555.98l-1.122 7.2a1.575 1.575 0 00.381 1.29 1.648 1.648 0 001.245.55h4.601z"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <rect height="39" width="39" rx="19.5" stroke="#fff" x=".5" y=".5" />
        </svg>
    )
}

export function Reveal({ className }: IconProps) {
    return (
        <svg
            height="40"
            width="40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M14 17l6 6 6-6"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <rect height="39" width="39" rx="19.5" stroke="#fff" x=".5" y=".5" />
        </svg>
    )
}

export function Polygon({ className }: IconProps) {
    return (
        <svg
            height="18"
            width="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M15 7.268c1.333.77 1.333 2.694 0 3.464L3 17.66c-1.333.77-3-.192-3-1.732V2.072C0 .532 1.667-.43 3 .34l12 6.928z"
                fill="#000"
            />
        </svg>
    )
}