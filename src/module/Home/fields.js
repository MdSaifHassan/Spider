// data.js
export const fields = [
  {
    id: "service1",
    type: "dropdown",
    label: "Select Service 1",
    options: [
      { value: "serviceA", label: "Service A" },
      { value: "serviceB", label: "Service B" },
      { value: "serviceC", label: "Service C" },
    ],
  },
  {
    id: "service2",
    type: "dropdown",
    label: "Select Service 2",
    options: [
      { value: "serviceD", label: "Service D" },
      { value: "serviceE", label: "Service E" },
    ],
  },
  {
    id: "date",
    type: "date",
    // label: "Date",
  },
  {
    id: "time",
    type: "time",
    // label: "Time",
  },
  {
    id: "description",
    type: "text",
    label: "Description",
  },
];
