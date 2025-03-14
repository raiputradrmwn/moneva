"use client";

import * as React from "react";
import { PieChart, Pie, Label } from "recharts";
import { TrendingUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface PieChartProps {
  male: number;
  female: number;
}

const chartConfig = {
  male: {
    label: "Laki-laki",
    color: "#4A90E2",
  },
  female: {
    label: "Perempuan",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const PieChartComponent = ({ male, female }: PieChartProps) => {
  
  const chartData = [
    { category: "Laki-laki", jumlah: male, fill: "#4A90E2" },
    { category: "Perempuan", jumlah: female, fill: "#CC2A2E" },
  ];

  const totalPopulation = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.jumlah, 0);
  }, [male, female]);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Distribusi Gender</CardTitle>
        <CardDescription>Data Jumlah Masyarakat</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="jumlah"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalPopulation.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Masyarakat
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Data Akurat <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="leading-none text-muted-foreground">
          Menunjukkan jumlah total masyarakat berdasarkan gender
        </div>
      </CardFooter>
    </Card>
  );
};

export default PieChartComponent;
