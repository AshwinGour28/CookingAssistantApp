import { Text, View, StyleSheet, Button, ActivityIndicator, FlatList } from "react-native";
// import { Link } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipe, nextStep } from "../store/recipeSlice";
import { RootState } from "../store";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

interface Recipe {
    name: string,
    category: string,
    image: string,
    id: string

    tags?: string[];
    ingredients?: string[];
    instructions?: string[];
}

export default function Index() {
  const dispatch = useDispatch();
  
  const step = useSelector((state: RootState)=>state.recipe.currentStepIndex)
  const navigation = useNavigation()
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchRecipes = async () =>{
      try{
        const response = await axios.get("http://192.168.2.141:3000/api/recipes");
        setRecipes(response.data)
      }catch(error){
        console.log(error)
      }
      finally{
        setLoading(false);
      }
    }

    fetchRecipes();
  }, []);

  const handleOnPress = (id : string) =>{
    dispatch(selectRecipe(`${id}`));
    navigation.navigate('recipe');
  }

  if(loading) {
    return (
      <View>
        <ActivityIndicator size='large' color='#fff' style={{flex: 1}}/>
      </View>
    )
  }
  return (
    <FlatList<Recipe>
      data={recipes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <RecipeCard
          recipe={{
            image: item.image,
            title: item.name,
            category: item.category,
          }}
          onPress={() => handleOnPress(item.id)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  }
})