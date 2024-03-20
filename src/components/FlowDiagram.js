import React, { useState } from 'react';
import './FlowDiagram.css'; // Import CSS for styling

// Placeholder statistics data
const statisticsData = {
  'Research': {
    'Statistics': {
      'Metric 1': 'Value 1',
      'Metric 2': 'Value 2',
    }
  },
  'Planning': {
    'Statistics': {
      'Metric 3': 'Value 3',
      'Metric 4': 'Value 4',
    }
  },
  'Designing': {
    'Statistics': {
      'Metric 5': 'Value 5',
      'Metric 6': 'Value 6',
    }
  },
  'Manufacturing': {
    'Statistics': {
      'Metric 7': 'Value 7',
      'Metric 8': 'Value 8',
    }
  },
  'Marketing/Sales': {
    'Statistics': {
      'Metric 9': 'Value 9',
      'Metric 10': 'Value 10',
    }
  }
};

const FlowDiagram = ({ data }) => {
  const [expanded, setExpanded] = useState({});
  const [showDetails, setShowDetails] = useState(null);

  const handleClick = (key) => {
    setExpanded(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  const handleHover = (key) => {
    setShowDetails(key);
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
              <button
                className="main-button"
                style={{ backgroundColor: buttonColor }}
                onClick={() => handleClick(combinedKey)}
                onMouseEnter={() => handleHover(combinedKey)}
                onMouseLeave={() => setShowDetails(null)}
                title={buttonDescription}
              >
                {key}
              </button>
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

  // Details component
  const Details = ({ position, keyName }) => {
    const lastKey = keyName.split('.').pop();
    const detailsData = statisticsData[lastKey] ? statisticsData[lastKey]['Statistics'] : {};
  
    return (
      <div className="details" style={position}>
        <h3>{lastKey}</h3>
        <ul>
          {Object.entries(detailsData).map(([metric, value]) => (
            <li key={metric}>
              <strong>{metric}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="flow-diagram" style={{ alignItems: getParentAlignment('') }}>
      {renderButtons(data)}
      {showDetails && <Details position={{ top: 0, left: '100%', transform: 'translateY(-50%)' }} keyName={showDetails} />}
    </div>
  );
};

export default FlowDiagram;
