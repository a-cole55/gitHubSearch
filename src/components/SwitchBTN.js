
import React, {useState} from 'react';

function SwitchExample() {
    //darkMode/LightMode Switch
  const [darkMode, setDarkMode] = useState(true)

  const changeLightMode = () => {
    setDarkMode(darkMode => !darkMode);
    console.log("Dark Mode Changed")
  }
  return (
    <div className="button-cover" onClick={changeLightMode}>
        <span>Dark Mode</span>
        <div className="button r" id="button-1">
          <input type="checkbox" className="checkbox" />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
      </div>
  );
}

export default SwitchExample;