import React from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { handleChange,openCartModal } from "../Redux/action";
import { connect } from "react-redux";
import Cart from "./Cart";
import { FaShoppingCart } from "react-icons/fa";

function NavSearch(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={props.input}
          onChange={(event) => props.handleChange(event)}
        />
      </Form>
      <FaShoppingCart color="white" onClick={()=> props.openCartModal(props.isOpenModal)} />
      <Cart />
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  input: state.input,
  isOpenModal: state.isOpenModal,
});
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (payload) => dispatch(handleChange(payload)),
    openCartModal: (payload) => dispatch(openCartModal(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);
