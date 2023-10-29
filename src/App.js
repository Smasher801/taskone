import { Box } from "@mui/material";
import Header from "./components/Header";
import MiddlePart from "./components/MiddlePart";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      width="100%"
    >
      <Header />
      <MiddlePart />
      <Articles />
      <Footer />
    </Box>
  );
}

export default App;
