import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'

const Comment = ({ totalcomment,userImg }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Comment</Text>
        <Text style={styles.totalcomment}>{totalcomment} </Text>
      </View>
      <View style={styles.content}>
        <Image source={userImg} height={20} width={20} borderRadius={50} />
        <TextInput placeholder='Add a comment' style={styles.input} />
      </View>
    </View>
  )
}

export default Comment;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    borderColor: "#C0C4C8",
    borderWidth: 2,
    flexDirection : "column",
    paddingVertical : 4,
    marginHorizontal : 12,
    borderRadius : 5
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10
  },
  title: {
    fontWeight: "500",
    fontSize: 15
  },
  totalcomment: {
    fontSize: 13,
    fontWeight: "500"
  },
  input: {
    backgroundColor: "#E8E3E3",
    width: "86%",
    maxWidth: "100%",
    borderRadius : 10,
    paddingVertical : 6,
    paddingHorizontal : 5
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap : 8,
    paddingHorizontal : 10
  }
})