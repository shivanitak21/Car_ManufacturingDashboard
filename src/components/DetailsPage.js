import React from 'react';

const DetailsPage = ({ match }) => {
  const { id } = match.params; // id will be the combinedKey passed from FlowDiagram
  // Assuming you have some Lorem Ipsum data
  const loremIpsumData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div>
      <h2>Details for: {id}</h2>
      <p>{loremIpsumData}</p>
    </div>
  );
};

export default DetailsPage;
