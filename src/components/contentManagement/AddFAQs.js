import React from "react";
import { Form } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import WysiwygEditor from "../WysiwygEditor";
import Radio from "../Radio";

function AddFAQs() {
  return (
    <div>
      <div className="border-2 border-gray-600 bg-blue-100">
        <div className="category_header h-10 px-2 border-top border-right border-left border-2 border-gray-400">
          <h3 className="text-lg font-medium flex ">
            <div className="p-2">
              <AiIcons.AiOutlineBars size={25} />
            </div>
            <div className="flex items-center">FAQ Entry Form</div>
          </h3>
        </div>
        <div>
          <div className="flex">
            <div className="h-16 w-1/4 px-2 border border-gray-600 flex items-center text-sm">
              Question
            </div>
            <div className="w-full pl-2 border border-gray-600 flex items-center">
              <Form.Group className="w-full pr-2 pt-3">
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="FAQ question here"
                />
              </Form.Group>
            </div>
          </div>
          <div className="flex">
            <div className="h-15 w-1/4 px-2 py-3 border border-gray-600">
              <div className="text-sm">Answer</div>
            </div>
            <div className="w-full pl-2 pt-3 border border-gray-600 flex items-center">
                <WysiwygEditor />
            </div>
          </div>
          <div className="flex">
            <div className="h-16 w-1/4 px-2 border border-gray-600 flex items-center text-sm">
              Sorting
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
              <Radio label="Published" />

              <Radio label="Draft" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFAQs;
