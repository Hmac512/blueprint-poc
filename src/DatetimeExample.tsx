import React from "react";
import { DatePicker } from "@blueprintjs/datetime";

import { Example } from "./Example";

export const DatetimeExample: React.FC = () => {
  return (
    <Example header="Datetime Sandbox">
      <DatePicker className="example-datepicker" timePrecision="minute" />
    </Example>
  );
};
