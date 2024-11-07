import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens1/HomeScreen";
import AddRecipeScreen from "./screens1/AddRecipeScreen";
import RecipeDetailsScreen from "./screens1/RecipeDetailsScreen";


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add Recipe" component={AddRecipeScreen} />
        <Stack.Screen name="Recipe Details" component={RecipeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
