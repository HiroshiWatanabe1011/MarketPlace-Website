import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

@inject("store")
@observer
export default class Nav extends Component {
  get currentAccount() {
    return this.props.store.currentAccount;
  }

  render() {
    return (
      <div>
        <Link to="/">Auction List</Link>{" "}
        {this.currentAccount
          ? `Logged in as ${this.currentAccount}`
          : `Not logged in`}
      </div>
    );
  }
}
