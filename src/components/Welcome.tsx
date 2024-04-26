import { Container, Spinner, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [sessionCookies, setCookies] = useCookies(["sessionId"]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const textRef = React.useRef<any>();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!sessionCookies?.sessionId) {
      textRef.current.innerHTML = "No session found, creating a new session...";
      setTimeout(() => {
        axios({
          method: "post",
          url: import.meta.env.VITE_API_URL + "/new/session",
        })
          .then((res) => {
            const response = res.data;
            setCookies("sessionId", response.session.sessionId, {
              path: "/",
              maxAge: 3600,
            });

            textRef.current.innerHTML =
              "Session created successfully redirecting now...";

            setTimeout(() => {
              navigate("/survey");
            }, 1000);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 1000);
    } else {
      textRef.current.innerHTML =
        "Session found, redirecting to the demographics page...";
      setTimeout(() => {
        navigate("/survey");
      }, 1000);
    }
  }, []);

  return (
    <Container h="100vh">
      <VStack alignItems="center" justifyContent="center" h="100%">
        <Text ref={textRef}>Checking for the current session...</Text>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </VStack>
    </Container>
  );
};

export default Welcome;
