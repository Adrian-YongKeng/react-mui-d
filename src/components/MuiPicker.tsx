import { useState } from "react";
import { Stack } from "@mui/material";
import { DatePicker, DateTimePicker, TimePicker } from "@mui/x-date-pickers";

const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  // console.log({ selectedDate });
  //   console.log({
  //     selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
  //   });
  console.log({ selectedDateTime });

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        // renderInput={(params: any) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
        slotProps={{
          textField: {
            // Pass TextField props here
            variant: "outlined",
            fullWidth: true,
          },
        }}
      />

      <TimePicker
        label="Time Picker"
        // renderInput={(params: any) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newValue) => {
          setSelectedTime(newValue);
        }}
        slotProps={{
          textField: {
            // Pass TextField props here
            variant: "outlined",
            fullWidth: true,
          },
        }}
      />

      <DateTimePicker
        label="Date Time Picker"
        // renderInput={(params: any) => <TextField {...params} />}
        value={selectedDateTime}
        onChange={(newValue) => {
          setSelectedDateTime(newValue);
        }}
        slotProps={{
          textField: {
            // Pass TextField props here
            variant: "outlined",
            fullWidth: true,
          },
        }}
      />
    </Stack>
  );
};

export default MuiPicker;
