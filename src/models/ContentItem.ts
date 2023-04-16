export interface EntryItem {
    _path: string;
    title: string;
    description: string;
}

export interface DirectoryItem {
    title: string;
    children: ContentTree;
}

export type ContentItem = EntryItem | DirectoryItem;

export interface ContentTree {
    [key: string]: ContentItem;
}