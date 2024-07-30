
import { useState, useEffect } from 'react';

import * as petService from './services/petService';

import PetList from './components/PetList';

const App = () => {

  const [petList, setPetList] = useState([]);

  // Create a new useEffect
  useEffect(() => {

    // create a new async function
    const fetchPets = async () => {
      // call on the index function

      try {

      const data = await petService.index();

      if (pets.error) {

        throw new Error(pets.error);

        }
      // Set petList state to the returned pets data
      setPetList(pets);

      } catch (error) {

        console.log(error);

      }

    };

    // invoke the function
    fetchPets();

    // add an empty dependency array to the `useEffect` hook.

  }, []);

  return <PetList petList={petList} />;
};

export default App;