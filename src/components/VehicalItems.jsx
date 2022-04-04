import React from "react";
import { Card, CardContent } from "@mui/material";

export const VehicalItems= ({ item }) => {
  return (
    <React.Fragment>
      <Card className="driveritem">
        <CardContent>{item}</CardContent>
      </Card>
    </React.Fragment>
  );
};