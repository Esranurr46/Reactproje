import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, /*Dimensions */ useWindowDimensions } from 'react-native';

const App = () => {
 /* const [windowDimensions, setWindowDimensions] = useState({
    window: Dimensions.get('window'),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowDimensions({ window });
    });
    return () => subscription?.remove();
  }, []); // <= önemli: sadece mount/unmount

  const { width, height } = windowDimensions.window; */

  const windowWith = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;  

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWith > 400 ? '70%' : '90%',
            height: windowHeight > 600 ? '60%' : '90%',
          },
        ]}
      >
        <Text style={{ fontSize: windowWith > 500 ? 50 : 24 }}>welcome</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'plum',
  },
  box: {
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
