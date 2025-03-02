import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native';
import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { PURPLECOLOR } from '../constants/color';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const SCREEN_WIDTH = Dimensions.get("window").width;

const VideoNews = ({ image, newstitle, time }) => {
    const unsaved = require("assets/unsaved.png");
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.newsImage} />
            <View style={styles.playButton}>
                <AntDesign name="caretright" size={30} color="red" />
            </View>
            <View style={styles.liveBadge}>
                <Text style={styles.liveText}>Live</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.newsTitle}>
                    {newstitle}
                </Text>
                <View style={styles.bottomRow}>
                    <View style={styles.timeContainer}>
                        <MaterialIcons name="schedule" size={20} color="#666" />
                        <Text style={styles.timeText}>{time} ago</Text>
                    </View>

                    <View style={styles.iconsContainer}>
                        <Pressable style={styles.iconButton}>
                            <AntDesign name="like2" size={18} color={PURPLECOLOR} />
                        </Pressable>
                        <Pressable style={styles.iconButton}>
                            <AntDesign name="download" size={18} color={PURPLECOLOR} />
                        </Pressable>
                        <Pressable style={styles.iconButton}>
                            <Image source={unsaved} style={{ width: 12, height: 18 }} />
                        </Pressable>
                        <Pressable style={styles.iconButton}>
                            <Entypo name="share" size={18} color={PURPLECOLOR} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default VideoNews;

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        backgroundColor: "white",
        paddingBottom: 10,
        height : "auto",
    },
    newsImage: {
        width: "96%",
        height: 200,
        margin : "auto",
        resizeMode: "cover",
        borderRadius : 8
    },
    playButton: {
        position: "absolute",
        top: "30%",
        left: "45%",
        backgroundColor: "white",
        width: 60,
        height: 60,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    liveBadge: {
        position: "absolute",
        top: 10,
        right: 25,
        backgroundColor: "white",
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    liveText: {
        color: PURPLECOLOR,
        fontSize: 12,
        fontWeight: "bold",
    },
    bottomContainer: {
        padding: 10,
    },
    newsTitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    },
    timeContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    timeText: {
        fontSize: 15,
        color: PURPLECOLOR,
        marginLeft: 4,
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    iconButton: {
        marginLeft: 10,
    },
});
