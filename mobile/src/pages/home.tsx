import { View, Text, StyleSheet, TextInput } from 'react-native'
import Button from '../components/button'
import { Ionicons } from '@expo/vector-icons';

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
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>What do you want for <Text style={{ color: "orange" }}>Dinner</Text></Text>
        <TextInput 
          placeholder="Search" 
          style={{ borderWidth: 1, borderRadius: 8, padding: 8, marginTop: 8 }}
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