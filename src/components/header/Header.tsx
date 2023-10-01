import React from "react";
import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";

const Header: React.FC = () => {
  return (
    <>
      <Row
        style={{
          height: "6rem",
          marginTop: "4rem",
          backgroundColor: "#FFFFFF",
          borderRadius: "0.4rem",
          boxShadow: "0px 2px 19px 0px rgba(0, 0, 0, 0.13)",
        }}
      >
        <Col
          span={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title
            style={{
              color: "#000000",
              fontFamily: "Inter",
              fontSize: "1.4rem",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
            }}
          >
            Program Details
          </Title>
        </Col>
        <Col
          span={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00635B",
          }}
        >
          <Title
            style={{
              color: "#FFFFFF",
              fontFamily: "Inter",
              fontSize: "1.4rem",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
            }}
          >
            Application Form
          </Title>
        </Col>
        <Col
          span={6}
          style={{
            borderRight: "1px solid #C4C4C4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title
            style={{
              color: "#000000",
              fontFamily: "Inter",
              fontSize: "1.4rem",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
            }}
          >
            Workflow
          </Title>
        </Col>
        <Col
          span={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title
            style={{
              color: "#000000",
              fontFamily: "Inter",
              fontSize: "1.4rem",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
            }}
          >
            Preview
          </Title>
        </Col>
      </Row>
    </>
  );
};

export default Header;
