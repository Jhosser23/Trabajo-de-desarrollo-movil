import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function Lista() {
  const items = ['Pistola', 'Sombrero', 'Caballo', 'Mapa', 'Linterna'];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inventario</Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {items.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{item}</Text>
            <Text style={styles.cardText}>Un artículo útil para tu aventura en el viejo oeste.</Text>
            <TouchableOpacity>
              <Text style={styles.link}>Ver más</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#8b0815ff', alignItems: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#F5E2C8', marginBottom: 15 },
  cardContainer: { gap: 20 },
  card: { backgroundColor: '#222', padding: 20, borderRadius: 10 },
  cardTitle: { fontWeight: 'bold', fontSize: 28, marginBottom: 5, color: '#F5E2C8' },
  cardText: { fontSize: 18, marginBottom: 8, color: 'white' },
  link: { color: 'cyan', fontWeight: '500' },

  
});
