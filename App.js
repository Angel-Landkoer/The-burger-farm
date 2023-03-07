import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { CustomText } from './src/components/CustomText/CustomText';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomText>
        Hola, Coder!
      </CustomText>
      <CustomText>
        Welcome to The-burger-farm
      </CustomText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
