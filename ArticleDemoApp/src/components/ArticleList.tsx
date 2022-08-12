import React from 'react'
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import { NewsArticle } from '../api/types'
import { SCREEN_WIDTH } from '../utils/dimensions'
import ArticleCard from './ArticleCard'

type ArticleListProps = {
    articles: Array<NewsArticle> | undefined,
    onRefreshHandler: () => Promise<void>,
    refreshing: boolean
}

const ArticleList = ({ articles, onRefreshHandler, refreshing }: ArticleListProps) => {
    return (
        <FlatList
            data={articles}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefreshHandler} />
            }
            contentContainerStyle={styles.contentContainer}
            ItemSeparatorComponent={() => (
                <View style={styles.border} />
            )}
            // * alternative - fixed header
            // ListHeaderComponent={<NewsHeader/>}
            // stickyHeaderIndices={[0]}
            renderItem={({ item }) => (
                <ArticleCard item={item} />
            )}
        />
    )
}

const styles = StyleSheet.create({
    border: {
        width: SCREEN_WIDTH,
        height: 1,
        backgroundColor: "#e2e2e2",
        marginVertical: 20
    },
    contentContainer: {
        display: "flex",
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 150
    }
})

export default ArticleList