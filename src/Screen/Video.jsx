import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react';
import Feather from "react-native-vector-icons/Feather";
import { PURPLECOLOR } from '../constants/color';
import NewsCard from '../components/NewsCard';
import BottomTab from '../components/BottomTab';
import Comment from '../components/comment';
import VideoPlayer from '../components/VideoPlayer';

const Video = () => {
    const img1 = require("assets/newsImg1.jpeg");
    const img2 = require("assets/facebook.png");
    const title = "Budget 2025 Live: FM Nirmala Sitharaman Announces Huge Tax Relief | New Tax Slabs Explained     "
    const newsData = [
        {
            id: '1',
            image: img1,
            title: "State tournament has started in cricket academy in New Delhi with north",
            time: "2h ago"
        },
        {
            id: '2',
            image: img1,
            title: "Local team wins championship in thrilling final match",
            time: "5h ago"
        },
        {
            id: '3',
            image: img1,
            title: "New sports facility opens in capital city",
            time: "1d ago"
        },
        {
            id: '4',
            image: img1,
            title: "New sports facility opens in capital city",
            time: "1d ago"
        }, {
            id: '5',
            image: img1,
            title: "New sports facility opens in capital city",
            time: "1d ago"
        }, {
            id: '6',
            image: img1,
            title: "New sports facility opens in capital city",
            time: "1d ago"
        }, {
            id: '7',
            image: img1,
            title: "New sports facility opens in capital city",
            time: "1d ago"
        }, {
            id: '8',
            image: img1,
            title: "New sports facility opens in capital city",
            time: "1d ago"
        }, {
            id: '9',
            image: img1,
            title: "New sports facility opens in capital city",
            time: "1d ago"
        }
    ];
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Feather name="arrow-left" size={26} color={PURPLECOLOR} />
                <Text style={styles.headerTxt}>Video</Text>
            </View>
            <VideoPlayer thumbnail={img1} time={"2h"} view={"220k"} title={title}/>
            <Comment totalcomment={3} userImg={img2} />
            <View>
                <Text style={styles.listHeading}>Suggest News</Text>
                <FlatList
                    data={newsData}
                    renderItem={({ item }) => (
                        <NewsCard
                            image={item.image}
                            title={item.title}
                            time={item.time}
                            showIcons={true}
                            showPlayButton={true}
                            
                        />
                    )}
                    keyExtractor={item => item.id}
                    style={styles.list}
                />
            </View>
            <BottomTab/>
        </View>
    )
}

export default Video;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 7,
        paddingHorizontal: 3
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        paddingHorizontal: 2,
        paddingVertical: 5,
        width: "100%"
    },
    headerTxt: {
        fontSize: 16,
        fontWeight : "600",
        color : PURPLECOLOR,
    },
    listHeading:{
       color : PURPLECOLOR,
       fontWeight : "500",
       fontSize : 15,
       marginLeft : 10
    },
    list: {
        paddingBottom : 500
    },
})