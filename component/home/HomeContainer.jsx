import { connect } from "react-redux";
import { useState, useEffect, useRef } from "react";

import { styles } from ".";

const LayoutContainer = () => {
  return "home page";
};

const mapStateToProps = (state) => ({
    error: state.error,
  }),
  mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
