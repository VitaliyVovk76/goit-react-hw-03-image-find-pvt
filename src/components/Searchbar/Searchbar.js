import React, { Component } from "react";
import { ImSearch } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = { query: "" };

  hendleChenge = (evt) => {
    this.setState({ query: evt.currentTarget.value.toLowerCase() });
  };

  hendleFormSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.query.trim() === "") {
      toast("Enter the query");
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.hendleFormSubmit}>
          <button className={s.button} type="submit">
            <ImSearch className={s.buttonLabel} />
          </button>
          <input
            className={s.input}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.hendleChenge}
          />
        </form>
        <ToastContainer />
      </header>
    );
  }
}

export default Searchbar;
