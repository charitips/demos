import { CharitySelectionWidget } from '@charitips/embed-react-native';
import { useCallback } from 'react';
import { router } from 'expo-router';
import { ScrollView, View, StyleSheet } from 'react-native';
import { ThemedText } from '../components/ThemedText';

export default function DonateScreen() {
  const onCharitySelected = useCallback(async () => {
    // Simulate calling your API to create a donation.
    await wait(2000);
    return {
      donationId: '1234',
    };
  }, []);
  const onCloseSuccess = useCallback(() => {
    router.back();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <ThemedText size="displaySM" weight="semibold">
          Pick a charity
        </ThemedText>
      </View>
      <CharitySelectionWidget
        publicKey="lkHD_vm8gA7OsGQDUat7-rzG2fRco7U_TWr"
        type="charity_and_amount_selection"
        balance={50}
        hideSearch={true}
        onCharitySelected={onCharitySelected}
        onCloseSuccess={onCloseSuccess}
        locale="en"
      />
    </ScrollView>
  );
}

function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    padding: 20,
    alignItems: 'center',
  },
});
