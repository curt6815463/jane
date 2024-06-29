import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { styled as muiStyled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loveBg from "./assets/iloveyou.jpeg";
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

const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
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
    "& .MuiFormHelperText-filled": {
      fontSize: "20px",
    },
  };
}) as typeof TextField;

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Jane");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  return (
    <StyledLogin>
      <ImageWrapper>
        <img src={loveBg}></img>
      </ImageWrapper>
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
          error={Boolean(errorText)}
          helperText={errorText}
          value={password}
          onChange={(e) => {
            setErrorText("");
            setPassword(e.target.value);
          }}
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
          onClick={() => {
            const result = /^iloveyou$/gi.test(password.replace(/\s*/g, ""));
            if (result) {
              navigate("/before-intro");
            } else {
              setErrorText("密碼不對哦 小淘氣");
            }
          }}
        >
          登入
        </Button>
      </FormWrapper>
    </StyledLogin>
  );
};

export default Login;
