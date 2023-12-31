import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper';
import Button from '../components/button'
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';;

export default function Home() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button>
          <Ionicons name="filter-sharp" size={18} color={colors.primary} />
        </Button>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Ionicons name="location-sharp" size={18} color={colors.primary} />
          <Text>Macae, RJ</Text>
          <Ionicons name="chevron-down-sharp" size={18} color={colors.primary} />
        </View>

        <Button>
          <Ionicons name="ios-notifications-sharp" size={18} color="black" />
        </Button>

      </View>

      <View style={styles.banner}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>What do you want for <Text style={{ color: colors.primary }}>Dinner</Text></Text>
        <TextInput
          mode='outlined'
          placeholder="Search"
          activeOutlineColor='transparent'
          style={{ marginTop: 16, backgroundColor: "#f2f2f2" }}
          left={ <TextInput.Icon name="magnify" /> }
          right={ <TextInput.Icon name="tune" color={colors.primary} /> }
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
  banner: {
    paddingHorizontal: 36,
    marginTop: 52,
  }
})