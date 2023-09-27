import React, { useEffect } from "react";
import { Button, Checkbox, Col, ConfigProvider, Row } from "antd";
import TextField from "../../../components/inputs/TextField";
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";

const DropDownQuestion = (props: any) => {
  const {
    handleDeleteQuestion,
    handleSaveQuestion,
    value,
    setValue,
    choices,
    setChoices,
    other,
    setOther,
  } = props;

  const [choiceOptions, setChoiceOptions] = React.useState("");
  const [tempChoicesArray, setTempChoiceArray] = React.useState<Array<String>>(
    []
  );

  const handleAddOptions = () => {
    // console.log("Handle Add Options");
    // console.log("choiceOptions : ", choiceOptions);
    if (choiceOptions.length === 0) {
      console.log("option is empty");
    } else {
      if (tempChoicesArray.length > 0) {
        setTempChoiceArray([...tempChoicesArray, choiceOptions]);
      } else {
        setTempChoiceArray([choiceOptions]);
      }
    }
    setChoiceOptions("");
  };

  useEffect(() => {
    if (choices.length > 0) {
      handleSaveQuestion();
      // console.log("Use Effect is called");
    }
  }, [choices, handleSaveQuestion]);
  return (
    <>
      <Row>
        <TextField
          label="Question"
          placeholder="Type Here..."
          value={value}
          setValue={setValue}
        />

        {tempChoicesArray.length > 0 &&
          tempChoicesArray.map((value: any, index: any) => (
            <Row
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "25px",
              }}
              key={index}
            >
              <Col
                span={2}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <UnorderedListOutlined
                  style={{ fontSize: "1.5rem", marginTop: "2rem" }}
                />
              </Col>
              <Col span={20}>
                <TextField
                  label="Choice"
                  placeholder="Type Here..."
                  value={value}
                />
              </Col>
              <Col
                span={2}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              ></Col>
            </Row>
          ))}
        <Row
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <Col
            span={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <UnorderedListOutlined
              style={{ fontSize: "1.5rem", marginTop: "2rem" }}
            />
          </Col>
          <Col span={20}>
            <TextField
              label="Choice"
              placeholder="Type Here..."
              value={choiceOptions}
              setValue={setChoiceOptions}
            />
          </Col>
          <Col
            span={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <PlusOutlined
              style={{
                fontSize: "1.5rem",
                marginTop: "2.5rem",
              }}
              onClick={handleAddOptions}
            />
          </Col>
        </Row>
        <Row
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "green",
              },
            }}
          >
            <Checkbox
              style={{
                color: " #000",
                fontFamily: "Poppins",
                fontSize: "0.9rem",
                fontStyle: "normal",
                fontWeight: "400",
              }}
              checked={other}
              onChange={() => {
                setOther(!other);
              }}
            >
              Enable “Other” option
            </Checkbox>
          </ConfigProvider>
        </Row>

        <Row
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            style={{
              color: "#A80000",
              fontFamily: "Poppins",
              fontSize: "0.9rem",
              fontStyle: "normal",
              fontWeight: "600",
            }}
            onClick={handleDeleteQuestion}
          >
            ❌ Delete question
          </Button>
          <Button
            type="primary"
            style={{
              borderRadius: "5px",
              background: "#087B2F",
              width: "4.5rem",
              height: "2.2rem",
            }}
            onClick={() => {
              setChoices(tempChoicesArray);
            }}
          >
            Save
          </Button>
        </Row>
      </Row>
    </>
  );
};

export default DropDownQuestion;
