import styles from "./index.module.css";

export function Background() {
    return (
        <div className={styles.background}>
            <div className={styles["shortcut"]}>
                <img src="./icon.png" />
                <div className={styles["shortcut-label"]}>
                    Oficina indie
                </div>
            </div>
            <div className={styles["shortcut"]}>
                <img src="./assets/taskbar-added-images/cmd.webp" />
                <div className={styles["shortcut-label"]}>
                    CMD
                </div>
            </div>
            <div className={styles["shortcut"]}>
                <img src="./assets/taskbar-added-images/notepad.webp" />
                <div className={styles["shortcut-label"]}>
                    notepad
                </div>
            </div>
        </div>
    )
}