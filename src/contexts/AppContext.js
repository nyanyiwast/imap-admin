// AppContext.js
import { createContext, useState } from 'react';

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [date, setDate] = useState({
    from: new Date(),
    // eslint-disable-next-line no-undef
    to: addMonths(new Date(), 1),
  });

  const [otherValue, setOtherValue] = useState('Some value');
  const [schoolId, setSchoolId] = useState(1)

  // Update functions
  const updateFromDate = (newDate) => {
    setDate((prevState) => ({
      ...prevState,
      from: newDate,
    }));
  };

  const updateToDate = (newDate) => {
    setDate((prevState) => ({
      ...prevState,
      to: newDate,
    }));
  };

  const contextValue = {
    schoolId,
    setSchoolId,
    date,
    updateFromDate,
    updateToDate,
    otherValue,
    setOtherValue,
    // Add more values and functions to the context value
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};