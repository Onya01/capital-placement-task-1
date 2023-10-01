import React from "react";
import { Button, Row } from "antd";
import TextField from "../../../components/textField/TextField";

const Paragraph = (props: any) => {
  const { handleDeleteQuestion, handleSaveQuestion, value, setValue } = props;
  const [saveLoading, setSaveLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  return (
    <>
      <Row>
        <TextField
          label="Question"
          placeholder="Type Here..."
          value={value}
          setValue={setValue}
          error={error}
          setError={setError}
          errorMessage="Question Can Not Be Empty"
        />
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
              fontSize: "1rem",
              fontStyle: "normal",
              fontWeight: "700",
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
              width: "4.6rem",
              height: "2.3rem",
            }}
            onClick={() => {
              setError(false);
              if (value) {
                setSaveLoading(true);
                setTimeout(() => {
                  handleSaveQuestion();
                  setSaveLoading(false);
                }, 500);
              } else {
                setError(true);
              }
            }}
            loading={saveLoading}
          >
            Save
          </Button>
        </Row>
      </Row>
    </>
  );
};

export default Paragraph;
