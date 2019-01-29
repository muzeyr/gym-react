import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import CardFooter from "components/Card/CardFooter.jsx";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function GymC(props) { 
  return (
    <div> 
          GYM
          <CardFooter> 
            </CardFooter>
    </div>
  );
}  

export default 

withStyles(styles)(GymC);