"use client";
import { Chart, useChart } from "@chakra-ui/charts";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Box,
  Flex,
  Text,
  Button,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import Layout from "./layout";
import { useEffect, useState } from "react";

function MainContent() {
  type DashboardItem = {
    title: string;
    value: string | number;
    change: string;
    status: string;
  };

  const [data, setData] = useState<any>({});
  const [cardData, setCardData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resData = await fetch("http://localhost:5000/api/charts");
        const jsonData = await resData.json();
        setData(jsonData);

        const resCards = await fetch("http://localhost:5000/api/cards");
        const jsonCards = await resCards.json();
        setCardData(jsonCards.cards || []);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const chart = useChart(data);
  const cards = cardData;

  return (
    <Layout>
      <Flex h="130vh" w="84vw" flexDirection={"column"} px={"40px"}>
        {/* Cards Section */}
        <Box
          gap={"20px"}
          justifyContent={"space-between"}
          w={"100%"}
          h={"360px"}
          display={"flex"}
          flexDirection={"row"}
          py={"40px"}
        >
          {loading ? (
            [1, 2, 3, 4].map((_, index) => (
              <Box
                key={index}
                w={"23%"}
                h={"200px"}
                bg={"white"}
                borderRadius={"10px"}
                p={"20px"}
              >
                <Skeleton height="20px" mb="10px" />
                <SkeletonText noOfLines={3} spacing="4" />
              </Box>
            ))
          ) : (
            <>
              {cards.map((card: DashboardItem, index: number) => (
                <Box
                  key={index}
                  w={"23%"}
                  h={"200px"}
                  bg={"white"}
                  borderRadius={"10px"}
                  p={"20px"}
                >
                  <Text fontSize={"2xl"}>{card.title}</Text>
                  <Text>{card.value}</Text>
                  <Text>{card.change}</Text>
                  <Text>{card.status}</Text>
                </Box>
              ))}
            </>
          )}
        </Box>

        {/* Report Section */}
        <Box
          w={"100%"}
          h={"120px"}
          borderRadius={"10px"}
          display={"flex"}
          flexDirection={"row"}
          marginTop={"-55px"}
          bg={"white"}
        >
          <Box py={"15px"} px={"30px"} w={"65%"}>
            <Text fontSize={"2xl"} fontWeight={"medium"}>
              Want a full custom easy to make financial report?
            </Text>
            <Text fontSize={"x-large"} fontWeight={"normal"}>
              Let Otteri help you out
            </Text>
          </Box>
          <Box
            py={"15px"}
            px={"30px"}
            w={"45%"}
            display={"flex"}
            justifyContent={"end"}
            alignItems={"center"}
          >
            <Button size={"lg"} borderRadius={"10px"}>
              Click Here
            </Button>
          </Box>
        </Box>

        {/* Charts Section */}
        <Box
          h={"450px"}
          px={"30px"}
          py={"15px"}
          display={"flex"}
          flexDirection={"row"}
          gap={"20px"}
          mt={"20px"}
        >
          {loading ? (
            <Skeleton height="400px" w="100%" borderRadius="10px" />
          ) : (
            <>
              <Box w={"50%"} h={"450px"} bg={"white"} borderRadius={"10px"} p={"20px"}>
                <Chart.Root maxH="sm" chart={chart}>
                  <AreaChart
                    data={chart.data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    responsive
                  >
                    <CartesianGrid
                      stroke={chart.color("border.muted")}
                      vertical={false}
                    />
                    <YAxis stroke={chart.color("border")} axisLine={false} />
                    <XAxis
                      axisLine={false}
                      tick={false}
                      dataKey={chart.key("month")}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <Tooltip
                      cursor={false}
                      animationDuration={100}
                      content={<Chart.Tooltip />}
                    />
                    <Legend content={<Chart.Legend />} />

                    {chart.series.map((item) => (
                      <Area
                        key={item.name}
                        isAnimationActive={false}
                        dataKey={chart.key(item.name)}
                        fill={chart.color(item.color)}
                        fillOpacity={0.2}
                        stroke={chart.color(item.color)}
                        stackId="a"
                      />
                    ))}

                    {chart.series.map((item) => (
                      <Area
                        isAnimationActive={false}
                        stackId="b"
                        legendType="none"
                        tooltipType="none"
                        key={item.name}
                        dataKey={chart.key(item.name)}
                        dot={{ fill: chart.color(item.color), fillOpacity: 1 }}
                        activeDot={false}
                        fill="none"
                        stroke="none"
                      />
                    ))}
                  </AreaChart>
                </Chart.Root>
              </Box>

              <Box
                w={"50%"}
                h={"450px"}
                bg={"white"}
                borderRadius={"10px"}
                p={"20px"}
              >
                <Chart.Root maxH="sm" chart={chart}>
                  <AreaChart
                    data={chart.data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    responsive
                  >
                    <CartesianGrid
                      stroke={chart.color("border.muted")}
                      vertical={false}
                    />
                    <YAxis stroke={chart.color("border")} axisLine={false} />
                    <XAxis
                      axisLine={false}
                      tick={false}
                      dataKey={chart.key("month")}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <Tooltip
                      cursor={false}
                      animationDuration={100}
                      content={<Chart.Tooltip />}
                    />
                    <Legend content={<Chart.Legend />} />

                    {chart.series.map((item) => (
                      <Area
                        key={item.name}
                        isAnimationActive={false}
                        dataKey={chart.key(item.name)}
                        fill={chart.color(item.color)}
                        fillOpacity={0.2}
                        stroke={chart.color(item.color)}
                        stackId="a"
                      />
                    ))}

                    {chart.series.map((item) => (
                      <Area
                        isAnimationActive={false}
                        stackId="b"
                        legendType="none"
                        tooltipType="none"
                        key={item.name}
                        dataKey={chart.key(item.name)}
                        dot={{ fill: chart.color(item.color), fillOpacity: 1 }}
                        activeDot={false}
                        fill="none"
                        stroke="none"
                      />
                    ))}
                  </AreaChart>
                </Chart.Root>
              </Box>
            </>
          )}
        </Box>
      </Flex>
    </Layout>
  );
}

export default MainContent;