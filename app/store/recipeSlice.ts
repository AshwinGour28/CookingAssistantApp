import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Recipe {
    image: string,
    name: string,
    category: string,
    id: string,
    ingredients: string[];
    instructions: string[];
}
interface RecipeState {
    selectedRecipe: Recipe | null;
    currentStepIndex: number;
}

const initialState: RecipeState = {
    selectedRecipe: null,
    currentStepIndex: 0,
}

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        selectRecipe: (state, action: PayloadAction<Recipe>) => {
            state.selectedRecipe = action.payload;
            state.currentStepIndex = 0;
        },
        nextStep: (state) => {
            state.currentStepIndex+=1;
        },
        resetSteps: (state) => {
            state.currentStepIndex = 0;
        }
    }
});

export const {selectRecipe, nextStep, resetSteps} = recipeSlice.actions;

export default recipeSlice.reducer;