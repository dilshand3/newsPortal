import { StyleSheet, Text, View, Pressable, SectionList } from 'react-native';
import React from 'react';
import Feather from "react-native-vector-icons/Feather";
import { PURPLECOLOR } from '../constants/color';
import NewsCard from '../components/NewsCard';

const NewsNotification = () => {
  const img1 = require("assets/newsImg1.jpeg");
  
  const newsData = [
    {
      title: 'Today',
      data: [
        { id: '1', image: img1, newsTitle: "Breaking News: Market Hits Record High", time: "1h ago" },
        { id: '2', image: img1, newsTitle: "Sports: India Wins Cricket World Cup", time: "2h ago" },
        { id: '3', image: img1, newsTitle: "Technology: New AI Model Launched", time: "3h ago" },
        { id: '4', image: img1, newsTitle: "Politics: Election Results Announced", time: "4h ago" },
        { id: '5', image: img1, newsTitle: "Business: Stock Market Update", time: "5h ago" },
        { id: '6', image: img1, newsTitle: "Entertainment: New Movie Release", time: "6h ago" },
      ]
    },
    {
      title: 'Yesterday',
      data: [
        { id: '7', image: img1, newsTitle: "Weather: Storm Warning Issued", time: "12h ago" },
        { id: '8', image: img1, newsTitle: "Science: New Discovery in Space", time: "15h ago" },
        { id: '9', image: img1, newsTitle: "Health: Vaccine Update Released", time: "18h ago" },
        { id: '10', image: img1, newsTitle: "Education: Schools Reopen", time: "20h ago" },
        { id: '11', image: img1, newsTitle: "Tech: Smartphone Launch Event", time: "22h ago" },
        { id: '12', image: img1, newsTitle: "Sports: Football Match Results", time: "23h ago" },
      ]
    },
    {
      title: 'Last 7 days',
      data: [
        { id: '13', image: img1, newsTitle: "Economy: Interest Rates Changed", time: "2d ago" },
        { id: '14', image: img1, newsTitle: "Travel: New Flight Routes Added", time: "3d ago" },
        { id: '15', image: img1, newsTitle: "Environment: Climate Summit Held", time: "4d ago" },
        { id: '16', image: img1, newsTitle: "Fashion: New Collection Launched", time: "5d ago" },
        { id: '17', image: img1, newsTitle: "Food: Restaurant Opening", time: "6d ago" },
        { id: '18', image: img1, newsTitle: "Gaming: New Console Revealed", time: "6d ago" },
        { id: '19', image: img1, newsTitle: "Music: Album Release Date", time: "7d ago" },
        { id: '20', image: img1, newsTitle: "Art: Exhibition Opening", time: "7d ago" },
      ]
    },
  ];

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.dateTitle}>
      <Text style={styles.left}>{title}</Text>
      {title === 'Today' && <Text style={styles.right}>Mark all as read</Text>}
    </View>
  );

  const renderItem = ({ item }) => (
    <NewsCard
      image={item.image}
      title={item.newsTitle}
      time={item.time}
      showPlayButton={false}
      showIcons={false}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Pressable onPress={() => console.log("Bell Icon Pressed!")}>
            <Feather name="arrow-left" size={30} color="#FCBA37" />
          </Pressable>
          <Text style={styles.title}>Notification</Text>
        </View>
      </View>
      
      <SectionList
        sections={newsData}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item => item.id}
        style={styles.list}
        stickySectionHeadersEnabled={false}
      />
      
    </View>
  );
};

export default NewsNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    backgroundColor: PURPLECOLOR,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 20,
    paddingTop: 40
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 16,
    gap: 110
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FCBA37",
    textAlign: "center"
  },
  dateTitle: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white'
  },
  left: {
    color: PURPLECOLOR,
    fontSize: 20,
    fontWeight: "500"
  },
  right: {
    fontWeight: "400",
    fontSize: 14
  },
  list: {
    flex: 1
  }
});