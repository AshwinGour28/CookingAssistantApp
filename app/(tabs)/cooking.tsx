import {Text, View, StyleSheet, Button} from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Speech from 'expo-speech';
import { RootState } from '../../store';
import { nextStep, resetSteps, prevStep } from '../../store/recipeSlice';

export default function Cooking(){
    const dispatch = useDispatch();
    const {currentStepIndex, selectedRecipe} = useSelector((state: RootState) => state.recipe);
    // const [hasReadAll, setHasReadAll] = useState(false);
    // for ingredients later
    // useEffect(()=>{
    //     const length = selectedRecipe?.instructions?.length ?? 0;
    //     if(!hasReadAll && length>0){
    //         const fullText = selectedRecipe?.instructions.join('. ') ?? "";
    //         Speech.speak(fullText, {
    //             onDone: ()=> setHasReadAll(true),
    //         })
    //     }
    // }, [selectedRecipe?.instructions, hasReadAll]);

    useEffect(()=>{
        const currentInstruction = selectedRecipe?.instructions[currentStepIndex];
        if(currentInstruction){
            Speech.speak(currentInstruction);
        }
    }, [currentStepIndex]);
    return (
        <View>
            <Text>Step {currentStepIndex + 1}</Text>
            <Text>{selectedRecipe?.instructions[currentStepIndex]}</Text>
            <Button title='Previous' onPress={()=>dispatch(prevStep())} disabled={currentStepIndex===0} />
                <Button title='Next' onPress={()=>dispatch(nextStep())} />
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