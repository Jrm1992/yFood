import { View, Text, StyleSheet, TextInput, FlatList, Image } from 'react-native'
import Button from '../components/button'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
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
    </View>
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
})