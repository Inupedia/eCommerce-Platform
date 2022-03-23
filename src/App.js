import React from "react";
import { Button, message } from "antd";

export default function App() {
  const success = () => {
    message.success("This is a success message");
  };

  const error = () => {
    message.error("This is an error message");
  };

  const warning = () => {
    message.warning("This is a warning message");
  };

  return (
    <div>
      <Button type="primary" onClick={success}>
        Primary
      </Button>
    </div>
  );
}
