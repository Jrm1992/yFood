import { View, Text, StyleSheet, TextInput, FlatList, Image, ScrollView } from 'react-native'
import Button from '../components/button'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import RestaurantCard from '../components/restaurant-card';

const restaurantsData = [
  {
    name: 'Burger Palace',
    address: '123 Main St, Cityville',
    imageUrl: 'fdsklf',
    phone: '555-1234',
    description: 'Delicious burgers for everyone!',
    category: 'BURGER',
  },
  {
    name: 'Pizza Haven',
    address: '456 Oak St, Townsville',
    imageUrl: 'fdsklf',
    phone: '555-5678',
    description: 'Authentic pizzas made with love.',
    category: 'PIZZA',
  },
  {
    name: 'Fresh Greens',
    address: '789 Elm St, Veggie City',
    imageUrl: 'fdsklf',
    phone: '555-9101',
    description: 'Healthy salads to keep you fit!',
    category: 'SALAD',
  },
  {
    name: 'Thirst Quencher',
    address: '101 Pine St, Drinksville',
    imageUrl: 'fdsklf',
    phone: '555-1122',
    description: 'Wide range of refreshing drinks.',
    category: 'DRINKS',
  },
  {
    name: 'Flavors Delight',
    address: '202 Maple St, Tasty Town',
    imageUrl: 'fdsklf',
    phone: '555-3344',
    description: 'A mix of delicious flavors in every dish.',
    category: 'BURGER',
  },
];

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <Button>
          <Ionicons name="filter-sharp" size={18} color="black" />
        </Button>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Ionicons name="location-sharp" size={18} color="orange" />
          <Text>Macae, RJ</Text>
          <Ionicons name="chevron-down-sharp" size={18} color="orange" />
        </View>

        <Button>
          <Ionicons name="ios-notifications-sharp" size={18} color="black" />
        </Button>
      </View>

      <View>
        <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: "center", lineHeight: 36, paddingVertical: 16 }}>What do you want {'\n'} for <Text style={{ color: "orange" }}>Dinner</Text></Text>
        <View style={{ flexDirection: "row", gap: 8, backgroundColor: "#f2f2f2", borderRadius: 8, padding: 12, alignItems: "center"}}>
          <Ionicons name="search" size={26} color="gray" />
          <TextInput 
            placeholder="Search" 
            style={{ flex: 1 }}
          />
          <MaterialIcons name="tune" size={24} color="orange" />
        </View>
      </View>

      <View style={{ marginTop: 32 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", paddingVertical: 12 }}>Categories</Text>
        <FlatList 
          data={['Burger', 'Drinks', 'Dessert', 'Pizza']}
          renderItem={({ item }) => 
            <Button>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Image source={require(`../../assets/icons/Burger.png`)} style={{ width: 32, height: 32 }}/>
                <Text style={{ fontWeight: "bold"}}>{item}</Text>
              </View>
            </Button>}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        />
      </View>
      
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Popular</Text>
        {restaurantsData.map((restaurant, index) => <RestaurantCard key={index} {...restaurant} />)}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  hero: {
    marginTop: 32,
    flexDirection: "column",
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 36,
    paddingVertical: 16,
    
  }
  
})