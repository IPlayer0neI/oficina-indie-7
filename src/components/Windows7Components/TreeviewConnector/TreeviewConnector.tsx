type Tree = (NodeTree | string)[];

type NodeTree = {
    title: string;
    tree: Tree;
    open?: boolean;
} | string;

function renderList(node: NodeTree) {
    const isString = typeof node === "string";

    if (isString) {
        return (
            <li key={node}>
                {node}
            </li>
        )
    } else {
        const { title, tree, open } = node;
        const hasMoreTree = tree && tree[0];

        return (
            <details open={open} key={title}>
                <summary>{title}</summary>
                {
                    hasMoreTree && (
                        <ul>
                            {
                                <RenderTree tree={tree} />
                            }
                        </ul>
                    )
                }
            </details>
        )
    }
}

function RenderTree({ tree }: { tree: Tree }) {
    return (
        <>
            {
                tree.map(renderList)
            }
        </>
    )
}

interface TreeViewConnectorProps {
    tree: Tree;
    className?: string;
    connector?: boolean;
}

export function TreeviewConnector({ tree, className, connector = true }: TreeViewConnectorProps) {
    return (
        <ul className={`tree-view ${connector ? "has-connector has-collapse-button" : ""} has-container ${className}`}>
            {
                <RenderTree tree={tree} />
            }
        </ul>
    )
}