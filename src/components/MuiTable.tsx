import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const tableData = [
  {
    id: 1,
    first_name: "Friederike",
    last_name: "Battersby",
    email: "fbattersby0@vimeo.com",
    gender: "Female",
    ip_address: "188.65.150.212",
  },
  {
    id: 2,
    first_name: "Lyndsie",
    last_name: "D'Orsay",
    email: "ldorsay1@github.io",
    gender: "Female",
    ip_address: "176.4.64.226",
  },
  {
    id: 3,
    first_name: "Bobbee",
    last_name: "Kerrey",
    email: "bkerrey2@acquirethisname.com",
    gender: "Female",
    ip_address: "163.138.164.213",
  },
  {
    id: 4,
    first_name: "Kylen",
    last_name: "Wythe",
    email: "kwythe3@quantcast.com",
    gender: "Female",
    ip_address: "228.221.216.105",
  },
  {
    id: 5,
    first_name: "Isabelita",
    last_name: "Greasty",
    email: "igreasty4@ebay.co.uk",
    gender: "Female",
    ip_address: "151.156.29.84",
  },
  {
    id: 6,
    first_name: "Ora",
    last_name: "Campes",
    email: "ocampes5@ucoz.com",
    gender: "Female",
    ip_address: "165.152.181.240",
  },
  {
    id: 7,
    first_name: "Luther",
    last_name: "Canete",
    email: "lcanete6@desdev.cn",
    gender: "Male",
    ip_address: "18.17.228.86",
  },
  {
    id: 8,
    first_name: "Gal",
    last_name: "Balloch",
    email: "gballoch7@instagram.com",
    gender: "Male",
    ip_address: "21.141.129.19",
  },
  {
    id: 9,
    first_name: "Sylvester",
    last_name: "Nicklin",
    email: "snicklin8@illinois.edu",
    gender: "Male",
    ip_address: "170.226.3.44",
  },
  {
    id: 10,
    first_name: "Claiborn",
    last_name: "Scottesmoor",
    email: "cscottesmoor9@hhs.gov",
    gender: "Male",
    ip_address: "105.130.190.145",
  },
];

const MuiTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: "300px", marginTop: "30px" }}
    >
      {/* make header stick at the position data scroll */}
      <Table aria-label="Simple Table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
