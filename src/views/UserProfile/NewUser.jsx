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

import axios from "axios";


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

class NewUser extends React.Component {
    //function NewUser({ ...props }) {
    constructor(props) {
        super(props)
        this.state = {
            adi: '',
            soyadi: '',
            mail: '',
            aciklama: ''
        }; 
        this.showinfo =this.showinfo.bind(this);

    }

    showinfo = () => {
        axios
        .post('http://localhost:8088/insert', this.state)
        .then(obj => {
            if(obj.data.code===0){
                this.props.history.push('/userList');    

            }

            
             
        });
        console.log(this.state);
    }
    handleChange = (event) => {
        switch (event.target.id) {
            case "name":
                return this.setState({adi: event.target.value});
            case "surname":
                return this.setState({soyadi: event.target.value});
            case "email":
                return this.setState({mail: event.target.value});
            case "note":
                return this.setState({aciklama: event.target.value});
        }

    }

    render() {

        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 >Yeni Kullanıcı</h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>

                                    <GridItem xs={12} sm={12} md={3}>
                                        <CustomInput
                                            labelText="Adı"
                                            value={this.state.adi}
                                            onChange={this.handleChange}
                                            id="name"
                                            formControlProps={{
                                            fullWidth: true
                                        }}/>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <CustomInput
                                            labelText="Soyadı"
                                            id="surname"
                                            onChange={this.handleChange}
                                            value={this.state.soyadi}
                                            formControlProps={{
                                            fullWidth: true
                                        }}/>
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={4}>
                                        <CustomInput
                                            labelText="Mail Adres"
                                            id="email"
                                            onChange={this.handleChange}
                                            value={this.state.mail}
                                            formControlProps={{
                                            fullWidth: true
                                        }}/>
                                    </GridItem>
                                </GridContainer>

                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <InputLabel
                                            style={{
                                            color: "#AAAAAA"
                                        }}>Açıklama</InputLabel>
                                        <CustomInput
                                            labelText="Özel durumlar,sağlık problemleri"
                                            id="note"
                                            onChange={this.handleChange}
                                            value={this.state.aciklama}
                                            formControlProps={{
                                            fullWidth: true
                                        }}
                                            inputProps={{
                                            multiline: true,
                                            rows: 5
                                        }}/>
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                                <Button color="primary" onClick={this.showinfo}>Kaydet</Button>
                            </CardFooter>
                        </Card>
                    </GridItem>

                </GridContainer>
            </div>
        );
    }
}
 
export default  withStyles(styles)(NewUser);
