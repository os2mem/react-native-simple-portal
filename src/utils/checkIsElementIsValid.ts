import React from 'react';

const checkIsElementIsValid = (element: any) => {
  if (Array.isArray(element)) {
    return element.every((el) => React.isValidElement(el));
  }

  return React.isValidElement(element);
};

export default checkIsElementIsValid;
