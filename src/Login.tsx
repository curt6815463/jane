import styled from "styled-components";
import Header from "./Headers";
import { Button, TextField } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";
import { useState } from "react";

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FormWrapper = styled.div`
  padding: 30px 40px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const StyledInput = muiStyled(TextField)(() => {
  return {
    marginBottom: "24px",
    "& .MuiInput-input": {
      fontSize: "20px",
      letterSpacing: "1.1px",
    },
    "& .MuiInputLabel-root": {
      color: "rgba(0, 0, 0, 0.6);",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "rgba(0, 0, 0, 0.6);",
    },
    "& .MuiInput-underline:after": { borderBottomColor: "rgba(0, 0, 0, 0.6);" },
  };
}) as typeof TextField;

const Login = () => {
  const [name, setName] = useState("Jane");
  const [password, setPassword] = useState("ji3vu3cj0su3");
  return (
    <StyledLogin>
      <Header></Header>
      <FormWrapper>
        <StyledInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="standard-basic"
          label="Name"
          variant="standard"
          fullWidth={true}
        />
        <StyledInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="standard-basic"
          label="Password"
          variant="standard"
          fullWidth={true}
        />
        <Button
          sx={{
            fontSize: "20px",
            boxShadow: "none",
            marginTop: "20px",
            backgroundColor: "#f199a9",
            "&:hover": { backgroundColor: "#f199a9" },
          }}
          variant="contained"
        >
          登入
        </Button>
      </FormWrapper>
    </StyledLogin>
  );
};

export default Login;
