// define the article data needed to show on article card.
export type NewsArticle = {
    title: string,
    desc: string,
    imgURL?: string,
    author: string,
    datePublished: Date,
}