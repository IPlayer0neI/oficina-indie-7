import { Button7 } from "react-7css";
import styles from "./index.module.css";

export function BuyButton() {
    return (
        <a className={styles.buyButtonContainer}>
            <div className={styles.trasnparentBorder} />
            <Button7 className={styles.buyButton}>
                <h3>
                    QUERO COMEÇAR AGORA
                </h3>
            </Button7>
        </a>
    )
}