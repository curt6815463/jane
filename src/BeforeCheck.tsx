import styled from "styled-components";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const P = styled.div`
  font-size: 20px;
  padding: 20px;
  line-height: 28px;
`;

const P3 = styled(P)`
  text-indent: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BeforeCheck = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontSize: "18px", paddingBottom: "30px" }}>
      <P3>想說的以及展示的都傳達完了，那麼接下來有個問題想再問妳一次。</P3>
      <ButtonWrapper>
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
            navigate("/check");
          }}
        >
          Next
        </Button>
      </ButtonWrapper>
    </div>
  );
};

export default BeforeCheck;
