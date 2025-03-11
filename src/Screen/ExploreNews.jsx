import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import HeaderInput from '../components/SearchInput';
import NewsCard from '../components/NewsCard';
import AntDesign from "react-native-vector-icons/AntDesign";
import { PURPLECOLOR } from '../constants/color';
import ReusableButton from '../components/SubmitBtn';
import CategoryItem from '../components/CategoryItem';
import { useGetAllCategoriesQuery } from '../../redux/Api/CategoriesApi';
import { useAllTrendingNewsQuery } from '../../redux/Api/TrendingNews';
import { timeCalculation } from '../constants/timeCalculator';

const ExploreNews = () => {
  const { data } = useGetAllCategoriesQuery();
  const { data: trendingNewsData } = useAllTrendingNewsQuery();
  const img1 = require("assets/newsImg1.jpeg");
  const [searchText, setSearchText] = useState("");

  const categoriesFromAPI = data?.categories?.map(cat => cat.name) || [];

  const finalCategories = ["All", ...categoriesFromAPI];

  const [activeCategory, setActiveCategory] = useState(finalCategories[0]);

  const newsData = trendingNewsData?.newsTrend || []
  console.log(newsData)
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
        data={finalCategories}
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
      />

      <FlatList
        data={newsData}
        renderItem={({ item }) => (
          <NewsCard
            image={item.avatar || img1}  
            title={item.topicName}
            time={timeCalculation(item.createdAt)}
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
  loadbtn: {
    paddingHorizontal: 60,
    marginBottom: 20
  },
  load: {
    color: "#FCBA37",
    padding: -3
  }
});