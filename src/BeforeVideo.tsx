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

const BeforeVideo = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontSize: "18px", paddingBottom: "30px" }}>
      <P3>
        最近聽了一首新歌覺得很好聽，於是用烏克麗麗練了一下想送給你，但因為確診一直咳嗽沒辦法錄到更好的版本，只好拿之前的練習版出來ＸＤ
      </P3>
      <P3>
        我也不是很會唱歌，請妳忍耐一下 哈哈，準備好了就往下吧！這首歌名叫：
        <span style={{ color: "#f199a9" }}>我喜歡你</span>
      </P3>
      <ButtonWrapper>
        <Button
          sx={{
            marginRight: "16px",
            fontSize: "20px",
            boxShadow: "none",
            marginTop: "20px",
            backgroundColor: "#f199a9",
            "&:hover": { backgroundColor: "#f199a9" },
          }}
          variant="contained"
          onClick={() => {
            navigate(-1);
          }}
        >
          BACK
        </Button>
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
            navigate("/video");
          }}
        >
          Next
        </Button>
      </ButtonWrapper>
    </div>
  );
};

export default BeforeVideo;
