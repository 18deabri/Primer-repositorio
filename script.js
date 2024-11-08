// Paso 14 - Obtener el formulario
const calorieCounter = document.getElementById('calorie-counter');

// Paso 15 - Obtener el input del presupuesto
const budgetNumberInput = document.getElementById('budget');

// Paso 15 - Obtener el dropdown de tipo de entrada
const entryDropdown = document.getElementById('entry-dropdown');

// Paso 16 - Obtener el bot�n para agregar entradas
const addEntryButton = document.getElementById('add-entry');

// Paso 16 - Obtener el bot�n de limpiar
const clearButton = document.getElementById('clear');

// Paso 16 - Obtener el div de salida
const output = document.getElementById('output');

// Paso 17 - Declarar la variable isError
let isError = false;

// Paso 18 - Declarar la funci�n para limpiar la entrada
function cleanInputString(str) {
  // Paso 19 - Declara una variable regex
  const regex = /hello/;
}
// Paso 20 
function cleanInputString(str) {
  const regex = /\+-/;
}

// Paso 21
function cleanInputString(str) {
  const regex = /\+-\s/;
}

// Paso 22
function cleanInputString(str) {
  const regex = /[+-\s]/;
}

// Paso 23
function cleanInputString(str) {
  const regex = /[+-\s]/g;

}
// Paso 24 

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

// Paso 25
function cleanInputString(str) {
  console.log("original string: ", str);
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

// Paso 26 - Probar la funci�n parseCleanInput
function cleanInputString(str) {
  console.log("original string: ", str);
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

console.log(cleanInputString("+-99"));

// Paso 27 
function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

// Paso 28 - Declarar la funci�n para verificar entradas inv�lidas
function isInvalidInput(str) {
  // Paso 29 - Definir la expresi�n regular para buscar el car�cter 'e'
  const regex = /e/i; // Paso 30 - Incluir la bandera 'i' para que no distinga may�sculas
}

// Paso 31
function isInvalidInput(str) {
  const regex = /[0-9]e[0-9]/i;
}

// Paso 32
function isInvalidInput(str) {
  const regex = /[0-9]+e[0-9]+/i;
}


// Paso 33
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;

}
  
// Paso 34
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}


//Paso 35: Prueba la funci�n isInvalidInput llam�ndola con "1e3" y observa el resultado en la consola.
  
  console.log(isInvalidInput("1e3"));
  
// Paso 36: Prueba con una entrada v�lida "10" en la funci�n isInvalidInput y observa el resultado en la consola.
  console.log(isInvalidInput("10"));
  
// Paso 37: Al finalizar las pruebas, elimina las declaraciones console.log para dejar el c�digo limpio.
  
// Paso 38 BORRAR

