import React, {useState, useEffect} from 'react';
import TemporaryDrawer from './temprory-drawer';
import data from './dataSource';

function App() {
  const [display_drawer, setDisplayDrawer] = useState(false);
  const [details, setDetails] = useState(data[0]);
  
  useEffect(() => {
    setDetails(data[0])
  }, [])

  return (
    <div>
      <TemporaryDrawer details={details} />
    </div>
  );
}

export default App;
