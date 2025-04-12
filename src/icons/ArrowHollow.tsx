interface ArrowHollowProps {
    side?: string | undefined
}

export function ArrowHollow({ side }: ArrowHollowProps) {
    let angle = 0;
    if (side == "left") {
        angle = 180
    }
    return (
        <div style={{
            transform: `rotate(${angle}deg)`,
            width: "32px"
        }}
        >
            <img src="assets/various/arrow.png" />
        </div>
    )
}