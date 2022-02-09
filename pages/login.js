import React, { useState } from "react";
import { useRouter } from "next/router";
import { Heading, Input, Box, Button } from "@chakra-ui/react";
import { auth, storage } from "../firebase";

const login = () => {
  const [currUser, setCurrUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const signInUser = () => {
    auth
      .signInWithEmailAndPassword(currUser.email, currUser.password)
      .then((_) => {
        setCurrUser({ email: "", password: "" });
        const user = auth.currentUser;
        router.push("/home");
      });
  };

  return (
    <div>
      <h3>Login</h3>
      <Box p="3">
        <Input
          placeholder="Email"
          value={currUser.email}
          width="15%"
          onChange={(evt) =>
            setCurrUser({
              username: currUser.username,
              email: evt.target.value,
              password: currUser.password,
            })
          }
        />
      </Box>
      <Box p="3">
        <Input
          placeholder="Password"
          value={currUser.password}
          width="15%"
          onChange={(evt) =>
            setCurrUser({
              username: currUser.username,
              email: currUser.email,
              password: evt.target.value,
            })
          }
        />
      </Box>
      <Box p="3">
        <Button colorScheme="pink" size="lg" onClick={signInUser}>
          Login
        </Button>
      </Box>
    </div>
  );
};

export default login;
