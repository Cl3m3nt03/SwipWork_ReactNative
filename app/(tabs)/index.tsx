import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Bienvenue dans React Native 🚀</Text>
      <Text style={{ margin: 10 }}>Compteur : {count}</Text>
      <Button title="Clique moi !" onPress={() => setCount(count + 1)} />
    </View>
  );
}
