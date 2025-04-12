import { CSSProperties, JSX, ReactElement } from "react"
import { Location } from "../Location/Location";

interface WindowProps {
    children?: JSX.Element[] | JSX.Element | boolean;
    scrollBar?: boolean;
    className?: string;
    innerWindowClassName?: string;
    windowText?: string;
    windowHeadElement?: ReactElement;
    statusBar?: ReactElement;
    width?: string;
    style?: CSSProperties;
    barControls?: BarControls;
    location?:  string[];
}

type BarControls = ("minimize" | "help" | "restore" | "close" | "maximize")[];

function renderBarControls(barControls: BarControls) {
    function hasValue(control: string) {
        return barControls.findIndex((c) => c == control) > -1;
    }

    return (
        (
            <div className="title-bar-controls">
                {hasValue("help") && <button aria-label="Help"></button>}
                {hasValue("minimize") && <button aria-label="Minimize"></button>}
                {hasValue("maximize") && <button aria-label="Maximize"></button>}
                {hasValue("close") && <button aria-label="Close"></button>}
            </div>
        )
    )
}

export function Window({
    children,
    statusBar,
    windowText,
    style,
    windowHeadElement,
    scrollBar,
    className,
    innerWindowClassName,
    width,
    barControls = ["minimize", "maximize", "close"],
    location
}: WindowProps) {
    return (
        <div className={`window glass active ${className}`} style={{ width: width, ...style }}>
            <div className="title-bar"
            style={{
                flexDirection: "column"
            }}
            >
                    <div 
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                    >
                    <div className="title-bar-text"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                    }}
                    >
                        <img src="icon.png"
                        style={{
                            width: "15px",
                            height: "15px"
                        }}
                        />
                        {windowHeadElement || windowText}
                    </div>
                    {
                        renderBarControls(barControls)
                    }
                    </div>
                {
                    location && (
                        <Location paths={location} />
                    )
                }
            </div>
            <div className={`window-body has-space ${scrollBar ? "has-scrollbar" : ""} ${innerWindowClassName}`} style={{ overflow: "auto" }}>
                {children || null}
            </div>
            {statusBar}
        </div>
    )
}