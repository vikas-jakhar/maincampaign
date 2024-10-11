"use client";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";

const WorldMap: React.FC = () => {
  return (
    <div className='max-w-[1042px] w-full h-[250px] sm:h-[400px] xl:h-[500px]'>
      <VectorMap
        map={worldMill}
        backgroundColor="white"
        series={{
          regions: [
            {
              values: {}, 
              scale: {
                default: "#ECECEC", 
              },
              attribute: "fill",
            },
          ],
        }}
        regionStyle={{
          initial: {
            fill: "#ECECEC", 
            strokeWidth: 0.5, 
            stroke: "#000000", 
          },
          hover: {
            fill: "#3B5998", 
          },
          selected: {
            fill: "#3c8dbc", 
          },
        }}
      />
    </div>
  );
};

export default WorldMap;
