import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NoDataView from '@/components/NoDataView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <NoDataView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
