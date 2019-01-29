import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";

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

class UserList extends React.Component {
    //function UserList(props) {
    constructor(props) {
        super(props)
        this.state = {
            list:[]
             
        };

        axios
            .get('http://localhost:8088/list', null)
            .then(obj => {
                console.log(obj.data); 
                this.setState({list: obj.data});
            });

    }

    render() {

        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            <h4  >Üye Listesi</h4>

                        </CardHeader>
                        <CardBody>
                            <ReactTable
                                data={this.state.list}
                                columns={[
                                {
                                    Header: "Adı Soyadı",
                                    accessor: "name"
                                }, {
                                    Header: "Kullanıcı Adı",
                                    accessor: "user_name"
                                }, {
                                    Header: "Mail",
                                    accessor: "mail"
                                }, {
                                    Header: "İşlem Tarihi",
                                    accessor: "islem_tar"
                                }, {
                                    Header: "Cep Telefon",
                                    accessor: "mobile_phone"
                                }
                            ]}
                                defaultPageSize={10}
                                className="-striped -highlight"/>
                        </CardBody>
                    </Card>
                </GridItem>

            </GridContainer>
        );
    }
}

export default withStyles(styles)(UserList);
