import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Principal() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Personaje 1</Text>
        <Image source={require('./img/arthur.png')} style={styles.image} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Arthur Morgan</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>
          Arthur Morgan es el protagonista principal de Red Dead Redemption 2. Es un forajido y miembro veterano de la banda de Dutch van der Linde. Criado por Dutch y Hosea
        </Text>

        <Text style={styles.title}>Personaje 2</Text>
        <Image source={require('./img/dutch.png')} style={styles.image} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Dutch</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>
          Dutch van der Linde es el carismático líder de la banda de forajidos en Red Dead Redemption 2. Es un idealista que sueña con una vida libre de la opresión del gobierno, inspirando a sus seguidores con sus discursos y visión.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#3a0f0aff',
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  image: {
    width: 380,
    height: 520,
    alignSelf: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 30,
    width: 160,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
