import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import React, { useState } from 'react';
import HeaderInput from '../components/SearchInput';
import BottomTab from '../components/BottomTab';
import { PURPLECOLOR } from '../constants/color';
import NewsCard from '../components/NewsCard';

const SavedNewsArticle = () => {
    const [activeTab, setActiveTab] = useState('Articles');
    const img1 = require("assets/newsImg1.jpeg")
    const NewsData = [
        { id: '1', image: img1, newsTitle: "Breaking News: Market Hits Record High", time: "1h ago" },
        { id: '2', image: img1, newsTitle: "Sports: India Wins Cricket World Cup", time: "3h ago" },
        { id: '3', image: img1, newsTitle: "Technology: New AI Model Launched", time: "5h ago" },
        { id: '4', image: img1, newsTitle: "Politics: Election Results Announced", time: "7h ago" },
        { id: '5', image: img1, newsTitle: "Business: Stock Market Update", time: "9h ago" },
    ];

    return (
        <View style={styles.container}>
            <HeaderInput title={'Read It Anytime'} showSearchInput={false} />
            <View style={styles.tabContainer}>
                <Pressable
                    style={[styles.tab, activeTab === 'Articles' && styles.activeTab]}
                    onPress={() => setActiveTab('Articles')}>
                    <Text style={[styles.tabText, activeTab === 'Articles' && styles.activeTabText]}>
                        Articles
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.tab, activeTab === 'Videos' && styles.activeTab]}
                    onPress={() => setActiveTab('Videos')}>
                    <Text style={[styles.tabText, activeTab === 'Videos' && styles.activeTabText]}>
                        Videos
                    </Text>
                </Pressable>
            </View>
            <FlatList
                data={NewsData}
                renderItem={({ item }) => (
                    <NewsCard
                        image={item.image}
                        title={item.newsTitle}
                        time={item.time}
                        showPlayButton={activeTab === 'Videos'}
                        showIcons={activeTab === 'Videos'}
                    />
                )}
                keyExtractor={item => item.id}
                style={styles.list}
            />
            <BottomTab />
        </View>
    );
};

export default SavedNewsArticle;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tabContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#f5f5f5',
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : "white"
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: PURPLECOLOR,
    },
    tabText: {
        fontSize: 16,
        color: '#666',
    },
    activeTabText: {
        color: PURPLECOLOR,
        fontWeight: 'bold',
    },
    list: {
        flex: 1,
        padding: 10,
    },
});