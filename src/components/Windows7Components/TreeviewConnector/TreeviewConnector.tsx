import { TreeView7, TreeViewNode7 } from "react-7css";

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
            <TreeViewNode7 key={node}>
                {node}
            </TreeViewNode7>
        )
    } else {
        const { title, tree, open } = node;
        const hasMoreTree = tree ;

        return (
            <TreeViewNode7 summary={title} details open={open} key={title}>
                {
                    hasMoreTree && (
                        <TreeView7>
                            {
                                tree.map(renderList)
                            }
                        </TreeView7>
                    )
                }
            </TreeViewNode7>
        )
    }
}

interface TreeViewConnectorProps {
    tree: Tree;
    className?: string;
    connector?: boolean;
    collapse?: boolean
}

export function TreeviewConnector({ tree, className, collapse = true, connector = true }: TreeViewConnectorProps) {
    return (
        <TreeView7 root connector={connector} collapse={collapse} className={className}>
            {
                tree.map(renderList)
            }
        </TreeView7>
    )
}