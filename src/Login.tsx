import React, {Fragment, useState} from 'react';
import {
  Button,
  Container,
  FormControl,
  Grid,
  TextField
} from "@material-ui/core";

type Props = {}

const Signup:React.FC<Props> = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // login 
  const login = () => {
    /*await auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        props.history.push("/create-room/");
      })
      .catch(e => {
        alert("メールアドレスまたはパスワードが間違っています。");
      })
    */
    if (email == "aaa" && password == "bbb") {
      //props.history.push("/create-room/")
      alert("OK")
    } else {
      alert("NG")
    }
  }

  return (
    <Fragment>
      <Container>
        <Grid container>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            login form
            <FormControl margin="normal" fullWidth>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                autoFocus
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(event.target.value);
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="password"
                name="password"
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(event.target.value);
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={login}
                style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
              >
                Login
              </Button>
            </FormControl>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Signup;