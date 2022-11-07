import {useState} from 'react'
import { AddCategory, GifGrid } from './components';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch ']);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes( newCategory )) return;
        //categories.push('Gus');
        //1. Forma de hacerlo
        setCategories([ newCategory, ...categories]);
        //console.log(newCategory);
        //2. Forma de hacerlo
        //setCategories( cat=> [...cat, 'Gus']);
    }
    

  return (
    
    <>
       
        <h1>GifExpertApp</h1>
       
        <AddCategory 
       
            onNewCategory={ (value) => onAddCategory(value)}
        />
                       
        { 
            categories.map( category => (
                    
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
            ))
        }
        
    </>
  )
}
