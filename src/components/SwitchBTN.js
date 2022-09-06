
import React from 'react';

function SwitchExample() {

  return (
    <div className="button-cover">
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