import {Button, Card, CardBody, Col, Row} from "reactstrap";
import React from "react";
import * as PropTypes from "prop-types";
import {toast} from "react-toastify";


function PluginPlaceHolderCard({plugin}) {
    const {
        name, description, author, longDescription, icon, url
    } = plugin;

    return (
        <Card>
            <CardBody>
                <Row>
                    <Col lg={3} className="d-none d-md-block">
                        <img style={{width: "100%"}}
                             src={icon ? icon : require("../../assets/img/brand/logo_symbol.png")}/>
                    </Col>
                    <Col lg={6} sm={12} md={6}>
                        <h3>{description}</h3>

                        <p style={{
                            textOverflow: "...",
                            overflow: "hidden",
                            maxHeight: "9.0em",
                            lineHeight: "1.8em"
                        }}>{longDescription}</p>

                        <p>By {author}</p>
                    </Col>
                    <Col lg={3} md={3}>
                        <Button color={"primary mb-2"}>Activate</Button>
                        <Button color={"link p-sm-2 p-lg-0"}
                                onClick={(e) => url ? window.open(url) : toast.error("Url not specified for details")}>More
                            Details</Button>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

PluginPlaceHolderCard.propTypes = {
    plugin: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        longDescription: PropTypes.string.isRequired,
        icon: PropTypes.string,
        repo: PropTypes.string.isRequired,
        bugs: PropTypes.string,
    })
}

export default PluginPlaceHolderCard