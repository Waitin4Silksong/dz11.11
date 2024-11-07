import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function RecipeDetailsScreen({ route }) {
  const { recipe } = route.params;

  return (
    <ImageBackground source={{ uri: 'https://img.freepik.com/premium-photo/colorful-gourmet-dishes-elegant-plates_1142183-7694.jpg?semt=ais_hybrid' }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>{recipe.name}</Text>
        <Text style={styles.sectionTitle}>Опис:</Text>
        <Text>{recipe.description}</Text>
        <Text style={styles.sectionTitle}>Інгредієнти:</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index}>- {ingredient}</Text>
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(239, 204, 239, 0.85)',
  },
  title: {
    fontSize: 24,
    color: '#8B4513',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#8B4513',
    marginTop: 10,
    marginBottom: 5,
  },
});
