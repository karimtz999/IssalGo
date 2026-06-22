import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchIcon from "@/assets/decode_svg/search";
import NotificationIcon from "@/assets/decode_svg/notification";
import BottomNav from "./BottomNav";

export default function Dashboard() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f1f2f0" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f1f2f0" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello </Text>
            <Text style={styles.headerTitle}>Delisas Agency</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <NotificationIcon width={23} height={23} stroke="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <SearchIcon width={20} height={20} stroke="#333" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Scroll */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.bottomNavScroll}
          >
            <TouchableOpacity style={styles.navItem}>
              <Image source={require("../../assets/images/bottom-nav/burger-bottom-nav.png")} style={styles.navIcon} />
               <Text style={styles.navLabel}>Burger</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <Image source={require("../../assets/images/bottom-nav/drinks-bottom-nav.png")} style={styles.navIcon} />
              <Text style={styles.navLabel}>Drinks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <Image source={require("../../assets/images/bottom-nav/meat-bottom-nav.png")} style={styles.navIcon} />
              <Text style={styles.navLabel}>Meat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
              <Image source={require("../../assets/images/bottom-nav/suchi-bottom-nav.png")} style={styles.navIcon} />
              <Text style={styles.navLabel}>Suchi</Text>
            </TouchableOpacity>
          </ScrollView>

          {/* Promo Banner */}
          <View style={styles.banner}>
            <Image source={require("../../assets/images/banner.png")} style={styles.bannerImage} />
          </View>

          {/* Best Sellers Header */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Best Sellers</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bestSellers}>

            <View style={styles.card}>
              <Image source={require("../../assets/images/pizza.png")} style={styles.foodImage} />
              <Text style={styles.foodTitle}>Melting Cheese Pizza</Text>
              <Text style={styles.foodPrice}>$10.99</Text>
              <Text style={styles.foodInfo}>44 Calories • 20 mins</Text>
            </View>
            <View style={styles.card}>
              <Image source={require("../../assets/images/burger.png")} style={styles.foodImage} />
              <Text style={styles.foodTitle}>Cheese Burger</Text>
              <Text style={styles.foodPrice}>$4.99</Text>
              <Text style={styles.foodInfo}>44 Calories • 20 mins</Text>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <BottomNav />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#f1f2f0",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 1,
    backgroundColor: "#f1f2f0",
  },
  greeting: { fontSize: 14, color: "#000" },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: "#000" },
  headerIcons: { flexDirection: "row", gap: 15 },
  iconButton: {
    width: 36,
    height: 36,
    backgroundColor: "#ffffff8a",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  bottomNavScroll: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: "#f1f2f0",
  },
  navItem: { alignItems: "center", justifyContent: "center" },
  navIcon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 4,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  navLabel: {
    fontSize: 12,
    color: "#333",
    fontWeight: "500",
  },
  banner: { margin: 5, alignItems: "center", backgroundColor: "#f1f2f0", padding: 10, borderRadius: 20 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 20,
  },
  seeAll: {
    fontSize: 17,
    color: "#06C167", // green highlight
    fontWeight: "600",
    marginLeft: 20,
  },
  bannerImage: { width: "100%", height: 150, borderRadius: 30 },
  sectionTitle: { fontSize: 27, fontWeight: "bold", marginLeft: 10 },
  bestSellers: { flexDirection: "row", justifyContent: "space-around", marginTop: 10},
  card: {
    width: 150,
    padding: 10,
    backgroundColor: "#ffffff8a",
    borderRadius: 8,
    alignItems: "center",
  },
  foodImage: { width: 100, height: 100, borderRadius: 8 },
  foodTitle: { fontWeight: "bold", marginTop: 5 },
  foodPrice: { color: "#06C167", marginTop: 3 },
  foodInfo: { fontSize: 10, color: "#666", marginTop: 3 },
});
