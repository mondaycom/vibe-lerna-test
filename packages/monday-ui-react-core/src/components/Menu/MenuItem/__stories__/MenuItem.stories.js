/* eslint-disable no-unused-vars */
import React from "react";
import MenuItem from "../MenuItem";
import Menu from "../../Menu/Menu";
import { Activity, Bolt, Settings } from "../../../Icon/Icons";
import Icon from "../../../Icon/Icon";
import Tooltip from "../../../Tooltip/Tooltip";
import DialogContentContainer from "../../../DialogContentContainer/DialogContentContainer";

export const menuItemTemplate = args => (
  <Menu>
    <MenuItem {...args} />
  </Menu>
);

export const menuItemStatesTemplate = args => (
  <Menu>
    <MenuItem title="Regular menu item" />
    <MenuItem title="Selected menu item" selected />
    <MenuItem title="Disabled menu item" disabled />
  </Menu>
);

export const menuItemIconsTemplate = args => (
  <Menu>
    <MenuItem title="SVG icon" icon={Activity} />
    <MenuItem title="Font icon" icon="fa fa-star" iconType={MenuItem.iconType.ICON_FONT} />
  </Menu>
);

export const menuItemLabelTemplate = args => (
  <Menu>
    <MenuItem title="Menu item" label="New" />
  </Menu>
);

export const menuItemOverflowTemplate = args => {
  return (
    <Menu>
      <MenuItem title="short text" />
      <MenuItem title="long text - bla bla bla bla bla bla bla bla bla bla bla" />
      <MenuItem title="long text with sub menu - bla bla bla bla bla bla bla bla bla bla bla">
        <Menu tabIndex={0} id="sub-menu">
          <MenuItem title="Sub menu item 1" />
          <MenuItem title="Sub menu item 2" />
          <MenuItem title="Sub menu item 3" />
        </Menu>
      </MenuItem>
    </Menu>
  );
};

export const menuItemTooltipTemplate = args => {
  return (
    <Menu>
      <MenuItem title="Menu item with tooltip" tooltipContent="I am tooltip" />
      <MenuItem title="Disabled menu item with tooltip" disabled={true} disableReason="I am a disabled tooltip" />
      <MenuItem title="I am a very very very very long text please hover me to get a tooltip" />
      <MenuItem
        title="Menu item with bottom tooltip"
        tooltipContent="I am tooltip"
        tooltipPosition={MenuItem.tooltipPositions.BOTTOM}
      />
      <MenuItem
        title="Menu item with icon and tooltip"
        tooltipContent="Menu item with icon and tooltip"
        tooltipPosition={Tooltip.positions.LEFT}
        icon={Activity}
        iconType={Icon.type.SVG}
      />
    </Menu>
  );
};

export const menuItemWithLabelDoTemplate = args => (
  <DialogContentContainer>
    <Menu>
      <MenuItem title="Menu item 1" label="New" />
      <MenuItem title="Menu item 2" />
      <MenuItem title="Menu item 3" />
    </Menu>
  </DialogContentContainer>
);

export const menuItemWithLabelDontTemplate = args => (
  <DialogContentContainer>
    <Menu>
      <MenuItem title="Menu Item 1" label="Long menu item label" />
      <MenuItem title="Menu Item 2" />
      <MenuItem title="Menu Item 3" />
    </Menu>
  </DialogContentContainer>
);
