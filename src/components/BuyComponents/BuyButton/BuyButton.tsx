import styles from "./index.module.css"

export function BuyButton() {
    return (
        <a className={styles.buyButtonContainer}>
            <div className={styles.trasnparentBorder} />
            <button className={styles.buyButton}>
                <h3>
                QUERO COMEÇAR AGORA
                </h3>
            </button>
        </a>
    )
}