import { Flex, Box, Text } from "@chakra-ui/react";
import logo from "./assets/logoOtteri.png";
import { IoMdSearch } from "react-icons/io";
import { Button } from "@chakra-ui/react";
import { Group, Input } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

const sidebarData = [
  {
    title: "Main",
    items: ["Dashboard", "Overview", "Activity"],
  },
  {
    title: "Management",
    items: ["Users", "Teams", "Projects"],
  },
  {
    title: "Analytics",
    items: ["Reports", "Sales", "Traffic"],
  },
  {
    title: "Account",
    items: ["Profile", "Notification", "Billing", "Logout"],
  },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const getRoute = (item: string) => {
    switch (item.toLowerCase()) {
      case "dashboard":
        return "/dashboard";
      case "overview":
        return "/overview";
      case "activity":
        return "/activity";
      case "users":
        return "/users";
      case "teams":
        return "/teams";
      case "projects":
        return "/projects";
      default:
        return "/";
    }
  };

  return (
    <Flex h="140vh">
      {/* Sidebar */}
      <Box
        h="140vh"
        w="16%"
        bg="gray.800"
        color="white"
        p="5"
        paddingBottom="300px"
      >
        <Box w="155px" h="auto" marginBottom="15px" marginLeft="-10px">
          <img src={logo} alt="Logo" />
        </Box>

        {sidebarData.map((section) => (
          <Box key={section.title} mb="20px">
            <Text
              fontFamily="monospace"
              fontSize="3xl"
              fontWeight="bold"
              mb="3"
            >
              {section.title}
            </Text>

            <Box ml="8px">
              {section.items.map((item) => {
                const route = getRoute(item);
                return (
                  <Link
                    to={route}
                    key={item}
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      mb="3"
                      cursor="pointer"
                      _hover={{ color: "blue.300" }}
                      fontFamily="monospace"
                      fontSize="xl"
                      color={location.pathname === route ? "blue.300" : "white"}
                      fontWeight={
                        location.pathname === route ? "bold" : "normal"
                      }
                    >
                      {item}
                    </Text>
                  </Link>
                );
              })}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Right side */}
      <Flex direction="column" flex="1">
        {/* Header */}
        <Box
          h="75px"
          bg="gray.700"
          color="white"
          px="5"
          display="flex"
          alignItems="center"
          flexDirection="row-reverse"
        >
          <Box w="22%">
            <Group attached w="full" maxW="260px" marginRight="30px">
              <Input
                borderColor="white"
                color="white"
                flex="1"
                placeholder="Search...."
                _placeholder={{ color: "#f7f7f7" }}
              />
              <Button
                color="black"
                bg="#f7f7f7"
                borderColor="#f7f7f7"
                variant="outline"
              >
                <IoMdSearch />
              </Button>
            </Group>
          </Box>

          <Box
            w="78%"
            alignItems="center"
            display="flex"
            justifyContent="center"
          >
            <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
              {location.pathname === "/dashboard"
                ? "Dashboard"
                : location.pathname === "/overview"
                  ? "Overview"
                  : location.pathname === "/activity"
                    ? "Activity"
                    : "Page Not Found"}
            </Text>
          </Box>
        </Box>

        {/* Main Content */}
        <Box flex="1" bg="#d3d3d3">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
