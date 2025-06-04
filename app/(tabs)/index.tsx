import { Text, View, StyleSheet, Button } from "react-native";
// import { Link } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipe, nextStep } from "../store/recipeSlice";
import { RootState } from "../store";

export default function Index() {
  const dispatch = useDispatch();
  const selectedRecipe = useSelector(
    (state: RootState) => state.recipe.selectedRecipeId
  )
  const step = useSelector((state: RootState)=>state.recipe.currentStepIndex)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Selected Recipe: {selectedRecipe ?? 'None'}
      </Text>
      <Text style={styles.text}>
        Current Step {step ?? 'None'}
      </Text>
      <Button title="Select Recipe" onPress={()=>{
        dispatch(selectRecipe('maggie'))
        console.log('Dispatching recipe')
        }}/>
      <Button title="Next Step" onPress={()=>{
        dispatch(nextStep())
        console.log('updating step')
        console.log(step);
        }}/>

      {/* <Link href="/receipe" style={styles.text}>Go to About Page</Link> */}
    </View>
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