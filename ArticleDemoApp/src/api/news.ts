import { NewsArticle } from "./types"

// typically stored in env file or some env mngmt tool 
const NEWS_API_KEY = "815c58bcae7e44be82a1accd707e851d"

const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=${NEWS_API_KEY}`



// Using newsapi from django.
const LOCAL_NEWS_URL = 'http://localhost:8000/api/top_headlines'
const AUTHOR_BASE_URL = 'http://localhost:8000/api/author'


export const fetchNewsArticles = async (): Promise<Array<NewsArticle>> => {
    try {

        const newsResponse = await fetch(
            // NEWS_URL
            LOCAL_NEWS_URL
        )

        const json = await newsResponse.json()

        //* NEWS_API
        // const allData: Array<any> = json.articles;


        const data: Array<NewsArticle> = []

        //* NEWS_API
        // grab only the required fields.
        // allData.map((article) => {
        //     data.push({
        //         title: article.title,
        //         desc: article.description,
        //         imgURL: article.urlToImage,
        //         author: article.author,
        //         datePublished: new Date(article.publishedAt),
        //     })
        // })

        //* local NEWS_API (django)
        json.map(async (article: any) => {

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

        return data

    } catch (error: any) {
        // throw error - view will handle this in UI.
        throw Error(error.message)
    }
}
