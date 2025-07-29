import { View, Text, StyleSheet, Image } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>
      <Image source={require('./img/perfil.png')} style={styles.avatar} />
      <Text style={styles.name}>Arthur</Text>
      <Text style={styles.info}>Vaquero de honor</Text>
      <Text style={styles.info}>vive en el viejo oeste 🤠</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#8b0815ff', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 },
  avatar: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  name: { fontSize: 20, color: 'white', fontWeight: 'bold' },
  info: { fontSize: 16, color: '#ccc', marginTop: 5, textAlign: 'center' },
});
