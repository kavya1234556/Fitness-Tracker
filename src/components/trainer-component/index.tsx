import ArrowDown from "../icon/arrow-down";
import gym from "../../assets/images/gym.jpg";
import yoga from "../../assets/images/yoga.jpg";
import { Card } from "../ui/card";

const TrainerData = [
  {
    id: 0,
    name: "Jack Aranda",
    subName: "Gym Expert",
    img: gym,
  },
  {
    id: 1,
    name: "Olive Yew",
    subName: "Yoga Expert",
    img: yoga,
  },
];

const TrainerComponent = () => {
  return (
    // <div className="flex justify-between gap-2 p-[12px] bg-white">
    //   <div className="flex justify-between">
    //     <p className="font-bold">Popular Trainer</p>
    //     <p className="flex items-center gap-2">
    //       <ArrowDown />
    //       Veiw all
    //     </p>
    //   </div>
    //   <div>
    //     {TrainerData.map((item) => {
    //       return (
    //         <div key={item.id}>
    //           <img src={item.img} />
    //           <p>{item.name}</p>
    //           <p>{item.subName}</p>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <Card className="p-[20px] mt-[12px] mr-4 bg-white">
      <div className="flex justify-between mb-3">
        <p className="font-bold"> Popular Trainer</p>
        <p className="flex items-center gap-2">
          <ArrowDown /> View all
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {TrainerData.map((item) => {
          return (
            <Card key={item.id} className="rounded-2xl">
              <div className="">
                <div>
                  <img src={item.img} className="w-full rounded-2xl" />
                </div>
                <div className="pt-[10px] pr-3">
                  <p className="text-[13px] font-extrabold text-center">
                    {item.name}
                  </p>
                  <p className="text-[10px] text-gray-500 text-center">
                    {item.subName}
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

export default TrainerComponent;
