import { ReactElement, useState } from "react";
import { TabMenu7, TabMenuItem7, TabPanel7, Tabs7 } from "react-7css";

interface Items {
    title: string;
    content: ReactElement;
}

interface TabProps {
    items: Items[];
}

export function Tab({ items }: TabProps) {
    const [actived, setActived] = useState(0);

    return (
        <Tabs7>
            <TabMenu7 aria-label="benefícios">
                {
                    items.map(function ({ title }: Items, index) {
                        return (
                            <TabMenuItem7
                                key={title}
                                onClick={() => setActived(index)}
                                aria-controls={"tab-" + title}
                                aria-selected={index == actived ? "true" : "false"}
                            >
                                {title}
                            </TabMenuItem7>
                        )
                    })
                }
            </TabMenu7>
            {
                items.map(function ({ title, content }: Items, index) {
                    return (
                        <TabPanel7 id={`tab-${title}`} key={title} hidden={index == actived ? false : true}>
                            {content}
                        </TabPanel7>
                    )
                })
            }
        </Tabs7>
    )
}