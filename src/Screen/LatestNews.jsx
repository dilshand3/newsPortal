import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import HeaderInput from '../components/SearchInput';
import NewsCard from '../components/NewsCard';
import AntDesign from "react-native-vector-icons/AntDesign";
import { PURPLECOLOR } from '../constants/color';
import ReusableButton from '../components/SubmitBtn';
import { useGetAllNewsQuery, useLazySearchNewsQuery } from '../../redux/Api/NewsApi';
import { timeCalculation } from '../constants/timeCalculator';

const LatestNews = () => {
  const { data: allNewsData } = useGetAllNewsQuery();
  const [searchText, setSearchText] = useState("");
  const [triggerSearch, { data: searchResults, isFetching }] = useLazySearchNewsQuery();

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      triggerSearch(searchText);
    }
  };

  const newsData = searchText ? searchResults?.news || [] : allNewsData?.news || [];

  return (
    <View style={styles.container}>
      <HeaderInput
        title="Fresh News Picks"
        showSearchInput={true}
        searchValue={searchText}
        onSearchChange={setSearchText}
        rightIcon="filter"
        onRightIconPress={handleSearch}
      />
      <View style={styles.backbtn}>
        <AntDesign name="arrowleft" color={PURPLECOLOR} size={24} />
        <Text style={{ fontSize: 18, color: PURPLECOLOR }}>Latest News</Text>
      </View>
      {isFetching && <Text>Searching...</Text>} {/*Loader required*/}
      <FlatList
        data={newsData}
        renderItem={({ item }) => (
          <NewsCard
            image={item.avatar}
            title={item.title || "Title not available"}
            time={timeCalculation(item.date)}
            showIcons={true}
          />
        )}
        keyExtractor={item => item._id}
        style={styles.list}
      />
      <View style={styles.loadbtn}>
        <ReusableButton title={"Load more"} style={styles.load} />
      </View>
    </View>
  );
};

export default LatestNews;

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