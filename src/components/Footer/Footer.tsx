import styles from "./index.module.css"

export function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles["task-bar"]}>
                <div className={`${styles["start-button"]} ${styles["start-button-bright"]}`}>
                </div>
                <div className={`${styles["task-bar-items"]}`}>
                    <div className={styles["task-bar-app-container"]}>
                        <div className={`${styles["task-bar-app"]} ${styles["active"]} ${styles["focus"]} ${styles["super-focus"]}`}>
                            <img src="./icon.png" />
                        </div>
                        <div className={`${styles["task-bar-app-surplus"]} ${styles["surplus-opacity"]}`}>
                        </div>
                        <div className={`${styles["task-bar-app-surplus"]} ${styles["surplus-opacity-two"]}`}>
                        </div>
                    </div>
                    <div className={`${styles["task-bar-app"]} ${styles["active"]}`}>
                        <img src="./assets/taskbar-added-images/cmd.webp" />
                    </div>
                    <div className={`${styles["task-bar-app"]}`}>
                        <img src="./assets/taskbar-added-images/notepad.webp" />
                    </div>
                </div>
                <div className={`${styles["task-bar-tray"]}`}>
                    <div className={`${styles["task-bar-tray-item"]} ${styles["flag"]} ${styles["active"]}`}>
                    </div>
                    <div className={`${styles["task-bar-tray-item"]} ${styles["active"]}`}>
                        <div className={`${styles["network"]}`}>
                            <span style={{ height: "3px" }}></span>
                            <span style={{ height: "6px" }}></span>
                            <span style={{ height: "9px" }}></span>
                            <span style={{ height: "12px" }}></span>
                            <span style={{ height: "15px" }}></span>
                        </div>
                    </div>
                    <div className={`${styles["task-bar-tray-item"]} ${styles["active"]}`}>
                        <div className={`${styles["battery"]}`}>
                            <div className={`${styles["percentage"]}`}>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles["task-bar-tray-item"]} ${styles["calendar"]} ${styles["active"]}`}>
                        <span>01:02</span>
                        <span>24/03/2025</span>
                    </div>
                    <div className={`${styles["task-bar-tray-item"]} ${styles["show-desktop"]} ${styles["active"]}`}>
                    </div>
                </div>
            </div>
        </div >
    )
}