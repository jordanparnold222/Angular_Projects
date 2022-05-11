export interface Post
{
    id: string;
    title: string;
    content: string;
    summary: string;
    urlHandle: string;
    author: string;
    visible: string;
    publishDate: Date;
    updatedDate: Date;
    featuredImageUrl: string;
}