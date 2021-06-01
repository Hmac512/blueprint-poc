import React from "react";
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider
} from "@blueprintjs/core";

export interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <Navbar className={Classes.DARK}>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Blueprint POC</NavbarHeading>
        <NavbarDivider />
        <AnchorButton
          href="http://blueprintjs.com/docs"
          text="Docs"
          target="_blank"
          minimal
          rightIcon="share"
        />
        <AnchorButton
          href="https://dimo.zone"
          text="DIMO"
          target="_blank"
          minimal
          rightIcon="build"
        />
      </NavbarGroup>
    </Navbar>
  );
};
