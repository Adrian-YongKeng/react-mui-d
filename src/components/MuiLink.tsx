import { Link, Stack, Typography } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" underline="none" variant="body2">
        Link
      </Link>

      <Typography variant="h6">
        <Link href="https://google.com" color="secondary" underline="hover">
          Link
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
