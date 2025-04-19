import styles from "./index.module.css";
import { BuyButton } from "../BuyButton/BuyButton";
import { Ballon7 } from "react-7css";

export function BuyArea() {
    return (
        <div className={styles.buyArea}>
            <div className={styles.priceContainer}>
                <h2 className={styles.price}>
                    <span className={styles.tagContainer}>
                        <Ballon7 className={styles.tag}>
                            POR APENAS
                        </Ballon7>
                    </span>
                    <span className={styles.amount}>
                        R$149
                        <span className={styles.cents}>
                            ,90
                        </span>
                    </span>
                    <span className={styles.subdivision}>
                        ou em 12 vezes de R$14,90
                    </span>
                </h2>
            </div>
            <BuyButton />
        </div>
    )
}