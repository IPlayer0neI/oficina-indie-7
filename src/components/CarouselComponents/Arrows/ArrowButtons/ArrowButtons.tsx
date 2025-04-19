import { Button7 } from "react-7css";
import styles from "./index.module.css";
import { useWaitToPassHandler } from "@/hooks/useWaitToPassHandler";

interface ArrowButtonProps {
    handlePrevious: () => void;
    handleNext: () => void;
}

export function ArrowButton({ handlePrevious, handleNext }: ArrowButtonProps) {
    const { waitHandler } = useWaitToPassHandler(450);

    return (
        <div className={styles.buttonContainer}>
            <Button7 onClick={waitHandler(handleNext)}>
                &lt;&lt;&lt; Previous Slide
            </Button7>
            <Button7 onClick={waitHandler(handlePrevious)}>
                Next Slide &gt;&gt;&gt;
            </Button7>
        </div>
    )
}