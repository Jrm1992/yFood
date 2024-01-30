import React from "react";
import { View, Text } from "react-native";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IRestaurantCardProps = {
  name: string;
  description: string;
  category: string;
  imageUrl: string;
}

export default function RestaurantCard(restaurant: IRestaurantCardProps) {
  return (
    <View style={styles.container}>
      <View style={{ height: 190, backgroundColor: 'red', borderRadius: 8 }}></View>
      <View style={styles.containerDescription}>
        <View>
          <Text style={styles.restaurantTitle}>{restaurant.name}</Text>
          <Text style={styles.restaurantDescription}>{restaurant.category}</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Ionicons name="star" size={18} color="orange" />
            <Text>3.8</Text>
          </View>
          <Text>10min</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 264,
    marginVertical: 12,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
  containerDescription: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  restaurantTitle : {
    fontSize: 16,
  },
  restaurantDescription: {
    fontSize: 12,
    color: '#6b6b6b',
  }
});