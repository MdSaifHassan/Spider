import CustomAutoComplete from "@/Components/Autocomplete/CustumAutocomplete";
import options from "@/Components/Autocomplete/option";
import { fruitOptions } from "@/Components/Dropdwon/data";
import CustomSelect from "@/Components/Dropdwon/dropdwon";
import React, { useState } from "react";

export default function HomePage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event, value) => {
    setSelectedOption(value);
  };
  const [fruit, setFruit] = useState('');
  const [error, setError] = useState(false);

  const handleChangeDrodwon = (event) => {
    setFruit(event.target.value);
    setError(event.target.value === '');
  };
  return (
    <div style={{ padding: 20 }}>
      <h1>Custom AutoComplete Example</h1>
      <CustomAutoComplete
        options={options} 
        // label="Choose an Option"
        value={selectedOption}
        onChange={handleChange}
        variant="outlined"
        autocompleteSx={{
          width: "300px",
        }}
        textFieldSx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "5px",
            "&.Mui-focused fieldset": {
              borderColor: "purple",
            },
          },
        }}
      />
      <br />
      <br />
      <br />
      <h1>
      Custom Dropdown Example
      </h1>
      <CustomSelect
        // label="Fruit"
        placeholder="select Fruit"
        value={fruit}
        onChange={handleChangeDrodwon}
        options={fruitOptions}
        variant="outlined"
        color="secondary"
        size="medium"
        disabled={false}
        error={error}
        helperText={error ? 'Please select a fruit' : ''}
        sx={{
          formControl: { marginTop: '16px',width:"300px" },
          select: { backgroundColor: '#fff' },
          menuItem: { fontSize: '1rem' },
        }}
       
      />
    </div>
  );
}
