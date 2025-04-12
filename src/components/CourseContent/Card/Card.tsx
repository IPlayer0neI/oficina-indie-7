import { CSSProperties, ReactNode } from "react";
import styles from "./index.module.css"
import { Window } from "@/components/Windows7Components/Window/Window";
import { Baloon } from "@/components/Windows7Components/Baloon/Baloon";

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
                    <img className={styles.imgCard} src={`assets/various/${imgName}`}/>
                    <span className={styles.cardTitle}>{title}</span>
                </p>
            </Window>
            <Baloon className={styles.baloonStyle}>
                <p className={styles.cardParagraph}>
                    {children}
                </p>
            </Baloon>
        </div>
    )
}