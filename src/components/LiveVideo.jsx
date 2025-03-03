import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { PURPLECOLOR } from '../constants/color';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const LiveVideo = ({ image, title }) => {
    const unsaved = require("assets/unsaved.png");

    return (
        <View style={styles.container}>
            <View style={styles.videoContainer}>
                <Image
                    source={image}
                    style={styles.thumbnail}
                    resizeMode="cover"
                />
                <View style={styles.liveBadge}>
                    <Text style={styles.liveText}>LIVE</Text>
                </View>
                <View style={styles.playButton}>
                    <AntDesign name="play" size={55} color="white" />
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={2}>
                    {title}
                </Text>
                <View style={styles.infoContainer}>
                    <View style={styles.liveDot}>
                        <MaterialIcons name="fiber-manual-record" size={14} color="red" />
                        <Text style={styles.liveStatus}>Live Now</Text>
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

export default LiveVideo;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    videoContainer: {
        position: 'relative',
        width: '100%',
        aspectRatio: 16 / 9,
        borderRadius: 8,
        overflow: 'hidden',
    },
    thumbnail: {
        width: '100%',
        height: '100%',
    },
    liveBadge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: PURPLECOLOR,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
    liveText: {
        color: '#FCBA37',
        fontSize: 15,
        fontWeight: 'bold',
    },
    playButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -20 }, { translateY: -20 }],
        backgroundColor: "red",
        borderRadius: 25,
    },
    content: {
        paddingVertical: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        justifyContent: "space-between"
    },
    liveDot: {
        paddingTop: 2,
        flexDirection: "row",
        alignItems: "center",
        gap: 4
    },
    liveStatus: {
        fontSize: 15,
        color: 'red',
        fontWeight: '500',
    },
    saveButton: {
        marginLeft: 'auto',
    },
    saveIcon: {
        width: 20,
        height: 20,
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconButton: {
        marginLeft: 10,
    },
});