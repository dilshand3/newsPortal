import { StyleSheet, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import HeaderInput from '../components/SearchInput';
import CategoryItem from '../components/CategoryItem';
import VideoNews from '../components/VideoNews';
import ReusableButton from '../components/SubmitBtn';
import BottomTab from '../components/BottomTab';

const NewsVideo = () => {
    const img1 = require("assets/newsImg2.jpeg");
    const [searchText, setSearchText] = useState("");
    const categoriesFromAPI = ['All', 'Sports', 'Politics', 'Technology', 'Business'];
    const [activeCategory, setActiveCategory] = useState(categoriesFromAPI[0]);

    const videoNewsData = [
        { id: '1', image: img1, newsTitle: "Breaking News: Market Hits Record High", time: "1h ago" },
        { id: '2', image: img1, newsTitle: "Sports: India Wins Cricket World Cup", time: "3h ago" },
        { id: '3', image: img1, newsTitle: "Technology: New AI Model Launched", time: "5h ago" },
        { id: '4', image: img1, newsTitle: "Politics: Election Results Announced", time: "7h ago" },
        { id: '5', image: img1, newsTitle: "Business: Stock Market Update", time: "9h ago" },
    ];

    return (
        <View style={styles.container}>
            <HeaderInput
                title="Watch the Story Unfold"
                showSearchInput={true}
                searchValue={searchText}
                onSearchChange={setSearchText}
                rightIcon="filter"
                onRightIconPress={() => console.log("Filter Pressed!")}
            />
            <FlatList
                data={categoriesFromAPI}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <CategoryItem
                        category={item}
                        isActive={activeCategory === item}
                        onPress={setActiveCategory}
                    />
                )}
                contentContainerStyle={styles.categoryList}
            />
            <FlatList
                data={videoNewsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <VideoNews image={item.image} newstitle={item.newsTitle} time={item.time} />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: "auto" }}
                ListFooterComponent={() => (
                    <View style={styles.loadbtn}>
                        <ReusableButton title={"Load more"} style={styles.load} />
                    </View>
                )}
            />
        </View>
    );
};

export default NewsVideo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    categoryList: {
        paddingHorizontal: 8,
        marginBottom: 10,
    },
    loadbtn: {
        paddingHorizontal: 60,
        marginBottom: 20,
    },
    load: {
        color: "#FCBA37",
        padding: -3,
    },
});
