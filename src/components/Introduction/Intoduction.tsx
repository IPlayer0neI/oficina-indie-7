import styles from "./index.module.css";
import { Window } from "../Windows7Components/Window/Window";
import { StatusBarField7 } from "react-7css";

export function Introduction() {
    return (
        <div className={styles.introductionContainer}>
            <Window
                windowText="introdução"
                className={styles.window}
                scrollBar={true}
                innerWindowClassName={styles.innerWindow}
                statusBar={
                    <>
                        <StatusBarField7>Scrolle para ver mais</StatusBarField7>
                        <StatusBarField7>Um dos melhores cursos de criação de jogos do Brasil</StatusBarField7>
                        <StatusBarField7>Aprovação: 100%</StatusBarField7>
                    </>
                }
                location={["Oficina indie", "introdução"]}
            >
                <header className={styles.header}>
                    <div className={styles.imgContainer}>
                        <img height="auto" src="assets/various/Oficina-Indie_noBG_nospace-300x68.webp" />
                    </div>
                </header>
                <div className={styles.youtubeVideoContainer}>
                    <div className={styles.youtubeFrame}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nkSGOuvBnYI?autoplay=1&si=YEgsNIkMxMbncsAM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
                <div className={styles.introductionText}>
                    <h2 className={`textShine ${styles.introductionTitle}`}>
                        Aprenda a viver de Jogos Indie!
                    </h2>
                    <p className={styles.introductionParagraph}>
                        Na Oficina Indie você aprende desde o básico da programação em C# até a criação completa de jogos 2D e 3D, incluindo a criação de gráficos, sons e músicas. Além disso, você ainda fica por dentro de partes essenciais do mercado dos jogos indie, aprendendo a publicar seus jogos, as melhores técnicas de marketing e como lidar com a parte financeira.
                    </p>
                </div>
            </Window>
        </div>
    )
}