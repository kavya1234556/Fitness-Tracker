import ArrowDown from "../icon/arrow-down";
import BodyIcon from "../icon/body-icon";
import Current from "../icon/current";
import { Card } from "../ui/card";

const newData = [
  {
    id: "2fb6c9be-3790-52af-bcae-8775fca692cd",
    name: "Boost Energy",
    headImg: <Current />,
    weight: ".125 gm",
    emoji: " 😍",
    emojiName: "Wow",
    color: "green",
  },
  {
    id: "e884e11d-c8d0-5037-b90e-4d7182a9579b",
    name: "Weigth Loss",
    headImg: <BodyIcon />,
    weight: "2.5 kg",
    emojiName: "Great",
    emoji: "🤩",
    color: "purple",
  },
];

("bg-green-200");
const OutputComponent = () => {
  return (
    <Card className="p-[20px] mt-[12px] mr-4 bg-white">
      <div className="flex justify-between mb-3">
        <p className="font-bold"> Output</p>
        <p className="flex items-center gap-2">
          <ArrowDown /> View all
        </p>
      </div>
      <div className="grid grid-row-2 gap-3">
        <div className="grid grid-rows-2 gap-3">
          {newData.map((item) => {
            return (
              <div
                className={`w-full h-16 bg-${item.color}-200 border-2 border-${item.color}-300 border-dashed rounded-xl flex items-center p-4 `}
              >
                <div
                  className={`w-[40px] h-[40px] bg-${item.color}-900 flex items-center justify-center rounded-[8px]`}
                >
                  {item.headImg}
                </div>
                <div className="p-5">
                  <p className="whitespace-nowrap font-bold">{item.name}</p>
                  <p>{item.weight}</p>
                </div>
                <p>{item.emoji}</p>
                <p>{item.emojiName}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default OutputComponent;
