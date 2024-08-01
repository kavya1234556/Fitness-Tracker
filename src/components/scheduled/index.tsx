import { Card } from "../ui/card";

const data = [
  {
    id: "554d0053-ddef-5586-8f06-04ee418fa1a5",
    name: "Fitness",
    subName: "Training Yoga Class",
    date: "22 Apr",
  },
  {
    id: "9d3f92fd-a8d9-5609-aa63-8b59ef82c06f",
    name: "Cardio",
    subName: "Training Swimming",
    date: "28 Apr",
  },
];

const Scheduled = () => {
  return (
    <>
      <p className="font-bold p-2">Scheduled</p>
      <div className="grid gap-4 grid-row-2">
        {data?.map((item) => {
          return (
            <Card className="mx-1">
              <div className="flex justify-between p-3">
                <div>
                  <p className="text-gray-400">{item.name}</p>
                  <p>{item.subName}</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="flex items- font-bold">...</p>
                  <p className="text-gray-400">{item.date}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Scheduled;
