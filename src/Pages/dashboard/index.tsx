import FireSquare from "../../components/icon/fire-square";
import HeartSquare from "../../components/icon/heart-square";
import RunSquare from "../../components/icon/run-square";
import SleepSquare from "../../components/icon/sleep-square";
import { Card, CardContent, CardDescription } from "../../components/ui/card";
import img from "../../assets/images/img.jpg";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import ChartComponent from "@/components/chart-component";
import Recommended from "@/components/recommended";
import TrainerComponent from "@/components/trainer-component";
import OutputComponent from "@/components/output-component";
import Scheduled from "@/components/scheduled";

const cardData = [
  {
    id: 0,
    name: "Heart Rate",
    icon: <HeartSquare />,
    num: "110",
  },
  {
    id: 1,
    name: "Calories Burn",
    icon: <FireSquare />,
    num: "65",
  },
  {
    id: 2,
    name: "Running",
    icon: <RunSquare />,
    num: "2.5 km",
  },
  {
    id: 3,
    name: "Sleeping",
    icon: <SleepSquare />,
    num: "8 Hours",
  },
];
const personalData = [
  {
    id: 0,
    num: "65 kg",
    name: "Weight",
  },
  {
    id: 1,
    num: "178 cm",
    name: "Height",
  },
  {
    id: 2,
    num: "25",
    name: "Age",
  },
];
const Dashboard = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="bg-lightGray h-full p-[14px]">
      <p className="text-theme text-[18px] pb-[30px]">
        Welcome <span className="font-bold">Mike, </span>
        <span className="text-black">Good Morining</span>
      </p>
      <div className="flex w-full ">
        <div className="flex-1 ">
          <div className="grid grid-cols-4 gap-3 pr-[13px]">
            {cardData.map((item) => {
              return (
                <div key={item.id}>
                  <Card className="w-full bg-white relative">
                    <CardContent className="absolute top-[-23px]">
                      {item.icon}
                    </CardContent>
                    <CardDescription className="px-[20px] my-[25px]">
                      <p className="font-bold">{item.num}</p>
                      <p className="text-gray-400">{item.name}</p>
                    </CardDescription>
                  </Card>
                </div>
              );
            })}
          </div>
          <ChartComponent />
          <Recommended />
          <div className="grid grid-cols-2">
            <TrainerComponent />
            <OutputComponent />
          </div>
        </div>
        <div className="w-[30%] h-[full] p-[10px] bg-white">
          <div className="flex justify-between p-2">
            <p className="font-bold">Profile</p>
            <p className="font-bold">...</p>
          </div>
          <div className="flex justify-around pt-[6px]">
            <img
              src={img}
              className="rounded-full bg-slate-50 w-[70px] h-[70px]"
            />
          </div>
          <p className="text-center pt-6 font-bold text-[20px]">Mike Rowe </p>
          <p className="text-center text-gray-400">@mikerowe</p>
          <div className="flex justify-between p-5 border border-gray-100 rounded-2xl m-[15px]">
            {personalData.map((item) => {
              return (
                <div key={item.id}>
                  <p className="font-semibold">{item.num}</p>
                  <p className="text-gray-400">{item.name}</p>
                </div>
              );
            })}
          </div>
          <div>
            <p className="font-bold p-2">Calender</p>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border "
            />
          </div>
          <Scheduled />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
