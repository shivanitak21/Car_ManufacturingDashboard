import React, { useState } from 'react';
import './FlowDiagram.css'; // Import CSS for styling

const FlowDiagram = ({ data }) => {
  const [expanded, setExpanded] = useState({});

  const handleClick = (key) => {
    setExpanded(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  const renderButtons = (items, parentKey = '', parentColor = '', parentDescription = '') => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {Object.entries(items).map(([key, value]) => {
          const buttonColor = key === 'Research' ? '#5bc0de' :
                             key === 'Planning' ? '#5cb85c' :
                             key === 'Designing' ? '#f0ad4e' :
                             key === 'Manufacturing' ? '#d9534f' :
                             key === 'Marketing/Sales' ? '#428bca' :
                             parentColor;
          const buttonDescription = key === 'Research' ? 'Research Description' :
                                    key === 'Planning' ? 'Planning Description' :
                                    key === 'Designing' ? 'Designing Description' :
                                    key === 'Manufacturing' ? 'Manufacturing Description' :
                                    key === 'Marketing/Sales' ? 'Marketing/Sales Description' :
                                    parentDescription;
  
          const combinedKey = parentKey ? `${parentKey}.${key}` : key;
          return (
            <div key={combinedKey} style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              {parentKey && (
                <div className="line" style={{ backgroundColor: buttonColor }}></div>
              )}
              <button className="main-button" style={{ backgroundColor: buttonColor }} onClick={() => handleClick(combinedKey)} title={buttonDescription}>{key}</button>
              {expanded[combinedKey] && typeof value === 'object' ? (
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                  {renderButtons(value, combinedKey, buttonColor, buttonDescription)}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  };
  

  const getParentAlignment = (parentKey) => {
    if (expanded[parentKey]) {
      return 'center'; // If expanded, align center
    }
    return 'flex-start'; // Default alignment
  };

  return (
    <div className="flow-diagram" style={{ alignItems: getParentAlignment('') }}>
      {renderButtons(data)}
    </div>
  );
};

export default FlowDiagram;