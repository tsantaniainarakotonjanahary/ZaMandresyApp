import React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";
const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
};

export default function App() {
  return (
    <CssVarsProvider>
      <ModeToggle />
      <Sheet>
        <h1>Hello</h1>
      </Sheet>
    </CssVarsProvider>
  );
}
