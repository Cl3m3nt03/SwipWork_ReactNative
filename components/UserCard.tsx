import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type Props = {
  id: number;
  name: string;
  onDelete: () => void;
};

export const UserCard: React.FC<Props> = ({ id, name, onDelete }) => {
  return (
    <View style={{ padding: 10, margin: 5, backgroundColor: "#eee", borderRadius: 8 }}>
      <Text>{name}</Text>
      <Button title="Supprimer" onPress={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
});
