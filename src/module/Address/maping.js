// // src/Components/FormFields/FormFields.js
import React from 'react';
import DynamicFormField from './DynamicFormField';

// const FormFields = ({ formik, fields, options }) => {
//   return (
//     <>
//       {fields.map((field) => (
//         <DynamicFormField
//           key={field.name}
//           field={field}
//           formik={formik}
//           options={options}
//         />
//       ))}
//     </>
//   );
// };


const FormFields = ({ formik, fields = [], options }) => {
    if (!Array.isArray(fields)) {
      console.error("Expected 'fields' to be an array, but got:", fields);
      return null; 
    }
  
    return (
      <>
        {fields.map((field) => (
          <DynamicFormField
            key={field.name}
            field={field}
            formik={formik}
            options={options}
          />
        ))}
      </>
    );
  };
  export default FormFields