import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');
    const rawMeals = response.data.meals;
    const cleanedMeals = rawMeals.map(meal=>{
        const ingredients = [];
        for(let i=1; i<=20; i++){
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasures${i}`];
            if(ingredient && ingredient.trim()!=""){
                ingredients.push(`${measure ? measure: ''} ${ingredient}`.trim());
            }
        }
        return {
            id: meal.idMeal,
            name: meal.strMeal,
            category: meal.strCategory,
            instructions: meal.strInstructions.split('.').map(step=>step.trim()).filter(step=>step.length>0),
            image: meal.strMealThumb,
            tags: meal.strTags ? meal.strTags.split(',') : [],
            ingredients: ingredients
        };
    }
);

    res.json(cleanedMeals);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});



export default router;