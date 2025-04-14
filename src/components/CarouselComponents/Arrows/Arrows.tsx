import { ArrowHollow } from "@/icons/ArrowHollow";
import { useWaitToPassHandler } from "@/hooks/useWaitToPassHandler";
import { Window } from "@/components/Windows7Components/Window/Window";

interface ArrowsProps {
    handlePrevious: () => void;
    handleNext: () => void;
    arrowLeftStyle: string;
    arrowRightStyle: string;
}

export function Arrows({ handlePrevious, handleNext, arrowLeftStyle, arrowRightStyle }: ArrowsProps) {
    const { waitHandler } = useWaitToPassHandler(450);

    return (
        <>
            <Window style={{ zIndex: "2000", cursor: "pointer" }} className={arrowLeftStyle}>
                <div onClick={waitHandler(handleNext)}>
                    <ArrowHollow side="left" />
                </div>
            </Window>
            <Window style={{ zIndex: "2000", cursor: "pointer" }} className={arrowRightStyle}>
                <div onClick={waitHandler(handlePrevious)}>
                    <ArrowHollow />
                </div>
            </Window>
        </>
    )
}