import React from "react";
import { Form } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import CheckBox from "../CheckBox";

function AddSubCategory() {
  return (
    <div>
      <div className="border-2 border-gray-600 bg-blue-100">
        <div className="category_header h-10 px-2 border-top border-right border-left border-2 border-gray-400">
          <h3 className="text-lg font-medium flex ">
            <div className="p-2">
              <AiIcons.AiOutlineBars size={25} />
            </div>
            <div className="flex items-center">Sub-Category Entry Form</div>
          </h3>
        </div>
        <div>
        <div className="flex">
            <div className="h-16 w-1/4 px-2 border border-gray-600 flex items-center text-sm">
            Parent Category
            </div>
            <div className="w-full pl-2 border border-gray-600 flex items-center">
              <Form.Group className="w-full pr-2 pt-3">
                <Form.Control size="sm" as="select">
                  <option>Choose Status</option>
                  <option>Tempura</option>
                  <option>Offbeat Burger</option>
                </Form.Control>
              </Form.Group>
            </div>
          </div>
          <div className="flex">
            <div className="h-16 w-1/4 px-2 border border-gray-600 flex items-center text-sm">
            Subcategory Title
            </div>
            <div className="w-full pl-2 border border-gray-600 flex items-center">
              <Form.Group className="w-full pr-2 pt-3">
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Name of Subcategory (eg. Carrots, Chicken, Pork)"
                />
              </Form.Group>
            </div>
          </div>
          <div className="flex">
            <div className="h-15 w-1/4 px-2 py-3 border border-gray-600">
              <div className="text-sm">Widget Setting</div>
              <div className=" text-xs">Other Configuration</div>
            </div>
            <div className="w-full pl-2 pt-3 border border-gray-600 flex items-center">
              <Form>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <CheckBox label="Add to Feature Box in Homepage" />
                    
                  </div>
                ))}
              </Form>
            </div>
          </div>
          <div className="flex">
            <div className="h-16 w-1/4 px-2 border border-gray-600 flex items-center text-sm">
              Status
            </div>
            <div className="w-full pl-2 border border-gray-600 flex items-center">
              <Form.Group className="w-full pr-2 pt-3">
                <Form.Control size="sm" as="select">
                  <option>Choose Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </Form.Control>
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSubCategory;
