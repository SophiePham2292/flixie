import React, { Component } from "react";
import { Control, Input, Icon } from "bloomer";
export default class SearchBar extends Component {
  render() {
    return (
        <Control hasIcons="left">
          <Input isSize="small" placeholder="Search" />
          <Icon isSize="small" isAlign="left">
            <span className="fa fa-search" aria-hidden="true" />
          </Icon>
        </Control>
    );
  }
}
