import React from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import ProductActionButton from "./ProductActionButton";

const ProductTable = () => {
  const data = {
    columns: [
      {
        label: "#",
        field: "number",
        sort: "asc",
        width: 150,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 270,
      },
      {
        label: "Short Description",
        field: "short_description",
        sort: "asc",
        width: 200,
      },
      {
        label: "Price",
        field: "price",
        sort: "asc",
        width: 100,
      },
      {
        label: "Category",
        field: "category",
        sort: "asc",
        width: 150,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        number: "1",
        name: "Tempura",
        short_description: "Test",
        price: "100.00",
        category: <Link to="#" className="text-blue-600">Tempura-Tempura</Link>,
        action: <ProductActionButton />,
      },
      {
        number: "2",
        name: "Chori Burger",
        short_description: "Burger",
        price: "150.00",
        category: <Link to="#" className="text-blue-600">Offbeat Burger-Offbeat Burger</Link>,
        action: <ProductActionButton />,
      },
    ],
  };

  return <MDBDataTable striped bordered small hover data={data} />;
};

export default ProductTable;
