import { CSSProperties, JSX, ReactElement } from "react";
import { Close7, Help7, Maximize7, Minimize7, StatusBar7, TitleBar7, TitleBarControls7, TitleBarText7, Window7, WindowBody7 } from "react-7css"
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
    location?: string[];
}

type BarControls = ("minimize" | "help" | "restore" | "close" | "maximize")[];

interface BarControlsProps {
    controls: BarControls;
}

function BarControls({ controls }: BarControlsProps) {
    function hasValue(control: string) {
        return controls.findIndex((c) => c == control) > -1;
    }

    return (
        (
            <TitleBarControls7>
                {hasValue("help") && <Help7 />}
                {hasValue("minimize") && <Minimize7 />}
                {hasValue("maximize") && <Maximize7 />}
                {hasValue("close") && <Close7 />}
            </TitleBarControls7>
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
        <Window7 active style={{ width: width, ...style }} className={className}>
            <TitleBar7 style={{ flexDirection: "column" }}>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <TitleBarText7 style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <img src="icon.png"
                            style={{
                                width: "15px",
                                height: "15px"
                            }}
                        />
                        {windowHeadElement || windowText}
                    </TitleBarText7>
                    <TitleBarControls7 controls={barControls} />
                </div>
                {
                    location && (
                        <Location paths={location} />
                    )
                }
            </TitleBar7>
            <WindowBody7 space className={`${scrollBar ? "has-scrollbar" : ""} ${innerWindowClassName}`} style={{ overflow: "auto" }}>
                {children || null}
            </WindowBody7>
            {
                statusBar && (
                    <StatusBar7>
                        {statusBar}
                    </StatusBar7>
                )
            }
        </Window7>
    )
}