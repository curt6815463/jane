import styled from "styled-components";
import audioSrc from "./assets/testaudio.m4a";
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

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontSize: "18px", paddingBottom: "30px" }}>
      <P1>
        Dear <span style={{ color: "#f199a9" }}>Jane</span>:
      </P1>
      <audio controls>
        <source src={audioSrc} type="audio/mp4" />
      </audio>
      <P3>
        在知道結果之前，有些話想說，今天是我們相識的第73天，從這段時間的相處，覺得妳是很酷的人，
        因為在一些事情上有時我以為女生都是這麼想，但妳卻沒有，
        這對我來說很棒，因為之前可能把女生想得很壞ＸＤ，但也可能是我認識的女生太少。
      </P3>
      <P3>
        妳的生活樸實，平凡中而有些變化，偶爾規劃出門旅行，平常時候認真上班，
        不喜歡浪費東西，也不浪費錢，東西還能用就用，
        我覺得生活中的步調就是有空的跟滿的，才能細細品味其中的差異，
        這也是我喜歡的生活模式，希望未來有機會能與妳一起維持這和諧節奏。
      </P3>
      <P3>
        從過去的聊天中，妳也會講訴一些對事情的看法，讓我知道妳是個既聰明又有想法的人，即使眼睛不好，也會找尋其他方式來增加自己的知識、見識，
        妳不是天然呆少女，妳會規劃好自己想做的事，每天穩穩地走著屬於妳的人生旅程，
        在人生的路上雖然遇到一些顛頗，但還是能夠含著淚往前，
        即使跌落到谷底需要別人伸出援手時，妳還是靠著自己努力爬上懸崖，
        妳很堅強很優秀！我想妳自己也知道！
        希望在妳的未來，能夠有另外一位人生旅伴，在妳難過的時候陪妳哭，在妳快樂的時候陪妳笑，在妳有困難的時候陪妳一起攜手共渡難關
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

// 聰明 有想法
// 堅強
// 節省
// 自我管理
//
// a juncture

// jane curt
export default Intro;
