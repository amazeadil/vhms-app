import React, { useState, useEffect } from "react";
<<<<<<< Updated upstream
import { VehicalItem } from "./VehicalItem";
import { TextField, Card, CardContent } from "@mui/material";

export const VehicalList = ({ vehdata }) => {
  const [data, setData] = useState([...vehdata]);
  const [txtSrc, setTxtSrc] = useState("");

=======

import { TextField, Card, CardContent } from "@mui/material";
import { VehicalItems } from "./VehicalItems";

export const VehicalList = ({vehdata }) => {
  const [data, setData] = useState([...vehdata]);
  const [txtSrc, setTxtSrc] = useState("");
>>>>>>> Stashed changes
  useEffect(() => {
    const filtered = vehdata.filter((item) =>
      item.toUpperCase().includes(txtSrc.toUpperCase())
    );
    setData([...filtered]);
  }, [txtSrc]);
<<<<<<< Updated upstream
  return (
=======
   return (
>>>>>>> Stashed changes
    <React.Fragment>
      <Card>
        <CardContent>
          <TextField
<<<<<<< Updated upstream
            label="Search Vehicle"
=======
            label="Search Driver"
>>>>>>> Stashed changes
            onChange={(e) => setTxtSrc(e.target.value)}
          />
        </CardContent>
      </Card>
<<<<<<< Updated upstream
      {data.map((item) => (
        <VehicalItem item={item} />
      ))}
    </React.Fragment>
  );
};
=======
      {data.map((item, index) => (
        <VehicalItems key={index} item={item} />
      ))}
    </React.Fragment>
  );
};
>>>>>>> Stashed changes
