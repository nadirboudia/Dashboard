  import {
    DataGrid,
    Toolbar,
    ToolbarButton,
    ColumnsPanelTrigger,
    FilterPanelTrigger,
    ExportCsv,
    ExportPrint,
    QuickFilter,
    QuickFilterControl,
    QuickFilterClear,
    QuickFilterTrigger,
  } from "@mui/x-data-grid";
  import { Box, Button as MuiButton, TextField, useTheme } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import CancelIcon from "@mui/icons-material/Cancel";
  import { rows, columns } from "./Data";

  // 🟦 Button styled with MUI
  function Button(props) {
    const theme = useTheme();
    return (
      <MuiButton
        {...props}
        variant="outlined"
        size="small"
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          borderRadius: 2,
          px: 2,
          color: theme.palette.mode === "dark" ? theme.palette.primary.dark : theme.palette.primary.light,
          
        }}
      />
    );
  }

  // 🟦 Input styled with MUI
  function TextInput(props) {
    return (
      <TextField
        {...props}
        size="small"
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
        }}
      />
    );
  }


  function CustomToolbar() {
    return (
      <Toolbar
        sx={{
          display: "flex",
          gap: 1,
          p: 1,
          borderBottom: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
          
        }}
      >
        <ColumnsPanelTrigger
      
        render={<ToolbarButton render={<Button>Columns</Button>} />}
        />
        <FilterPanelTrigger
          render={<ToolbarButton render={<Button>Filter</Button>} />}
        />
        <ExportCsv
          render={<ToolbarButton render={<Button>Export CSV</Button>} />}
        />
        <ExportPrint render={<ToolbarButton render={<Button>Print</Button>} />} />

        <QuickFilter
          render={(props, state) => (
            <Box
              {...props}
              sx={{
                display: "flex",
                ml: "auto",
                overflow: "hidden",
                alignItems: "center",
              }}
            >
              <QuickFilterTrigger
                render={
                  <ToolbarButton
                    render={
                      <Button aria-label="Search" sx={{ minWidth: 40 }}>
                        <SearchIcon fontSize="small" />
                      </Button>
                    }
                  />
                }
              />
              <Box
                sx={{
                  display: "flex",
                  overflow: "hidden",
                  transition: "width 0.3s",
                  width: state.expanded ? 200 : 0,
                }}
              >
                <QuickFilterControl
                  aria-label="Search"
                  placeholder="Search..."
                  render={({ slotProps, ...controlProps }) => (
                    <TextInput
                      {...controlProps}
                      {...slotProps?.htmlInput}
                      sx={{
                        flex: 1,
                        "& .MuiOutlinedInput-root": {
                          borderRadius:
                            state.expanded && state.value !== ""
                              ? "4px 0 0 4px"
                              : 1,
                        },
                      }}
                    />
                  )}
                />
                {state.expanded && state.value !== "" && (
                  <QuickFilterClear
                    render={
                      <Button
                        aria-label="Clear"
                        sx={{
                          minWidth: 40,
                          borderRadius: "0 4px 4px 0",
                        }}
                      >
                        <CancelIcon fontSize="small" />
                      </Button>
                    }
                  />
                )}
              </Box>
            </Box>
          )}
        />
      </Toolbar>
    );
  }

  export default function Contacts() {
    return (
      <Box sx={{ height: "78vh", width: "98%", mx: "auto" }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
          slots={{ toolbar: CustomToolbar }}
          showToolbar
        />
      </Box>
    );
  }
