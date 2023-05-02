import TextField from "@mui/material/TextField";

/*
const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "DKK",
    label: "kr",
  },
];
*/
export function numberField() {
  return (
    <TextField
      id="outlined-select-currency"
      select
      label="Select"
      defaultValue="EUR"
      helperText="Please select your currency"
    ></TextField>
  );
}
