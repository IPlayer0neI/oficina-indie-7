import styles from "./index.module.css";
import { Window } from "../Windows7Components/Window/Window";

export function Border() {
    return (
        <div className={styles.borderContainer}>
            <Window windowText="Tem mais!!!">
                <div role="progressbar" className="marquee"></div>
            </Window>
        </div>
    )
}