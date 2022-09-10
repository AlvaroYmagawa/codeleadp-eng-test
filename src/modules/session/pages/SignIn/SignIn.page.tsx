import * as C from "./signIn.page.styles";
import logo from "shared/assets/logo.png";
import { useForm } from "react-hook-form";
import { FormInput } from "shared/components/molecules";
import { useAppDispatch } from "shared/hooks";
import { saveUsernameAction } from "modules/session/redux";

export const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });
  const dispatch = useAppDispatch();

  return (
    <C.Container>
      <C.Logo src={logo} />

      <C.Form
        onSubmit={handleSubmit((data) =>
          dispatch(saveUsernameAction(data.username))
        )}
      >
        <C.Title variant="title" style={{ marginBottom: 30 }}>
          Welcome to CodeLeap network
        </C.Title>

        <FormInput
          name="username"
          control={control}
          placeholder="John doe"
          title="Please enter your username"
        />

        <C.SubmitButton
          type="submit"
          content="Enter"
          disabled={!isValid || !isDirty}
        />
      </C.Form>
    </C.Container>
  );
};
