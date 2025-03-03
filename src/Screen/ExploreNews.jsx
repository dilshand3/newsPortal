import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import HeaderInput from '../components/SearchInput';
import NewsCard from '../components/NewsCard';
import AntDesign from "react-native-vector-icons/AntDesign";
import { PURPLECOLOR } from '../constants/color';
import ReusableButton from '../components/SubmitBtn';
import CategoryItem from '../components/CategoryItem';

const ExploreNews = () => {
  const img1 = require("assets/newsImg1.jpeg");
  const [searchText, setSearchText] = useState("");
  const categoriesFromAPI = ['All', 'Sports', 'Politics', 'Technology', 'Business'];
  const [activeCategory, setActiveCategory] = useState(categoriesFromAPI[0]);

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
    }
  ];

  return (
    <View style={styles.container}>
      <HeaderInput
        title="Explore the Latest Trending News"
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
      />
      <FlatList
        data={newsData}
        renderItem={({ item }) => (
          <NewsCard
            image={item.image}
            title={item.title}
            time={item.time}
            showIcons={true}
          />
        )}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <View style={styles.loadbtn}>
        <ReusableButton title={"Load more"} style={styles.load} />
      </View>
    </View>
  );
};

export default ExploreNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backbtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 20,
    marginLeft: 15
  },
  list: {
    marginHorizontal: 10
  },
  loadbtn : {
    paddingHorizontal : 60,
    marginBottom : 20
  },
  load : {
    color : "#FCBA37",
    padding : -3
  }
});