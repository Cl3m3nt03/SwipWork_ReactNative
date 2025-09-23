import React, { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';
import { UserCard } from '../../components/UserCard';

export default function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);

  const fetchUsers = async () => {
    try {
        console.log(users);
      const response = await fetch("http://192.168.1.252:8000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Erreur récupération users :", error);
    }
  };

  const addUser = async () => {
    if (!name.trim()) return;

    const newId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;

    try {
      const response = await fetch("http://192.168.1.252:8000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: newId, name })
      });
      const newUser = await response.json();
      setUsers([...users, newUser]);
      setName('');
    } catch (error) {
      console.error("Erreur ajout user :", error);
    }
  };

  const deleteUser = async (id: number) => {
    console.log("Suppression user id :", id);
    try {
      const response = await fetch(`http://192.168.1.252:8000/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setUsers(prev => prev.filter(u => u.id !== id));
    } catch (error) {
      console.error("Erreur suppression user !", error);
    }
  };

  useEffect(() => { fetchUsers(); }, []);
  useEffect(() => { if (users.length) Alert.alert("Mise à jour", `Nombre d'utilisateurs : ${users.length}`); }, [users]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nom"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Ajouter" onPress={addUser} />
      {users.map(u => (
        <UserCard key={u.id} id={u.id} name={u.name} onDelete={() => deleteUser(u.id)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: "#aaa", padding: 8, marginBottom: 10, borderRadius: 5 },
});
