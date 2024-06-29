import styled from "styled-components";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const P1 = styled.div`
  font-size: 28px;
  padding: 20px;
`;

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

const BeforeIntro = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontSize: "18px", paddingBottom: "30px" }}>
      <P1>
        Dear <span style={{ color: "#f199a9" }}>Jane</span>:
      </P1>
      <P3>
        在知道結果之前，有些話想說，我知道妳喜歡用聽的，所以錄了一段話給妳，如果耳機準備好的話，就往下走吧！
      </P3>
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
            navigate("/intro");
          }}
        >
          Next
        </Button>
      </ButtonWrapper>
    </div>
  );
};

export default BeforeIntro;
