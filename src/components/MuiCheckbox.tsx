import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  console.log({ acceptTnC });
  console.log({ skills });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };

  const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={acceptTnC}
              onChange={handleChange}
            />
          }
        />
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          onChange={handleChange}
          checked={acceptTnC}
        />
      </Box>

      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
            />{" "}
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
            />{" "}
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  value="javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>

          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
