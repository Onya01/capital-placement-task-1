import { Space } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

const AdditionalQuestions = () => {
  return (
    <>
      <Title
        style={{
          color: "#000",
          fontFamily: "Poppins",
          fontSize: "1.5rem",
          fontStyle: "normal",
          fontWeight: 600,
          borderRadius: "1.2rem 1.2rem  0px 0px",
          background: "#D0F7FA",
          marginTop: 0,
          padding: "1.2rem",
        }}
      >
        Additional Questions
      </Title>
      <Space
        style={{
          borderRadius: "1.2rem",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          flexDirection: "column",
          padding: "1rem",
        }}
      ></Space>
    </>
  );
};

export default AdditionalQuestions;
