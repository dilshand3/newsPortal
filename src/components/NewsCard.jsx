import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { PURPLECOLOR } from "../constants/color";

const NewsCard = ({ image, title, time, showPlayButton, showIcons }) => {
  const unsaved = require("assets/unsaved.png");
  return (
    <View style={styles.cardContainer}>
      <Image source={typeof image === "string" ? { uri: image } : image} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>

        {showPlayButton && (
          <Pressable style={styles.playButton}>
            <AntDesign name="caretright" size={16} color={PURPLECOLOR} />
            <Text style={styles.playText}> Play Video</Text>
          </Pressable>
        )}

        <View style={styles.bottomRow}>
          <View style={styles.timeContainer}>
            <MaterialIcons name="schedule" size={18} color="#666" />
            <Text style={styles.timeText}>{time}</Text>
          </View>
          {showIcons && (
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
          )}
        </View>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginVertical: 7,
    gap: 5,
  },
  image: {
    width: 120,
    height: 90,
    borderRadius: 6,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333",
    marginBottom: 6,
  },
  playButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  playText: {
    color: PURPLECOLOR,
    fontSize: 14,
    marginLeft: 4,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    fontSize: 12,
    color: PURPLECOLOR,
    marginLeft: 4,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 10,
  },
});
