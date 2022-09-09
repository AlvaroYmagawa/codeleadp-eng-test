import { Typography, Button, Input, Card } from "shared/components/atoms";

export const SignInPage = () => {
  return (
    <div>
      <Card>
        <Typography variant="title">Sign in Page</Typography>
        <Button content="Cancel" />
        <Input title='Nome' placeholder="Digite sua senha" />
      </Card>
    </div>
  );
};
