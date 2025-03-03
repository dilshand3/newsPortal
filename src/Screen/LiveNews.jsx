import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import HeaderInput from '../components/SearchInput';
import CategoryItem from '../components/CategoryItem';
import LiveVideo from '../components/LiveVideo';
import ReusableButton from '../components/SubmitBtn';
import BottomTab from '../components/BottomTab';

const LiveNews = () => {
    const categoriesFromAPI = ['All', 'Sports', 'Politics', 'Technology', 'Business'];
    const [activeCategory, setActiveCategory] = useState(categoriesFromAPI[1]);
    const img1 = require("assets/newsImg1.jpeg");

    const liveVideosData = [
        { id: '1', title: "IND vs AUS: First Semifinal for Champions Trophy 2025", image: img1 },
        { id: '2', title: "Live: IND vs PAK Clash in Champions Trophy Opener", image: img1 },
        { id: '3', title: "AUS vs ENG: Quarterfinal Showdown in Champions Trophy", image: img1 },
        { id: '4', title: "Breaking: IND Secures Spot in Champions Trophy Final", image: img1 },
        { id: '5', title: "Live Updates: SA vs NZ in Champions Trophy Semifinal", image: img1 },
        { id: '6', title: "ENG vs IND: Thrilling Finish in Champions Trophy Match", image: img1 },
        { id: '7', title: "AUS Dominates PAK in Champions Trophy Group Stage", image: img1 },
        { id: '8', title: "Live: NZ vs AUS Battle for Semifinal Spot", image: img1 },
        { id: '9', title: "IND vs SA: Epic Encounter in Champions Trophy 2025", image: img1 },
        { id: '10', title: "Final Preview: IND vs AUS for Champions Trophy Title", image: img1 },
    ];

    return (
        <View style={styles.container}>
            <HeaderInput title={"News as its happen!"} showSearchInput={false} />
            <FlatList
                data={categoriesFromAPI}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <CategoryItem
                        category={item}
                        isActive={activeCategory === item}
                        onPress={() => setActiveCategory(item)}
                    />
                )}
                style={styles.categoryList}
            />
            <FlatList
                data={liveVideosData}
                renderItem={({ item }) => (
                    <LiveVideo title={item.title} image={item.image} />
                )}
                keyExtractor={item => item.id}
                style={styles.videoList}
            />
            <BottomTab />
        </View>
    );
};

export default LiveNews;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    categoryList: {
        paddingVertical: 10,
    },
    videoList: {
        flex: 1,
        paddingVertical: 10,
        marginTop : -550,
        paddingBottom : 200
    }
});