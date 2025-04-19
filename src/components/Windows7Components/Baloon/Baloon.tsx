import { ReactNode } from "react";
import { Ballon7 } from "react-7css";

interface BaloonProps {
    children: ReactNode;
}

export function Baloon({ children, ...props }: BaloonProps) {
    return (
        <Ballon7 {...props}>
            {children}
        </Ballon7>
    )
} 