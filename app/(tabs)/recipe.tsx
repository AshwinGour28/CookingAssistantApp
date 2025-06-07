import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function Recipe(){
    const selectedRecipe = useSelector((state: RootState) => state.recipe.selectedRecipe)
    
    if(!selectedRecipe){
        return (
            <View style={styles.container}>
        <Text style={styles.text}>No recipe selected</Text>
            </View>
        )
    }
    return (
        <ScrollView>
            <Image source={{uri: selectedRecipe.image}} style={styles.image} resizeMode='cover'/>
            <Text style={styles.head}>{selectedRecipe.name}</Text>
            <Text style={styles.category}>{selectedRecipe.category}</Text>
            <Text style={styles.section}>Ingredients</Text>
            {selectedRecipe.ingredients.map((ing, i)=>(
                <Text key={i} style={styles.text}>{i+1}. {ing}</Text>
            ))}
            <Text style={styles.section}>Steps</Text>
            {selectedRecipe.instructions.map((step, i)=>(
                <Text key={i} style={styles.text}>{i+1}. {step}</Text>
            ))}
        </ScrollView>
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
        marginHorizontal: 10,
        marginBottom: 4
    },
    image: {
        width: '100%',
        height: 250,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    head: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 10,
    },
    category: {
        fontSize: 20,
        marginHorizontal: 10,
        color: '#666',
        marginBottom: 20
        
    },
    section: {
        fontSize: 20,
        marginHorizontal: 10,
        marginTop: 16,
        marginBottom: 8,
    

    }
}
)