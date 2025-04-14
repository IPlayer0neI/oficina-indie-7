import styles from "./index.module.css";
import { Window } from "@/components/Windows7Components/Window/Window";
import { BulletsStatusBar } from "./BulletsStatusBar/BulletsStatusBar";

interface BulletsProps {
    length: number;
    bottomPosition?: string;
    position: number;
}

export function BulletsWindow({ length, bottomPosition, position }: BulletsProps) {
    return (
        <Window
            className={styles.bullets}
            style={{
                bottom: bottomPosition
            }}
            statusBar={
                <BulletsStatusBar length={length} position={length - position} />
            }
        />
    )
}