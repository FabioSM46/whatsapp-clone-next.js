import { ComponentPropsWithoutRef, FC } from "react";
import Button from "./Button";
import { LoadingIndicator } from "stream-chat-react";

interface LoadingButtonProps extends ComponentPropsWithoutRef<"button"> {
  loading: boolean;
}

const LoadingButton: FC<LoadingButtonProps> = ({ loading, ...props }) => {
  return (
    <Button {...props} disabled={loading}>
      {loading ? <LoadingIndicator /> : props.children}
    </Button>
  );
};

export default LoadingButton;
