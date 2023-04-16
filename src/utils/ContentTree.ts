import { ContentItem, ContentTree, DirectoryItem, EntryItem } from "../models/ContentItem";

function pathToTree(parts: string[], obj: ContentTree, file: EntryItem) {
    if (parts.length === 0) return;

    const part = parts.shift()!;
    if (!obj[part]) {
        if (parts.length === 0) {
            obj[part] = file;
        } else {
            obj[part] = { title: part, children: {} };
        }
    }

    pathToTree(parts, (obj[part] as DirectoryItem).children || obj[part], file);
}

export function generateContentTree(files: EntryItem[]): ContentTree {
    const tree: ContentTree = {};

    files.forEach((file) => {
        const path = file._path.split('/').slice(1);
        pathToTree(path, tree, file);
    });

    return tree;
}

export function nuxtContentToContentItem(nuxtContentObject: any): EntryItem {
    const contentItem: EntryItem = {
        _path: nuxtContentObject._path,
        title: nuxtContentObject.title,
        description: nuxtContentObject.description,
    };

    return contentItem;
}
export function createContentTree(contentFiles: ContentItem[]): ContentItem[] {
    const tree: ContentItem[] = [];

    contentFiles.forEach((file) => {
        const pathParts = file._path.split('/').filter((part) => part);

        let currentNode: DirectoryItem | null = null;

        pathParts.forEach((part, index) => {
            const isFile = index === pathParts.length - 1;

            if (isFile) {
                const entry: EntryItem = {
                    ...file,
                    _key: part,
                    children: undefined,
                };

                if (currentNode) {
                    currentNode.children.push(entry);
                } else {
                    tree.push(entry);
                }
            } else {
                if (!currentNode) {
                    const existingNode = tree.find((node) => (node as DirectoryItem)._key === part);

                    if (existingNode && 'children' in existingNode) {
                        currentNode = existingNode;
                    } else {
                        const newNode: DirectoryItem = {
                            _key: part,
                            title: part,
                            children: [],
                        };

                        tree.push(newNode);
                        currentNode = newNode;
                    }
                } else {
                    const existingNode = currentNode.children.find((node) => (node as DirectoryItem)._key === part);

                    if (existingNode && 'children' in existingNode) {
                        currentNode = existingNode;
                    } else {
                        const newNode: DirectoryItem = {
                            _key: part,
                            title: part,
                            children: [],
                        };

                        currentNode.children.push(newNode);
                        currentNode = newNode;
                    }
                }
            }
        });
    });

    return tree;
}