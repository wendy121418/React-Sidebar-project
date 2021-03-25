import React from "react";
import { Form } from "react-bootstrap";

function Radio({label}) {
  return (
    <div className='pl-2'>
      <Form>
        {["radio"].map((type) => (
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

export default Radio;
