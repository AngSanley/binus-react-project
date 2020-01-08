import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function EmployeeList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Employee List</h4>
            <p className={classes.cardCategoryWhite}>
              Here is the list of employee in the branch.
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Sex", "Position", "Salary"]}
              tableData={[
                ["I1928726", "Monika Subyanto", "Female", "Cashier", "Rp3,857,342"],
                ["I2817261", "Wina Sabon", "Female", "Cashier", "Rp3,864,332"],
                ["K2817262", "Reynhard Sinaga", "Male", "Cashier", "Rp3,754,432"],
                ["K2918272", "Junas Manurung", "Male", "Cashier", "Rp3,974,234"],
                ["I9281726", "Jan Uari", "Male", "Store Manager", "Rp5,997,232"],
                ["K9281726", "Febru Ari", "Male", "Stock Manager", "Rp4,657,232"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