console.log(entryDropdown.value)


  // Paso 39: Declara una funci�n vac�a addEntry sin par�metros para a�adir entradas al contador de calor�as.
  function addEntry() {
    // Paso 40: Obt�n el valor de la categor�a seleccionada en el men� desplegable y agrega "#" al inicio.
    const targetId = '#' + entryDropdown.value;
  }
  // Paso 41: Usa querySelector para seleccionar el elemento input-container dentro de targetInputContainer.
    function addEntry() {
      const targetId = '#' + entryDropdown.value;
      const targetInputContainer = document.querySelector(targetId + ' .input-container');
    }

  
    // Paso 42
    function addEntry() {
      const targetId = '#' + entryDropdown.value;
      const targetInputContainer = document.querySelector(`${targetId} .input-container`);
    }
  

    // Paso 43

    function addEntry() {
      const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    
    }

    // Paso 44
    function addEntry() {
      const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
      const entryNumber = targetInputContainer.querySelectorAll();
    }

    // Paso 45
    function addEntry() {
      const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
      const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
      
    }

    // Paso 46
    function addEntry() {
      const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
      const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
      const HTMLString = `  `;
    }
    
    // paso 47

    function addEntry() {
      const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
      const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
      const HTMLString = `<label>Entry ${entryNumber} Name</label>`;
    }

    // Paso 48

    function addEntry() {
      const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
      const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
      const HTMLString = `
      <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>`;
    }

    // Paso 49
    function addEntry() {
      const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
      const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
      const HTMLString = `
      <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
      <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />`;
    }

    // Paso 50
    function addEntry() {
      const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
      const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
      const HTMLString = `
      <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
      <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
      <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>`;
    }

    // Paso 51

    function addEntry() {
      const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
      const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
      const HTMLString = `
      <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
      <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
      <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
      <input
        type="number"
        min="0"
        id="${entryDropdown.value}-${entryNumber}-calories"
        placeholder="Calories"
      />`;
    
    }

    // Paso 52

    function addEntry() {
      const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
      const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
      const HTMLString = `
      <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
      <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
      <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
      <input
        type="number"
        min="0"
        id="${entryDropdown.value}-${entryNumber}-calories"
        placeholder="Calories"
      />`;
      targetInputContainer.innerHTML += HTMLString;
    }

    // Paso 53
    addEntryButton.addEventListener("click", addEntry);


    // paso 54
    addEntryButton.addEventListener("click", addEntry);
    
    // Paso 55
    addEntryButton.addEventListener("click", addEntry);

    // Paso 56
    addEntryButton.addEventListener("click", addEntry);

    // Pso 57 Define una funci�n para obtener el total de calor�as de las entradas del usuario.
    function getCaloriesFromInputs(list) {

    }

    
    // Paso 58 declara calories y asigna el valor inicial de 0

    function getCaloriesFromInputs(list) {
      let calories = 0;
    
    
    }
  
    // Paso 59
    function getCaloriesFromInputs(list) {
      let calories = 0;
      for (const item of list) {

      }
    }

    // Paso 60
    function getCaloriesFromInputs(list) {
      let calories = 0;
    
      for (const item of list) {
        const currVal = item.value;
      }
    }

    //Paso 61
    function getCaloriesFromInputs(list) {
      let calories = 0;
    
      for (const item of list) {
        const currVal = cleanInputString(item.value);
    
      }
    }

    // Paso 63
    function getCaloriesFromInputs(list) {
      let calories = 0;
    
      for (const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);
    
        if (invalidInputMatch) {
    
        }
      }
    }

    // Paso 64
    function getCaloriesFromInputs(list) {
      let calories = 0;
    
      for (const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);
    
        if (invalidInputMatch) {
          alert(`Invalid Input: ${invalidInputMatch[0]}`);
    
        }
      }
    }

    // Paso 65
    function getCaloriesFromInputs(list) {
      let calories = 0;
    
      for (const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);
    
        if (invalidInputMatch) {
          alert(`Invalid Input: ${invalidInputMatch[0]}`);
          isError = true;
          return null;
        }
    
      }
    }

    // Paso 66
    function getCaloriesFromInputs(list) {
      let calories = 0;
    
      for (const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);
    
        if (invalidInputMatch) {
          alert(`Invalid Input: ${invalidInputMatch[0]}`);
          isError = true;
          return null;
        }
        calories += Number(currVal);
      }
    }

    // Paso 67
    function getCaloriesFromInputs(list) {
      let calories = 0;
    
      for (const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);
    
        if (invalidInputMatch) {
          alert(`Invalid Input: ${invalidInputMatch[0]}`);
          isError = true;
          return null;
        }
        calories += Number(currVal);
      }
      return calories;
    }

    // Paso 68 Declara una funci�n calculateCalories que toma un evento (e) como argumento.
    function calculateCalories(e) {

    }

    // Paso 69
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
    
    }

    // Paso 70
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
          
    }

    // Paso 71
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
    
    }

    // Paso 72
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
        
    }

    // Paso 73
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    
    }

    // Paso 74
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    
    }

    // Paso 75
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    
    }

    // Paso 76
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
    
    }

    // Paso 77
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
    
    }

    // Paso 78
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    
    }

    // Paso 79
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    
    }

    // Paso 80
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
    
    }
  
    // Paso 81
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = ``;
    }

    // Paso 82
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}"></span>
      `;
    }

    // Paso 83
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}">${remainingCalories} Calorie ${surplusOrDeficit}</span>
      `;
    }

    // Paso 84
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
      
      `;
    }

    // Paso 85
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
      <hr>
    
      `;
    }

    // Paso 86
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
      <hr>
      <p>${budgetCalories} Calories Budgeted</p>
    
      `;
    }

    // Paso 87
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
      <hr>
      <p>${budgetCalories} Calories Budgeted</p>
      <p>${consumedCalories} Calories Consumed</p>
      <p>${exerciseCalories} Calories Burned</p>
      `;
    
    
    }

    // Paso 88
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
      <hr>
      <p>${budgetCalories} Calories Budgeted</p>
      <p>${consumedCalories} Calories Consumed</p>
      <p>${exerciseCalories} Calories Burned</p>
      `;
    
      output.classList.remove('hide');
    }

    // Paso 89

    calorieCounter.addEventListener("submit", calculateCalories);

    // Paso 90
    function clearForm() {

    }

    // Paso 91

    function clearForm() {
      const inputContainers = document.querySelectorAll('.input-container');
    }

    // Paso 92
    function clearForm() {
      const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    
    
    }

    // Paso 93
    function clearForm() {
      const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    
      for (const container of inputContainers) {
        container.innerHTML = '';
      }
    
    
    }

    // Paso 94
    function clearForm() {
      const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    
      for (const container of inputContainers) {
        container.innerHTML = '';
      }
    
      budgetNumberInput.value = '';
    
    }

    // Paso 95
    function clearForm() {
      const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    
      for (const container of inputContainers) {
        container.innerHTML = '';
      }
    
      budgetNumberInput.value = '';
      output.innerText = '';
    
    }
    // Paso 96
    function clearForm() {
      const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    
      for (const container of inputContainers) {
        container.innerHTML = '';
      }
    
      budgetNumberInput.value = '';
      output.innerText = '';
      output.classList.add('hide');
    }
