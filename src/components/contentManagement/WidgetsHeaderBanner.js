import React from "react";
import { Form } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import menu5 from "../../images/menu5.jpg";

function WidgetsHeaderBanner() {
  return (
    <div className="sales_order h-screen">
      <h3 className="w-full pb-5">
        CMS - <strong>Widgets (Ad Manager) </strong>
      </h3>
      <div className="border-2 border-gray-600 bg-blue-100">
        <div className="category_header h-12 px-2 border-top border-right border-left border-2 border-gray-400">
          <h3 className="text-lg font-medium flex ">
            <div className="p-2">
              <AiIcons.AiOutlineBars size={25} />
            </div>
            <div className="flex items-center text-xl">Widgets - Banner Update Form</div>
          </h3>
        </div>
        <div>
          <div className="flex p-2">
            <div className="h-16 w-1/4 px-2 border border-gray-600 flex items-center text-sm">
              <div>
                <div className="text-sm">Current Image</div>
                <div className=" text-xs">Image bannner shown in the header</div>
              </div>
            </div>
            <div className="w-full pl-2 border border-gray-600 flex items-center">
              <div>
                <img src={menu5} alt="" className="w-5/6 h-24" />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="h-16 w-1/4 px-2 py-3 border border-gray-600">
              <div className="text-sm">Image</div>
              <div className=" text-xs">Image banner shown in the header</div>
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
          <div className="flex border-t-2 border-gray-600 p-3 pl-5">
            <div type="button" className="btn btn-primary flex">
            <AiIcons.AiOutlineSave size={25} />
              <div className="pl-1">Update Banner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetsHeaderBanner;
