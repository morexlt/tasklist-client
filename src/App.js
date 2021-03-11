import React, { useState } from 'react';

import TaskList from './components/tasklist';
import QuantitySelector from './components/quantitySelector';

const DEFAULT = 3;

function App() {
  const [amountOfTasks, setAmountOfTasks] = useState(DEFAULT);

  const handleSetAmountOfTasks = (amount) => {
    console.log('handleSetAmountOfTasks');
    console.log(amount);
    setAmountOfTasks(amount);
  };

  return (
    <div className="App">
      <div className="lg:container lg:mx-auto bg-white p-4">
        <QuantitySelector
          setQuantity={handleSetAmountOfTasks}
          defaultValue={DEFAULT}
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
          <TaskList amountOfTasks={amountOfTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
