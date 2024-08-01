import React from "react";
import { Card } from "../ui/card";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import ArrowDown from "../icon/arrow-down";
const RecommendedData = [
  {
    id: 0,
    img: img1,
    name: "Fresh Veggies",
    days: "7 days",
    description: "Only dinner time",
  },
  {
    id: 1,
    img: img2,
    name: "Fresh Fruit",
    days: "12 days",
    description: "Only lunch time",
  },
  {
    id: 2,
    img: img3,
    name: "Fresh Fruit Juice",
    days: "7 days",
    description: "Only breakfast time",
  },
];

const Recommended = () => {
  return (
    <Card className="p-[20px] mt-[12px] mr-4 bg-white">
      <div className="flex justify-between mb-3">
        <p className="font-bold">Recommended Food</p>
        <p className="flex items-center gap-2">
          <ArrowDown /> Monthly
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {RecommendedData.map((item) => {
          return (
            <Card key={item.id}>
              <div className="flex gap-3">
                <div>
                  <img
                    src={item.img}
                    width={100}
                    height={100}
                    className="p-[13px]"
                  />
                </div>
                <div className="pt-[10px] pr-3">
                  <p className="text-[13px] font-extrabold">{item.name}</p>
                  <p className="text-theme text-[10px] font-bold">
                    {item.days}
                  </p>
                  <p className="text-[10px] text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Card>
  );
};

export default Recommended;
