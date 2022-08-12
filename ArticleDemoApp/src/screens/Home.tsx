import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { fetchNewsArticles } from '../api/news'
import { NewsArticle } from '../api/types'
import ArticleList from '../components/ArticleList'
import NewsHeader from '../components/NewsHeader'
import ScreenLoader from '../components/ScreenLoader'


const Home = () => {

    // init local state for UI
    const [articles, setArticles] = useState<Array<NewsArticle> | undefined>(undefined);

    const [loading, setIsLoading] = useState<boolean>(true);

    // state for refresh on pull
    const [refreshing, _] = useState<boolean>(false);

    const processNewsArticles = async () => {
        try {
            const data = await fetchNewsArticles()

            setArticles(data)

            setIsLoading(false)
        } catch (error) {
            // a response should be shown to user (e.g toast msg)
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        processNewsArticles();
    }, [])

    return (
        <View>
            {
                loading ?
                    <ScreenLoader />
                    : null
            }

            <NewsHeader />

            <ArticleList
                articles={articles}
                onRefreshHandler={processNewsArticles}
                refreshing={refreshing}
            />
        </View >
    )
}

export default Home