import React from 'react';

export default () => {
  return (
    <div className="container background">
      <h1 className="title-about">Ourikas Reactjs</h1>
      <p className="text-about">
        Website based on the Ourikas project whose author both the data used
        here and the idea of ​​making a guide of the city of Ouricuri is:{' '}
        <a href="https://github.com/mauriciomelo">Mauricio Melo</a>
      </p>
      <p className="text-about">
        Official project repository:{' '}
        <a href="https://github.com/Ourikas/ourikas">Ourikas</a>
      </p>
      <br />
      <p className="text-about">
        Repository for this project:{' '}
        <a href="https://github.com/henriquenasc/guide-ouricuri">
          Guide Ouricuri
        </a>
      </p>
    </div>
  );
};
