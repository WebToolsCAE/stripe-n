import { View, Text, StyleSheet, Image } from 'react-native';

export default function NoDataView() {
  return (
    <View style={styles.container}>
      <Image
        // Replace with a local asset (e.g. require('../assets/no-data-icon.png'))
        // to customise the icon, matching the Assets.xcassets/NoDataIcon approach
        // from the original SwiftUI app. Falls back to the tray emoji as a
        // placeholder when no custom image is supplied.
        source={require('../assets/no-data-icon.png')}
        style={styles.icon}
        resizeMode="contain"
        // onError is not a prop on Image in RN, so we rely on the asset existing
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
