import React, { useState } from "react";
import { useRouter } from "next/router";
import { Heading, Input, Box, Button } from "@chakra-ui/react";
import { auth, storage } from "../firebase";

const signup = () => {
  const [currUser, setCurrUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const createUser = () => {
    auth
      .createUserWithEmailAndPassword(currUser.email, currUser.password)
      .then((data) => {
        setCurrUser({ username: "", email: "", password: "" });
        const user = auth.currentUser;
        user.updateProfile({ displayName: currUser.username });
        let db = storage.collection("users").doc(user.uid);
        db.set({
          username: currUser.username,
          email: currUser.email,
        });
        router.push("/home");
      });
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <Box p="3">
        <Input
          placeholder="Username"
          value={currUser.username}
          width="15%"
          onChange={(evt) =>
            setCurrUser({
              username: evt.target.value,
              email: currUser.email,
              password: currUser.password,
            })
          }
        />
      </Box>
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
					type="password"
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
        <Button colorScheme="pink" size="lg" onClick={createUser}>
          Sign Up
        </Button>
      </Box>
    </div>
  );
};

export default signup;
