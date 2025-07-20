import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers-pro";

const MuiDateRangePicker = () => {
  //   const [value, setValue] = useState<DateRange<Date>>([null, null]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  console.log({ startDate });
  console.log({ endDate });

  const handleStartDateChange = (newValue: Date | null) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue: Date | null) => {
    setEndDate(newValue);
  };

  return (
    // <Box width="500px">
    //   <DateRangePicker
    //     startText="Check In"
    //     endText="Check Out"
    //     value={value}
    //     onChange={(newValue) => setValue(newValue)}
    //     renderInput={(startProps, endProps) => (
    //       <>
    //         <TextField {...startProps} />
    //         <Box sx={{ mx: 2 }}>to</Box>
    //         <TextField {...endProps} />
    //       </>
    //     )}
    //   />
    // </Box>

    <Box width="500px" display="flex" alignItems="center" gap={2}>
      <DatePicker
        label="Check In"
        value={startDate}
        onChange={handleStartDateChange}
        minDate={new Date()}
        slotProps={{
          textField: {
            variant: "outlined",
            fullWidth: true,
          },
        }}
      />

      <Typography>To</Typography>

      <DatePicker
        label="Check Out"
        value={endDate}
        onChange={handleEndDateChange}
        minDate={startDate || new Date()}
        disabled={!startDate}
        slotProps={{
          textField: {
            variant: "outlined",
            fullWidth: true,
          },
        }}
      />
    </Box>
  );
};

export default MuiDateRangePicker;
