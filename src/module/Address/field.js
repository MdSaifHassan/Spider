// src/utils/formFieldsData.js
export const formFieldsData = [
    {
      name: "address",
      label: "Address",
      component: "textField",
      multiline: true,
      rows: 3,
      placeholder: "Enter address",
    },
    {
      name: "state",
      label: "State",
      component: "autocomplete",
      options: [
        { label: "State 1", id: 1 },
        { label: "State 2", id: 2 },
      ],
    },
    {
      name: "city",
      label: "City",
      component: "autocomplete",
      options: [
        { label: "City 1", id: 1 },
        { label: "City 2", id: 2 },
      ],
    },
    {
      name: "postalCode",
      label: "Postal Code",
      component: "textField",
      placeholder: "e.g. 495000",
    },
    {
      name: "additionalInfo",
      label: "Additional Information",
      component: "textField",
      multiline: true,
      rows: 3,
    },
    {
      name: "isDefault",
      label: "Set as default address",
      component: "checkbox",
    },
  ];
  