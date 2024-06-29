import styled, { keyframes } from "styled-components";
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
  padding: 0 10px;
`;

const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(200px); /* 控制按钮向下移动的距离 */
  }
`;

const AnimatedButton = styled.div`
  animation: ${moveUpDown} 1s ease-in-out infinite alternate;
`;

const Check = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontSize: "18px", paddingBottom: "30px" }}>
      <P3>你要跟我交往嗎？</P3>
      <ButtonWrapper>
        <AnimatedButton>
          <Button
            sx={{
              width: "20px",
              minWidth: "10px",
              fontSize: "20px",
              boxShadow: "none",
              marginTop: "20px",
              backgroundColor: "grey",
              "&:hover": { backgroundColor: "grey" },
            }}
            variant="contained"
            onClick={() => {
              navigate("/login");
            }}
          >
            No
          </Button>
        </AnimatedButton>

        <Button
          sx={{
            flex: "1",
            fontSize: "20px",
            boxShadow: "none",
            marginTop: "20px",
            marginLeft: "8px",
            backgroundColor: "#f199a9",
            "&:hover": { backgroundColor: "#f199a9" },
          }}
          variant="contained"
          onClick={() => {
            navigate("/login");
          }}
        >
          Yes
        </Button>
      </ButtonWrapper>
    </div>
  );
};

export default Check;
