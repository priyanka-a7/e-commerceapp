// import { useState, useEffect } from 'react';

// const useLocalStorage = (key, initialValue) => {
//   const [value, setValue] = useState(() => {
//     const saved = localStorage.getItem(key);
//     return saved ? JSON.parse(saved) : initialValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [value]);

//   return [value, setValue];
// };
