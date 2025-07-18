import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      {/* h6 element different style */}
      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      {/* paragraph text, default: variant="body1" */}
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quod
        sequi rem quam voluptas non laborum nostrum unde impedit, blanditiis
        tempore beatae doloribus cum possimus eveniet placeat voluptatem
        doloremque accusamus.
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
        sapiente, cupiditate minima nam vel ducimus. Ipsum, fugiat repellat,
        molestias repellendus distinctio error ratione impedit quos asperiores
        fuga minus aut dicta.
      </Typography>
    </div>
  );
};

export default MuiTypography;
