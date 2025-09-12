import React from "react";
import { Box, Stack, TextField, MenuItem, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";

function Profile() {
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    enqueueSnackbar("User created successfully!", { variant: "success" });
    console.log("donee");
  };

  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const regnumber=
   /^(?:\+213|0)(5|6|7)[0-9]{8}$/

  const choices = [
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "user", label: "User" },
  ];

  return (
    <div style={{ padding: "5px", height: "87vh", width: "100%" }}>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: 2,
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction="row" spacing={2}>
          <TextField
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
            error={!!errors.firstName}
            helperText={
              errors.firstName
                ? "First Name is required and should be at least 3 characters long"
                : ""
            }
            {...register("firstName", { required: true, minLength: 3 })}
          />
          <TextField
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
            error={!!errors.lastname}
            helperText={
              errors.lastname
                ? "Last Name is required and should be at least 3 characters long"
                : ""
            }
            {...register("lastname", { required: true, minLength: 3 })}
          />
        </Stack>

        <TextField
          label="Email"
          variant="filled"
          error={!!errors.email}
          helperText={errors.email ? "Please enter a valid email address" : ""}
          {...register("email", { required: true, pattern: regEmail })}
        />

        <TextField
          label="Contact Number"
          variant="filled"
          error={!!errors.contact}
          helperText={
            errors.contact ? "Please enter a valid contact number" : ""
          }
          {...register("contact", { required: true, pattern: regnumber })}
        />

        <TextField label="Adress 1" variant="filled" />
        <TextField label="Adress 2" variant="filled" />

        <TextField variant="filled" select label="Role" defaultValue="user">
          {choices.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Stack sx={{ display: "flex", alignItems: "flex-end", width: "100%" }}>
          <button
            type="submit"
            style={{
              cursor: "pointer",
              background:
                theme.palette.mode === "dark"
                  ? theme.palette.primary.dark
                  : theme.palette.primary.main,
              width: "10%",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              fontSize: "17px",
              borderRadius: "10px",
              border: "none",
              transition: "0.3s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "darkblue")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                theme.palette.mode === "dark"
                  ? theme.palette.primary.dark
                  : theme.palette.primary.main)
            }
          >
            Create New User
          </button>
        </Stack>
      </Box>
    </div>
  );
}

export default Profile;
