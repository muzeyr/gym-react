import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx"; 
import CardBody from "components/Card/CardBody.jsx";
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
  },
  userFrm:{adi:"",soyadi:"",mail:""}

};



function NewUser(props) {
  const { classes } = props;
  console.log('>>>>>>>>>>');
  console.log(props);
  console.log('<<<<<<<<<<');
 

  function  showNotification(e)  {
      e.preventDefault();
      console.log('>>>Adı:'+this.refs.input);
  }

  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Yeni Kullanıcı</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Adı"
                    ref='input'
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Soyadı"
                    id="surname"
                  
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>


                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Mail Adres"
                    id="email-address"
                   
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              
              
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Açıklama</InputLabel>
                  <CustomInput
                    labelText="Özel durumlar,sağlık problemleri"
                    id="note"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary"  onClick={showNotification} >Kaydet</Button>
            </CardFooter>
          </Card>
        </GridItem>
      
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(NewUser);
