import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface RecipeState {
    selectedRecipeId: string | null;
    currentStepIndex: number;
}

const initialState: RecipeState = {
    selectedRecipeId: null,
    currentStepIndex: 0,
}

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        selectRecipe: (state, action: PayloadAction<string>) => {
            state.selectedRecipeId = action.payload;
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