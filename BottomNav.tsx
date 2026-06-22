import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated} from "react-native";
import HomeIcon from "@/assets/decode_svg/home";
import SearchIcon from "@/assets/decode_svg/search";
import cartIcon from "@/assets/decode_svg/cart";
import ticketIcon from "@/assets/decode_svg/ticket";
import profileIcon from "@/assets/decode_svg/profile";


export default function BottomNav() {
  const [activeTab, setActiveTab] = useState("Home");
  const scaleAnim = useRef(new Animated.Value(1)).current;

     const handlePress = (tab: string) => {
        setActiveTab(tab);

    // Bubble animation
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.2, duration: 150, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
    ]).start();
  };

const renderItem = (tab: string, IconComponent: any, label: string) => (
  <TouchableOpacity onPress={() => handlePress(tab)} style={styles.navItem}>
    <Animated.View
      style={[
        styles.iconButton,
        activeTab === tab && styles.activeButton,
        { transform: [{ scale: activeTab === tab ? scaleAnim : 1 }] },
      ]}
    >
      <View style={styles.iconRow}>
        <IconComponent width={20} height={20} stroke="#333" />
        {/* Show text only if this tab is active */}
        {activeTab === tab && (
          <Text style={[styles.navLabel, styles.activeLabel]}>{label}</Text>
        )}
      </View>
    </Animated.View>
  </TouchableOpacity>
);

  return (
    <View style={styles.bottomNav}>
      {renderItem("Home", HomeIcon, "Home")}
      {renderItem("Search", SearchIcon, "Search")}
      {renderItem("Cart", cartIcon, "Cart")}
      {renderItem("Tickets", ticketIcon, "Tickets")}
      {renderItem("Profile", profileIcon, "Profile")}
      
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#0e0f0c",
    backgroundColor: "#f1f2f0",
    bottom: 50,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6, // spacing between icon and text
  },
  navLabel: { fontSize: 14, color: "#ffffff" },
  activeLabel: { color: "#fff", fontWeight: "bold" }, // white text when active
  navItem: { alignItems: "center" },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#e6e7e6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    top: 30,
  },

  activeButton: {
    backgroundColor: "#06C167", 
    width: 100,
    height: 50,
    // green background when active
    },
  navIcon: { width: 24, height: 24, resizeMode: "contain" },
  },
);
