import React from "react";
import { Form } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import WysiwygEditor from "../WysiwygEditor";
import DropFiles from "../DropFiles";
import CheckBox from "../CheckBox";

function AddProduct() {
  return (
    <div>
      <div className="border-2 border-gray-600 bg-blue-100">
        <div className="category_header h-10 px-2 border-top border-right border-left border-2 border-gray-400">
          <h3 className="text-lg font-medium flex ">
            <div className="p-2">
              <AiIcons.AiOutlineBars size={25} />
            </div>
            <div className="flex items-center">Add Product</div>
          </h3>
        </div>
        <div>
          <div className="flex">
            <div className="h-16 w-1/4 px-2 border border-gray-600 flex items-center text-sm">
              Category
            </div>
            <div className="w-full pl-2 border border-gray-600 flex items-center">
              <Form.Group className="w-full pr-2 pt-3">
                <Form.Control size="sm" as="select">
                  <option>Choose Status</option>
                  <optgroup label="Tempura">
                    <option>Tempura</option>
                  </optgroup>
                  <optgroup label="Offbeat Burger">
                    <option>Offbeat Burger</option>
                  </optgroup>
                  <optgroup label="Our Stores">
                    <option></option>
                  </optgroup>
                </Form.Control>
              </Form.Group>
            </div>
          </div>
          <div className="flex">
            <div className="h-16 w-1/4 px-2 border border-gray-600 flex items-center text-sm">
              Product Title
            </div>
            <div className="w-full pl-2 border border-gray-600 flex items-center">
              <Form.Group className="w-full pr-2 pt-3">
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Name of your Product"
                />
              </Form.Group>
            </div>
          </div>
          <div className="flex">
            <div className="h-16 w-1/4 px-2 border border-gray-600 flex items-center text-sm">
              Selling Price
            </div>
            <div className="w-full pl-2 border border-gray-600 flex items-center">
              <Form.Group className="w-full pr-2 pt-3">
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Selling prince of the Product"
                />
              </Form.Group>
            </div>
          </div>
          <div className="flex">
            <div className="h-16 w-1/4 px-2 border border-gray-600 flex items-center text-sm">
              Unit
            </div>
            <div className="w-full pl-2 border border-gray-600 flex items-center">
              <Form.Group className="w-full pr-2 pt-3">
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Selling unit of the Product if applicable (eg. Kg as 100/kg)"
                />
              </Form.Group>
            </div>
          </div>
          <div className="flex">
            <div className="h-16 w-1/4 px-2 border border-gray-600 flex items-center text-sm">
              Short Description
            </div>
            <div className="w-full pl-2 border border-gray-600 flex items-center">
              <Form.Group className="w-full pr-2 pt-3">
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Overview description of the product"
                />
              </Form.Group>
            </div>
          </div>
          <div className="flex">
            <div className="h-15 w-1/4 px-2 py-3 border border-gray-600">
              <div className="text-sm">Description</div>
              <div className=" text-xs">Full details of the product</div>
            </div>
            <div className="w-full pl-2 pt-3 border border-gray-600 flex items-center">
              <WysiwygEditor />
            </div>
          </div>
          <div className="flex">
            <div className="h-15 w-1/4 px-2 py-3 border border-gray-600">
              <div className="text-sm">Widget Setting</div>
              <div className=" text-xs">Other Configuration</div>
            </div>
            <div className="w-full pl-2 pt-3 border border-gray-600 flex items-center">
              <div>
                <div>
                  <CheckBox label="In Stock?" />
                </div>
                <div>
                  <CheckBox label="Tag as Bestseller" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-32">
            <div className=" w-1/4 px-2 py-3 border border-gray-600 flex items-center">
              <div className="text-lg flex">
                <BiIcons.BiImage size={28} />
                Product Gallary
              </div>
            </div>
            <div className="w-full pl-2 pt-3 border border-gray-600 flex justify-center items-center">
              <div className="border border-black p-4">
                <DropFiles />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
