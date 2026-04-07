import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./mainContent";
import OverviewPage from "./Overview";
import ActivityPage from "./Activity";
import { Box, Text } from "@chakra-ui/react";
import Layout from "./layout";

// Simple 404 component
function NotFound() {
  return (
    <Layout>
    <Box display="flex" alignItems="center" justifyContent="center">
      <Text fontSize="4xl" marginTop={"40vh"}>404 - Page Not Found</Text>
    </Box>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="*" element={<NotFound />} /> {/* Catch all unknown routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;