import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const VideoShowStyled = styled.div``;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const VideoShow = () => {
  const height = window.innerHeight - 70 - 100;
  const navigate = useNavigate();

  return (
    <VideoShowStyled>
      <iframe
        width="100%"
        height={height}
        src="https://www.youtube.com/embed/p0Cb4TQG28g"
        title="Jane"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
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
          onClick={() => {}}
        >
          Next
        </Button>
      </ButtonWrapper>
    </VideoShowStyled>
  );
};

export default VideoShow;
