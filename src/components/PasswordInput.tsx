import { IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";

const PasswordInput = ({placeholder}:{placeholder?:string}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <TextField
    label={placeholder}
    
    fullWidth
    type={showPassword ? "text" : "password"}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end" className="cursor-pointer">
          <IconButton
            onClick={() =>
              setShowPassword((showPassword) => !showPassword)
            }
          >
            {showPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
  )
}

export default PasswordInput