import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import SPACING from "../config/SPACING"
import { BlurView } from "expo-blur";
import {Ionicons} from "@expo/vector-icons"
import colors from "../config/colors";

const avatar = require("../../assets/avatar.jpg")

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View 
        style={{
          padding:  SPACING,
          flexDirection : "row",
          justifyContent : "space-between"
        }}
        >
          <TouchableOpacity style={{
            borderRadius: SPACING,
            overflow: "hidden",
            width: SPACING * 4,
            height: SPACING * 4,
            borderRadius : SPACING,

          }}>
            <BlurView style={{
              height: "100%",
              justifyContent: "center",
              alignItems:"center",
            }}>
              <Ionicons name="menu"
                        size={SPACING * 2.5}
                        color={colors.secondary}
              ></Ionicons>
            </BlurView>
          </TouchableOpacity>
          <View>
              <BlurView>
                <Image style={{ 
                  height: "100%", 
                  width:"100%",
                  borderRadius : SPACING * 2,  
                }}
                source={avatar}></Image>
              </BlurView>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
