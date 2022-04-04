import React, { useState } from "react";
import { Grid, Button, Card, CardContent, Tabs, Tab } from "@mui/material";
import { Speedometer } from "./Speedometer";
import { DriverEnroll } from "./DriverEnroll";
import { DpcItem } from "./DpcItem";
import { DriverItem } from "./DriverItem";
import { DriverManager } from "./DriverManager";
import {VehicalList} from "./VehicalList";
import {Vehicalitems} from "./VehicalItems";

export const Home = () => {
  const [data, setData] = useState([
    {
      fname: "Ganesh",
      mname: "Shashidhar",
      lname: "Patil",
      local: 1,
      long: 4,
    },
    {
      fname: "Javed",
      mname: "Jabbar",
      lname: "Shaikh",
      local: 5,
      long: 2,
    },
    {
      fname: "Sam",
      mname: "Datta",
      lname: "Shivraj",
      local: 3,
      long: 3,
    },
    {
      fname: "Nitin",
      mname: "Pandurang",
      lname: "Sethe",
      local: 4,
      long: 2,
    },
    {
      fname: "Pappu",
      mname: "Hasan",
      lname: "Shaikh",
      local: 5,
      long: 4,
    },
    {
      fname: "Sameer",
      mname: "Rauf",
      lname: "Khan",
      local: 3,
      long: 5,
    },
<<<<<<< Updated upstream
=======
  ]);
  const [vehdata, setVehdata] = useState([
    "MH-26 N2517",
    "MH-21 P3517",
    "MH-12 2517",
    "AP-32 7677",
>>>>>>> Stashed changes
  ]);
  const [vehdata, setVehdata] = useState([
    "MH-26 N2202",
    "MH-21 P3540",
    "MH-12 2533",
    "AP-32 7677",
  ]);
  const addDriver = (newdriver) => {
    console.log(newdriver);
    setData([newdriver, ...data]);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
<<<<<<< Updated upstream
        <DriverManager
          driverdata={data}
          vehdata={vehdata}
          addDriver={addDriver}
        />
=======
        <DriverManager driverdata={data} vehdata={vehdata} />
>>>>>>> Stashed changes
      </Grid>
    </Grid>
  );
};