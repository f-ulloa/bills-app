import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';
import { styles } from '../../styles/(tabs)/index'

export default function AddAccount() {
  const [nombreCuenta, setNombreCuenta] = useState('');
  const [categoria, setCategoria] = useState('');
  const [monto, setMonto] = useState('');

  const handleSubmit = () => {
    const fecha = new Date().toLocaleDateString();
    const data = {
      nombreCuenta,
      categoria,
      monto,
      fecha,
    };
    console.log(data);
    Alert.alert("Datos enviados", JSON.stringify(data));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.formGroup}>
          <Text>Nombre de la Cuenta</Text>
          <TextInput
            style={styles.input}
            value={nombreCuenta}
            onChangeText={setNombreCuenta}
            placeholder="Ingrese el nombre de la cuenta"
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Categoría</Text>
          <Picker
            selectedValue={categoria}
            style={styles.input}
            onValueChange={(itemValue) => setCategoria(itemValue)}
          >
            <Picker.Item label="Seleccione una categoría" value="" />
            <Picker.Item label="Necesidad" value="Necesidad" />
            <Picker.Item label="Cuentas Casa" value="Cuentas Casa" />
            <Picker.Item label="Gustos" value="Gustos" />
            <Picker.Item label="Otro" value="Otro" />
          </Picker>
        </View>
        <View style={styles.formGroup}>
          <Text>Monto</Text>
          <TextInput
            style={styles.input}
            value={monto}
            onChangeText={setMonto}
            placeholder="Ingrese el monto"
            keyboardType="numeric"
          />
        </View>
        <Button title="Enviar" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

