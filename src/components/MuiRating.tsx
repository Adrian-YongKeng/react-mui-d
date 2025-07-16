import React, { useState } from "react";
import { Rating, Stack } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3);
  console.log({ value });

  // prettier-ignore
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        // readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
