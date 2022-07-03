import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";



export default class PostCard extends Component {

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
              <View style={styles.authorContainer}>
              <View style={styles.authorImageContainer}>
              <Image
                 source={require("../assets/profile_img.png")}
                 style={styles.profileImage}
            ></Image>
              </View>
              <View style={styles.authorNameContainer}>
                <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                </View>
                </View>
                <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                        {this.props.post.caption}
                    </Text>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons name ={"heart"} size={RFValue(30)} color={"white"}/>
                        <Text style={styles.likeText}>12k</Text>
                    </View>
                </View>
            </View>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  authorImageContainer: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  authorContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  authorNameContainer: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  authorNameText: {
    fontSize: RFValue(28),
   justifyContent:"center",
   alignItems:"center",
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  postImage: {
    resizeMode: "contain",
    width: "100%",
    alignSelf: "center",
    height: RFValue(450)
  },
  captionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },
  captionText:{
    color:"white",
    fontFamily:"Bubblegum-Sans",
    fontSize: RFValue(15)
  },
  actionContainer:{
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  }
  
});
