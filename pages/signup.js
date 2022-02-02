import React, { useState } from "react";
import { Heading, Input, Box, Button } from "@chakra-ui/react";
import { auth, provider } from "../firebase";

const signup = () => {
  const [currUser, setCurrUser] = useState();

  const createUser = (username, email, password) => {
    auth.createUserWithEmailAndPassword(email, password).then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <Box p="3">
        <Input
          placeholder="Username"
          value={currUser?.username}
          width="15%"
          onChange={(evt) =>
            setCurrUser({
              username: evt.target.value,
              email: currUser?.email,
              password: currUser?.password,
            })
          }
        />
      </Box>
      <Box p="3">
        <Input
          placeholder="Email"
          value={currUser?.email}
          width="15%"
          onChange={(evt) =>
            setCurrUser({
              username: currUser?.username,
              email: evt.target.value,
              password: currUser?.password,
            })
          }
        />
      </Box>
      <Box p="3">
        <Input
          placeholder="Password"
          value={currUser?.password}
          width="15%"
          onChange={(evt) =>
            setCurrUser({
              username: currUser?.username,
              email: currUser?.email,
              password: evt.target.value,
            })
          }
        />
      </Box>
      <Box p="3">
        <Button
          colorScheme="pink"
          size="lg"
          onClick={() => {
            createUser(currUser.email, currUser.password);
          }}
        >
          Sign Up
        </Button>
      </Box>
    </div>
  );
};

export default signup;
