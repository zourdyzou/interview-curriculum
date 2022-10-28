import React from "react";
import { useCallback, useEffect } from "react";

export const PasswordRevealer: React.FunctionComponent<{ value: string }> = ({ value }) => {
  const [shown, setShown] = React.useState<boolean>(false);

  return (
    <>
      <input type={shown ? "text" : "password"} value={value} />
      <button onClick={() => setShown(!shown)}>Show/Hide</button>
    </>
  );
};

export function useDebounce(effect: () => void, dependencies: any[], delay: number) {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}
