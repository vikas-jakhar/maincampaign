"use client";
import React, { useEffect } from 'react';
import { Root } from '@amcharts/amcharts5';
import { MapChart, MapPolygonSeries } from '@amcharts/amcharts5/map';
import * as am5 from '@amcharts/amcharts5';
import * as am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import worldIndiaLow from '@amcharts/amcharts5-geodata/worldIndiaLow';

const WorldMap: React.FC = () => {
  useEffect(() => {
    // Create root and chart
    const root = Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themes_Animated]);

    const chart = root.container.children.push(
      MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoNaturalEarth1()
      })
    );

    const polygonSeries = chart.series.push(
      MapPolygonSeries.new(root, {
        geoJSON: worldIndiaLow,
        exclude: ["AQ"] // Exclude Antarctica or any other unwanted regions
      })
    );
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true
    });
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x677935)
    });
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
};

export default WorldMap;
