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
            <h4 className={classes.cardTitleWhite}>Item List</h4>
            <p className={classes.cardCategoryWhite}>
              Here is the list of all items in stock.
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Stock", "Buy Price", "Selling Price"]}
              tableData={[
                ["H928172", "COCA COLA 1L PET", "1029", "Rp10,000", "Rp13,000"],
                ["H811112", "AQUA PET 600ML", "918", "Rp3,512", "Rp4,000"],
                ["H001293", "INDOMIE GORENG BOX", "827", "Rp1,218", "Rp2,129"],
                ["H271625", "TEROMPET PLASTIK", "212", "Rp5,000", "Rp8,000"],
                ["H029176", "HANNOCHS BULB 30W", "516", "Rp20,129", "Rp25,212"],
                ["H001927", "TRASHBAG 200", "917", "Rp5,003", "Rp8,502"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
