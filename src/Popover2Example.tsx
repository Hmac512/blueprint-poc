import React from "react";
import { Button, Menu, MenuItem } from "@blueprintjs/core";
import { ContextMenu2 } from "@blueprintjs/popover2";

import { Example } from "./Example";

export const Popover2Example: React.FC = () => {
  const menu = (
    <Menu>
      <MenuItem text="hello world" />
    </Menu>
  );

  return (
    <Example header="Popover2 Sandbox">
      <ContextMenu2 content={menu}>
        <Button intent="primary" outlined={true} text="Right click me" />
      </ContextMenu2>
    </Example>
  );
};
