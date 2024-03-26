import React from "react";
import { Card } from "flowbite-react";

function Creatorspage() {
  return (
    <div className="flex justify-center mt-8 mb-5">
      <div className="grid grid-cols-4 gap-4">
        {[...Array(20)].map((_, index) => (
          <Card key={index} style={{ maxWidth: "250px" }}>
            <img
              className="w-full h-auto"
              src="https://i.imgur.com/hopdbNH.png"
              alt="Noteworthy technology acquisitions 2021"
            />
            <div className="p-4">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                Nama creators
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Keterangan mengenai kreators
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Creatorspage;
