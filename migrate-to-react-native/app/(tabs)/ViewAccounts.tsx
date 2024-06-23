import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import { styles } from '../../styles/(tabs)/ViewAccounts'

export default function ViewAccount() {
  const accounts = [
    { name: 'Supermarket', category: 'Necessity', amount: 100, date: '06/01/2024' },
    { name: 'Internet', category: 'House Bills', amount: 50, date: '06/02/2024' },
  ];

  const handleEdit = (account: any) => {
    Alert.alert('Edit Account', `Edit ${account.name}`);
  };

  const handleRemove = (account: any) => {
    Alert.alert('Remove Account', `Remove ${account.name}`);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{item.name}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.label}>Category:</Text>
        <Text style={styles.value}>{item.category}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.label}>Amount:</Text>
        <Text style={styles.value}>{item.amount}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{item.date}</Text>
      </View>
      <View style={styles.actions}>
        <Button title="Edit" color="#ffc107" onPress={() => handleEdit(item)} />
        <Button title="Remove" color="#dc3545" onPress={() => handleRemove(item)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Accounts</Text>
      <FlatList
        data={accounts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};