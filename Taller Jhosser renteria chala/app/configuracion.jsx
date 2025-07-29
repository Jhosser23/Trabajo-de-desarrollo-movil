import { View, Text, StyleSheet, Switch } from 'react-native';
import { useState } from 'react';

export default function Configuracion() {
  const [modoOscuro, setModoOscuro] = useState(true);
  const [notificaciones, setNotificaciones] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Modo Oscuro</Text>
        <Switch
          value={modoOscuro}
          onValueChange={setModoOscuro}
          thumbColor="#8B0000"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>carga de imagenes</Text>
        <Switch
          value={modoOscuro}
          onValueChange={setModoOscuro}
          thumbColor="#8B0000"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Notificaciones</Text>
        <Switch
          value={notificaciones}
          onValueChange={setNotificaciones}
          thumbColor="#8B0000"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#8b0815ff' },
  title: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 30 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 8,
  },
  label: { color: 'white', fontSize: 18 },
});
