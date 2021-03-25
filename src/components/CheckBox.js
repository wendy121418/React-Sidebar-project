import React from "react";
import { Form } from "react-bootstrap";

function CheckBox({label}) {
  return (
    <div>
      <Form>
        {["checkbox"].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={label}
            />
          </div>
        ))}
      </Form>
    </div>
  );
}

export default CheckBox;
