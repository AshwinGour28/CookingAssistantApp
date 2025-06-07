import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

type Recipe = {
    image: string,
    name: string,
    category: string,
    id: string,
    ingredients: string[];
    instructions: string[];
}
const RecipeCard = ({recipe, onPress}: {recipe: Recipe; onPress:() => void})=>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image 
                source={{uri: recipe.image}}
                resizeMode='cover'
                style={styles.image}
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    {recipe.name}
                </Text>
                <Text style={styles.text}>
                    {recipe.category}
                </Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 12,
    marginBottom: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: "#000",
    marginBottom: 10,

  },
  text: {
    fontSize: 14,
    color: 'gray',

  }
})

export default RecipeCard;