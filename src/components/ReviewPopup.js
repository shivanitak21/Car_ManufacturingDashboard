// PopupGraph.js
import React from 'react';

const PopupGraph = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-graph">
      {/* Your graph component here */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PopupGraph;
