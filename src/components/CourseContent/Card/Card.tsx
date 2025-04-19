import { CSSProperties, ReactNode } from "react";
import styles from "./index.module.css";
import { Window } from "@/components/Windows7Components/Window/Window";
import { Ballon7 } from "react-7css";

interface CardProps {
    imgName: string;
    title: string;
    children: ReactNode;
    style?: CSSProperties;
    contentPathName: string;
}

export function Card({ imgName, title, children, style, contentPathName }: CardProps) {
    return (
        <div style={{ ...style, minWidth: "460px", minHeight: "0" }}>
            <Window className={styles.windowClass} location={["Oficina indie", "conteúdo", contentPathName]}>
                <p className={styles.cardHeader}>
                    <img className={styles.imgCard} src={`assets/various/${imgName}`} />
                    <span className={styles.cardTitle}>{title}</span>
                </p>
            </Window>
            <Ballon7 className={styles.baloonStyle} vertical="bottom">
                <p className={styles.cardParagraph}>
                    {children}
                </p>
            </Ballon7>
        </div>
    )
}