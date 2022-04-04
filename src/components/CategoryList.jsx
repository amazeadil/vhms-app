import React, { useEffect, useState } from "react";

import axios from "axios";

import { Button, Card, CardContent, Grid } from "@mui/material";

import { productItem } from "./productItem";

export const CategoryList = () => {
  const [data, setData] = useState([]);
  const getCategories = async () => {
    const categories = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    const arr = categories.data;
    setData([...arr, "ALL"]);
    console.log(categories.data);
    
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          {data.map((item) => (
            <Button variant="contained" className="driveritem">
              {" "}
              {item}
            </Button>
          ))}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
