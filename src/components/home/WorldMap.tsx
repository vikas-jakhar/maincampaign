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
              values: {}, // No specific values, we will set the default fill color
              scale: {
                default: "#ECECEC", // Default color for regions (gray)
              },
              attribute: "fill",
            },
          ],
        }}
        regionStyle={{
          initial: {
            fill: "#ECECEC", // Default fill color for countries  
            strokeWidth: 0.5, // Correct property for stroke width
            stroke: "#000000", // Border color (black)
          },
          hover: {
            fill: "#3B5998", // Hover color for regions
          },
          selected: {
            fill: "#3c8dbc", // Color for selected region
          },
        }}
      />
    </div>
  );
};

export default WorldMap;
