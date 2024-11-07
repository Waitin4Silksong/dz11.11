import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <ImageBackground source={{ uri: 'https://img.freepik.com/vetores-premium/padrao-colorido-sem-costura-em-tons-pasteis-para-outono-e-primavera_823456-35.jpg?semt=ais_hybrid'}} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Список Рецептів</Text>
        <FlatList
          data={recipes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Button
              title={item.name}
              onPress={() => navigation.navigate("Recipe Details", { recipe: item })}
            />
          )}
        />
        <Button title="Додати новий рецепт" onPress={() => navigation.navigate("Add Recipe", { addRecipe })} />
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
    fontSize: 30,
    color: '#8B4513',
    marginBottom: 20,
    padding: 40,
    textAlign: 'center',
    fontFamily: 'Bitter',
  },
});
