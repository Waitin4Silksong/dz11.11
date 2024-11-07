import React, { useState } from 'react';
import { Button, View, TextInput, Alert, StyleSheet } from 'react-native';

export default function AddRecipeScreen({ navigation, route }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  const saveRecipe = () => {
    if (name.trim() && description.trim() && ingredients.trim()) {
      const newRecipe = { name, description, ingredients: ingredients.split(', ') };
      route.params.addRecipe(newRecipe);
      Alert.alert('Рецепт збережено');
      setName('');
      setDescription('');
      setIngredients('');
      navigation.navigate("Home");
    } else {
      Alert.alert('Заповніть усі поля');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Назва рецепта"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Опис"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Інгредієнти (через кому)"
        value={ingredients}
        onChangeText={setIngredients}
      />
      <Button title="Зберегти рецепт" onPress={saveRecipe} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#efccef',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#8B4513',
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#fae2fa',
  },
});
