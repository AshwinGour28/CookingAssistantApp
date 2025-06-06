import {Text, View, StyleSheet, Image} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function Recipe(){
    const selectedRecipe = useSelector((state: RootState) => state.recipe.selectedRecipeId)
    
    if(!selectedRecipe){
        return (
            <View style={styles.container}>
        <Text style={styles.text}>No recipe selected</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {/* <Image source={{ uri: selectedRecipe.image}} />
            <Text style={styles.text}>{selectedRecipe.name}</Text>
            <Text style={styles.text}>{selectedRecipe.category}</Text>
            <Text style={styles.text}>{selectedRecipe.ingredients}</Text> */
            <Text>{selectedRecipe}</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff'
    }
})