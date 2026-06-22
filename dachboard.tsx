import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import SearchIcon from "@/assets/decode_svg/search";
import NotificationIcon from "@/assets/decode_svg/notification";
import BottomNav from "./BottomNav";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello </Text>
          <Text style={styles.headerTitle}>Delisas Agency</Text>
        </View>
        <View style={styles.headerIcons}>
          {/* Notification button */}
          <TouchableOpacity style={styles.iconButton}>
            <NotificationIcon width={23} height={23} stroke="#333" />
          </TouchableOpacity>
          {/* Search button */}
          <TouchableOpacity style={styles.iconButton}>
            <SearchIcon width={20} height={20} stroke="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Scroll */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories (Horizontal Scroll) */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bottomNavScroll}
        >
          <TouchableOpacity style={styles.navItem}>
            <Image source={require("../../assets/images/bottom-nav/burger-bottom-nav.png")} style={styles.navIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Image source={require("../../assets/images/bottom-nav/drinks-bottom-nav.png")} style={styles.navIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Image source={require("../../assets/images/bottom-nav/meat-bottom-nav.png")} style={styles.navIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Image source={require("../../assets/images/bottom-nav/suchi-bottom-nav.png")} style={styles.navIcon} />
          </TouchableOpacity>
        </ScrollView>

        {/* Promo Banner */}
        <View style={styles.banner}>
          <Image source={require("../../assets/images/banner.png")} style={styles.bannerImage} />
        </View>

        {/* Best Sellers */}
        <Text style={styles.sectionTitle}>Best Sellers</Text>
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
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f1f2f0", marginTop: 50 },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#f1f2f0",
  },
  greeting: { fontSize: 14, color: "#000000" },
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

  // Horizontal scroll for categories
  bottomNavScroll: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: "#f1f2f0",
  },
  navItem: { alignItems: "center", justifyContent: "center" },
  navIcon: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 4,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  navLabel: { fontSize: 12, color: "#f1f2f0" },

  // Banner
  banner: { margin: 10, alignItems: "center",backgroundColor: "#f1f2f0", padding: 10, borderRadius: 20 },
  bannerImage: { width: "100%", height: 150, borderRadius: 30 },

  // Best Sellers
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginLeft: 15, marginTop: 20 },
  bestSellers: { flexDirection: "row", justifyContent: "space-around", marginTop: 10 },
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
  foodInfo: { fontSize: 12, color: "#666", marginTop: 3 },

  // Bottom Navigation
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#ffffff8a",
  },
});
