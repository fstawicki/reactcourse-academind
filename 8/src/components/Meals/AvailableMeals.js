import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import {useEffect, useState} from 'react';



const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);



  useEffect( () => {

    const fetchData = async () => {
      
      const response = await fetch('https://test-165d9-default-rtdb.europe-west1.firebasedatabase.app/meals.json');

      if(!response.ok){
        throw new Error('something went wrong :(');
      }

      const data = await response.json();
    
      const loadedMeals = [];

      for(const key in data){
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        });
      }
      
      setMeals(loadedMeals);

    }
    

    
      fetchData().catch(error => {
        setIsLoading(false);
        setHttpError(error.message);

      });
    
      

    setIsLoading(false);
    
    
    
  }, []);

  if(isLoading){
    return(
      <section className='MealsLoading'>
        <p>Loading meals, please wait...</p>
      </section>
    )
  }

  if(httpError){
    return(
      <section className='MealsLoading'>
        <p>{httpError}</p>
      </section>
    )
  }
  
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
    
    

  ));
  
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}



export default AvailableMeals;
