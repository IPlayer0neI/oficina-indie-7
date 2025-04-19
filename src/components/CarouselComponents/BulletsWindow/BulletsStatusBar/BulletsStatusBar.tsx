import { StatusBarField7 } from "react-7css";

interface BulletsProps {
    length: number;
    position: number;
}

export function BulletsStatusBar({ length, position }: BulletsProps) {
    const positivePositionValue = position > length ?
        (length * 2) - position :
        position;

    return (
        <>
            <StatusBarField7>Press F1 for help</StatusBarField7>
            <StatusBarField7>Slide {positivePositionValue}</StatusBarField7>
            <StatusBarField7>Carousel Usage: {Math.round((positivePositionValue / length) * 100)}%</StatusBarField7>
        </>
    )
}