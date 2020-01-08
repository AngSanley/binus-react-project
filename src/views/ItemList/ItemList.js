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
                ["H001927", "TRASHBAG 200", "917", "Rp5,003", "Rp8,502"],
                ["H648534", "Aqua 330 ml", "300", "Rp1,600", "Rp2,000"],
                ["H749288", "Aqua 600 ml", "250", "Rp2,200", "Rp3,000"],
                ["H623719", "Aqua 1L", "917", "Rp3,700", "Rp6,000"],
                ["H252102", "Djarum Black Capuccino Rokok 16 Batang", "40", "Rp20,200", "Rp22,700"],
                ["H261812", "ABC Exo Milk Coffee 230 ml", "50", "Rp4,200", "Rp6,800"],
                ["H001231", "Tango Wafer Vanilla 130 g", "42", "Rp5,300", "Rp7,600"],
                ["H001885", "Tango wafer chocolate", "48", "Rp5,300", "Rp7,600"],
                ["H009479", "Sasa Gourmet Powder", "32", "Rp7,200", "Rp10,900"],
                ["H009859", "Djarum Black Mild Rokok 16 Batang", "23", "Rp15,000", "Rp18,500"],
                ["H008373", "Djarum Black Mild Rokok 12 Batang", "30", "Rp13,000", "Rp14,800"],
                ["H006521", "Djarum La Light Rokok 16 Batang", "23", "Rp18,000", "Rp22,500"],
                ["H007322", "Gekikara Ramen Premium ", "63", "Rp6,000", "Rp9,500"],
                ["H001186", "Ichitan Thai Milk Tea 310 ml", "76", "Rp5,000", "Rp7,500"],
                ["H005402", "Nescafe Black 200 ml", "72", "Rp5,003", "Rp8,502"],
                ["H047169", "Frisian Flag Uht 225 ml", "53", "Rp6,003", "Rp7,502"],
                ["H001927", "Indomie Instan Kaldu Ayam", "60", "Rp1,800", "Rp2,500"],
                ["H070103", "Sedap Mie soto 75 g", "123", "Rp1,800", "Rp2,500"],
                ["H062135", "Sedap Mie Ayam Bawang 70g", "80", "Rp1,800", "Rp2,500"],
                ["H082137", "Indomie Instan Soto Mie 70g", "88", "Rp1,800", "Rp2,500"],
                ["H073805", "Indomie Instan Soto Special Koya 75g", "23", "Rp1,800", "Rp2,500"],
                ["H042616", "Fruit Tea Apple Botol 350 ml", "42", "Rp2,000", "Rp3,500"],
                ["H099133", "Fruit Tea BlackCurrant Botol 350 ml", "42", "Rp2,000", "Rp3,500"],
                ["H034659", "Fruit Tea Freeze Botol 350 ml", "23", "Rp2,000", "Rp3,500"]

              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
