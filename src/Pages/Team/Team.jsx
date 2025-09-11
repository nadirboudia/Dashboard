import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./Data";
import { Box, useTheme } from "@mui/system";
import { Typography } from "@mui/material";
import "./Team.css";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Name",
      headerName: "First  Name",
      width: 130,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Email",
      headerName: "Last Name",
      width: 130,
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access Level",
      width: 150,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              textAlign: "center",
              p: 1,
              backgroundColor:
                access === "admin"
                  ? theme.palette.primary.dark
                  : access === "manager"
                  ? theme.palette.secondary.main
                  : "#3da58a",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              borderRadius: "4px",
              mt: "5px",
              cursor: "pointer",
            }}
          >
            {access === "admin" && (
              <AdminPanelSettingsOutlined fontSize="small" sx={{color:'white'}} />
            )}
            {access === "manager" && <SecurityOutlined fontSize="small" sx={{color:'white'}} />}
            {access === "user" && <LockOpenOutlined fontSize="small" sx={{color:'white'}}/>}
            <Typography
              sx={{
                color: "white",
                fontFamily: "sans-serif",
                fontSize: "17px",
              }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "70vh",
          width: "98%",
          backgroundColor: "lightblue",
          mx: "auto",
        }}
      >
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
          getRowClassName={(params) =>
            params.row.access === "admin"
              ? "admin-row"
              : params.row.access === "manager"
              ? "manager-row"
              : "user-row"
          }
          sx={{
           
            "& .MuiDataGrid-columnHeaders": {
              fontSize: "large",
              fontWeight: "600",
            },
          }}
        />
      </Box>
    </div>
  );
}

export default Team;
