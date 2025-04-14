import React from "react";
import styles from "./index.module.css";

interface LocationProps {
    paths?: string[];
}

export function Location({ paths }: LocationProps) {
    return (
        <div className={`${styles.locationBar}`}>
            <div className={styles.navigation}>
                <div className={styles.navigationLeft}></div>
                <div className={styles.navigationRight}></div>
            </div>
            <div className={styles.location}>
                <div className={styles.locationPath}>
                    {
                        paths && paths.map(function (pathName) {
                            return (
                                <React.Fragment key={pathName}>
                                    {pathName}
                                    <div className={styles.locationPathArrow}>
                                        <img src="/location/arrow-black.png" />
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                <div className={styles.locationPathFinal}>
                    <div className={styles.locationPathArrow}>
                        <img src="/location/arrow-black.png" />
                    </div>
                    <div className={styles.refreshArrow}>
                        <img src="/location/multi-arrow.png" />
                    </div>
                </div>
            </div>
            <input className={styles.locationSearch} placeholder="Search" />
        </div >
    )
}