import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Registro() {
  return (
    <View style={styles.container}>
        <Image
                source={require('./img/iconos.png')} 
                style={styles.image}
        /> 
      <Text style={styles.header}>Registro de Forastero</Text>

      <TextInput placeholder="Nombre" placeholderTextColor="#999" style={styles.input} />
      <TextInput placeholder="Correo" placeholderTextColor="#999" style={styles.input} />
      <TextInput placeholder="Contraseña" placeholderTextColor="#999" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#8b0815ff', justifyContent: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#F5E2C8', textAlign: 'center', marginBottom: 30 },
  input: {
    backgroundColor: '#222',
    color: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3f0606ff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  image: { width: 280, height: 220, alignSelf: 'center', marginBottom: 20 
    },

});
