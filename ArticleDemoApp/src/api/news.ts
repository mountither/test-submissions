import { NewsArticle } from "./types"

// typically stored in env file or some env mngmt tool 
const NEWS_API_KEY = "815c58bcae7e44be82a1accd707e851d"

const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=${NEWS_API_KEY}`



// Using newsapi from django.
const LOCAL_NEWS_URL = 'http://localhost:8000/api/top_headlines'
const AUTHOR_BASE_URL = 'http://localhost:8000/api/author'

// defaults to news api
const USE_LOCAL = false;

export const fetchNewsArticles = async (): Promise<Array<NewsArticle>> => {
    try {

        const newsResponse = await fetch(
            USE_LOCAL ? LOCAL_NEWS_URL : NEWS_URL
        )

        const json = await newsResponse.json()

        //* NEWS_API
        const allData: Array<any> = USE_LOCAL ? json : json.articles;


        const data: Array<NewsArticle> = []

        USE_LOCAL ?
            //* local NEWS_API (django)
            allData.map(async (article: any) => {

                const authorResponse = await fetch(`${AUTHOR_BASE_URL}/${article.author_id}`)
                const author = await authorResponse.json()

                data.push({
                    title: article.title,
                    desc: article.desc,
                    imgURL: article.img_url,
                    author: author[0].name,
                    datePublished: new Date(article.date_pub),
                })
            })
            :
            //* NEWS_API
            allData.map((article) => {
                data.push({
                    title: article.title,
                    desc: article.description,
                    imgURL: article.urlToImage,
                    author: article.author,
                    datePublished: new Date(article.publishedAt),
                })
            })



        return data

    } catch (error: any) {
        // throw error - view will handle this in UI.
        throw Error(error.message)
    }
}
