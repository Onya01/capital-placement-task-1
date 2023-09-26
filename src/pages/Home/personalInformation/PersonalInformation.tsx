import { Space } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import FormBlock from "../../../components/formBlock/FormBlock";

const PersonalInformation = () => {
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
        Personal Information
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
      >
        <FormBlock label="First Name"/>
        <FormBlock label="Last Name" />
        <FormBlock label="Email" />
        <FormBlock
          label="Phone"
          displayAdditionalOptions={true}
          displayAdditionalOptionsText="Internal"
        />
        <FormBlock
          label="Nationality"
          displayAdditionalOptions={true}
          displayAdditionalOptionsText="Internal"
        />
        <FormBlock
          label="Current Residence "
          displayAdditionalOptions={true}
          displayAdditionalOptionsText="Internal"
        />
        <FormBlock
          label="ID Number"
          displayAdditionalOptions={true}
          displayAdditionalOptionsText="Internal"
        />
        <FormBlock
          label="Date of Birth "
          displayAdditionalOptions={true}
          displayAdditionalOptionsText="Internal"
        />
        <FormBlock
          label="Gender"
          displayAdditionalOptions={true}
          displayAdditionalOptionsText="Internal"
        />
      </Space>
    </>
  );
};

export default PersonalInformation;
