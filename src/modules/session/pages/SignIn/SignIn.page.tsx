import * as C from "./signIn.page.styles";
import logo from "shared/assets/logo.png";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "shared/hooks";
import { saveUsernameAction } from "modules/session/redux";
import { useState } from "react";
import { Input } from "shared/components/atoms";

export const SignInPage = () => {
  const { handleSubmit } = useForm();
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();

  return (
    <C.Container>
      <C.Logo src={logo} />

      <C.Form
        onSubmit={handleSubmit(() => dispatch(saveUsernameAction(username)))}
      >
        <C.Title variant="title" style={{ marginBottom: 30 }}>
          Welcome to CodeLeap network
        </C.Title>

        <Input
          name="username"
          value={username}
          onChange={setUsername}
          placeholder="John doe"
          title="Please enter your username"
        />

        <C.SubmitButton type="submit" content="Enter" disabled={!username} />
      </C.Form>
    </C.Container>
  );
};
