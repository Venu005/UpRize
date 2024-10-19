"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const contestData = {
  ml: {
    total: 15,
    participated: 10,
    ratings: [
      { month: "Jan", rating: 1200 },
      { month: "Feb", rating: 1300 },
      { month: "Mar", rating: 1250 },
      { month: "Apr", rating: 1400 },
      { month: "May", rating: 1350 },
    ],
  },
  hackathon: {
    total: 20,
    participated: 15,
    ratings: [
      { month: "Jan", rating: 800 },
      { month: "Feb", rating: 850 },
      { month: "Mar", rating: 900 },
      { month: "Apr", rating: 950 },
      { month: "May", rating: 1000 },
    ],
  },
  dsa: {
    total: 25,
    participated: 20,
    ratings: [
      { month: "Jan", rating: 1500 },
      { month: "Feb", rating: 1550 },
      { month: "Mar", rating: 1600 },
      { month: "Apr", rating: 1650 },
      { month: "May", rating: 1700 },
    ],
  },
};

const COLORS: Record<string, string> = {
  ml: "#4CAF50",
  hackathon: "#FFC107",
  dsa: "#FF5722",
};

interface ContestData {
  total: number;
  participated: number;
  ratings: { month: string; rating: number }[];
}
interface CircularProgressProps {
  data: Record<string, ContestData>;
  size?: number;
  strokeWidth?: number;
  onSegmentClick: (key: string) => void;
}

const CircularProgress = ({
  data,
  size = 200,
  strokeWidth = 20,
  onSegmentClick,
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  let startAngle = 0;

  return (
    <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
      {Object.entries(data).map(([key, value]) => {
        const percentage =
          value.total /
          Object.values(data).reduce((sum, d) => sum + d.total, 0);
        const endAngle = startAngle + percentage * 360;
        const x1 = center + radius * Math.cos((startAngle * Math.PI) / 180);
        const y1 = center + radius * Math.sin((startAngle * Math.PI) / 180);
        const x2 = center + radius * Math.cos((endAngle * Math.PI) / 180);
        const y2 = center + radius * Math.sin((endAngle * Math.PI) / 180);
        const largeArcFlag = percentage > 0.5 ? 1 : 0;

        const pathData = [
          `M ${center} ${center}`,
          `L ${x1} ${y1}`,
          `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
          "Z",
        ].join(" ");

        startAngle = endAngle;
        return (
          <path
            key={key}
            d={pathData}
            fill={COLORS[key]}
            onClick={() => onSegmentClick(key)}
            className="cursor-pointer  transition-opacity hover:opacity-80 "
          />
        );
      })}
      <circle
        cx={center}
        cy={center}
        r={radius - strokeWidth / 2}
        fill="none"
        stroke="none"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

const ParticipationCircle = ({
  participated,
  total,
  color,
}: {
  participated: number;
  total: number;
  color: string;
}) => (
  <div className="relative w-32 h-32 sm:w-40 sm:h-40">
    <svg className="w-full h-full" viewBox="0 0 36 36">
      <circle
        cx="18"
        cy="18"
        r="15.9155"
        fill="none"
        stroke="#eee"
        strokeWidth="2"
      />
      <circle
        cx="18"
        cy="18"
        r="15.9155"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeDasharray={`${(participated / total) * 100}, 100`}
        transform="rotate(-90 18 18)"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-lg font-bold">{`${participated}/${total}`}</span>
    </div>
  </div>
);

export const Bento = () => {
  const [selectedContest, setSelectedContest] = useState("ml");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4  w-full sm:w-[600px] md:w-[750px] lg:w-[1500px]  mx-auto">
      <div className="lg:col-span-2 grid grid-cols-1 gap-4">
        <Card className="row-span-1">
          <CardHeader>
            <CardTitle>Total Contests Participated</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <CircularProgress
                data={contestData}
                onSegmentClick={setSelectedContest}
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              {Object.entries(contestData).map(([key, value]) => (
                <div
                  key={key}
                  className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-colors ${
                    selectedContest === key
                      ? "bg-gray-100 dark:bg-gray-800"
                      : ""
                  }`}
                  onClick={() => setSelectedContest(key)}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full mr-2`}
                      style={{ backgroundColor: COLORS[key] }}
                    />
                    <span className="capitalize">{key}</span>
                  </div>
                  <span className="font-bold">{value.total}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="row-span-1 h-[300px]">
          <CardHeader className="pb-2">
            <CardTitle>
              Contest Rating - {selectedContest.toUpperCase()}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 ">
            <div className="h-[200px] sm:h-[250px] md:h-[200px]">
              <ResponsiveContainer
                width="100%"
                height="100%"
                className="mt-8 mx-auto -ml-8"
              >
                <LineChart data={contestData[selectedContest].ratings}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="rating"
                    stroke={COLORS[selectedContest]}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="col-span-1 row-span-2 flex flex-col">
        <CardHeader>
          <CardTitle>Contest Participation</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row md:flex-col justify-around flex-grow">
          {Object.entries(contestData).map(([key, { participated, total }]) => (
            <div key={key} className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2 capitalize">{key}</h3>
              <ParticipationCircle
                participated={participated}
                total={total}
                color={COLORS[key]}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
