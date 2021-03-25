import React from "react";
import { Form } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import CheckBox from "../CheckBox";

function AddCategory() {
  return (
    <div>
      <div className="border-2 border-gray-600 bg-blue-100">
        <div className="category_header h-10 px-2 border-top border-right border-left border-2 border-gray-400">
          <h3 className="text-lg font-medium flex ">
            <div className="p-2">
              <AiIcons.AiOutlineBars size={25} />
            </div>
            <div className="flex items-center">Category Entry Form</div>
          </h3>
        </div>
        <div>
          <div className="flex">
            <div className="h-16 w-1/4 px-2 border border-gray-600 flex items-center text-sm">
              Category Title
            </div>
            <div className="w-full pl-2 border border-gray-600 flex items-center">
              <Form.Group className="w-full pr-2 pt-3">
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Name of Category (eg. Vegetables, Meat, Fruits)"
                />
              </Form.Group>
            </div>
          </div>
          <div className="flex">
            <div className="h-16 w-1/4 px-2 py-3 border border-gray-600">
              <div className="text-sm">Thumbnail</div>
              <div className=" text-xs">Image shown in the homepage</div>
            </div>
            <div className="w-full pl-2 py-2 border border-gray-600">
              <Form>
                <Form.Group>
                  <Form.File id="exampleFormControlFile1" />
                </Form.Group>
              </Form>
              <div>
                <p className="font-extralight text-xs">
                  .jpg, .jpeg. or .png only (Max size: 2MB)
                </p>
              </div>
              <div>
                <p className="font-light text-xs">
                  For better result. download our recommended tempate PSD or
                  PNG.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="h-16 w-1/4 px-2 py-3 border border-gray-600">
              <div className="text-sm">Nav Thumbnail</div>
              <div className=" text-xs">
                Current image shown in the navigation bar
              </div>
            </div>
            <div className="w-full pl-2 py-2 border border-gray-600">
              <Form>
                <Form.Group>
                  <Form.File id="exampleFormControlFile1" />
                </Form.Group>
              </Form>
              <div>
                <p className="font-extralight text-xs">
                  .jpg, .jpeg. or .png only (Max size: 2MB)
                </p>
              </div>
              <div>
                <p className="font-light text-xs">
                  For better result. download our recommended tempate PSD or
                  PNG.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="h-25 w-1/4 px-2 py-3 border border-gray-600">
              <div className="text-sm">Display Order</div>
              <div className=" text-xs">
                The display of each category in the mega menu section.
              </div>
            </div>
            <div className="w-full pl-2 border border-gray-600 flex items-center">
              <Form.Group className="w-full pr-2 pt-3">
                <Form.Control size="sm" type="text" placeholder="0" />
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

export default AddCategory;
