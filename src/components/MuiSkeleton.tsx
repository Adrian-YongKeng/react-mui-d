import React, { useEffect, useState } from "react";
import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";

const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    // <Stack spacing={1} width="250px">
    //   <Skeleton variant="text" animation={false} />
    //   <Skeleton variant="circular" width={40} height={40} animation="wave" />
    //   <Skeleton
    //     variant="rectangular"
    //     width={250}
    //     height={125}
    //     animation="wave"
    //   />
    //  </Stack>

    <Box sx={{ width: "250px" }}>
      {loading ? (
        //prettier-ignore
        <Skeleton variant="rectangular" width={256} height={144} animation="wave" />
      ) : (
        <img
          src="https://picsum.photos/256/144"
          // src="https://source.unsplash.com/random/256x144"
          alt="skeleton"
          width={256}
          height={144}
        />
      )}

      {/* prettier-ignore */}
      <Stack direction="row" spacing={1} sx={{ width: "100%", marginTop: "12px" }}>
        {loading ? (
        //prettier-ignore
          <Skeleton variant="circular" width={40} height={40} animation="wave" />
        ) : (
          <Avatar>V</Avatar>
        )}

        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>

              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">React MUI Tutorial</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default MuiSkeleton;
