import { CSSProperties,  ReactNode } from "react";

interface BaloonProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    vertical?: "top" | "bottom";
    horizontal?: "left" | "right";
}

const MapVertical= {
    "top": "is-top",
    "bottom": "is-bottom",
}

const MapHorizontal = {
    "left": "is-left",
    "right": "is-right"
}

export function Baloon({ children, className, style, horizontal = "right", vertical = "bottom" }: BaloonProps){
    return (
        <div role="tooltip" className={`${className} ${MapHorizontal[horizontal]} ${MapVertical[vertical]}`} style={{ backgroundColor: "white", ...style}}>
            {children}
        </div>
    )
} 