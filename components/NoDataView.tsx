import { View, Text, StyleSheet, Image } from 'react-native';

export default function NoDataView() {
  return (
    <View style={styles.container}>
      <Image
        // Replace assets/no-data-icon.png with your own image to customise the
        // placeholder icon, mirroring the Assets.xcassets/NoDataIcon.imageset
        // approach from the original SwiftUI app.
        source={require('../assets/no-data-icon.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.label}>No Data</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 12,
  },
  icon: {
    width: 120,
    height: 120,
    opacity: 0.5,
  },
  label: {
    fontSize: 15,
    color: '#8e8e93',
  },
});
