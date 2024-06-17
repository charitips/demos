import { Link } from 'expo-router';
import { ThemedText } from '../components/ThemedText';
import { View, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href="/donate" asChild>
        <Pressable>
          <ThemedText
            color="primary"
            weight="medium"
            size="textLG"
            colorLevel="_700"
          >
            Donate
          </ThemedText>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
