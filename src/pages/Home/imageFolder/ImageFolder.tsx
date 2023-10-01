import React from "react";
import { Button, Space } from "antd";
import Title from "antd/es/typography/Title";
import { UploadOutlined } from "@ant-design/icons";

const ImageFolder = (props: any) => {
  const { setCoverImage } = props;
  const [file, setFile] = React.useState("");
  const handleChange = (e: any) => {
    try {
      setFile(URL.createObjectURL(e.target.files[0]));
      setCoverImage(URL.createObjectURL(e.target.files[0]));
    } catch (e) {
      console.log("No File Selected");
    }
  };
  const handleClick = () => {
    document.getElementById("upload-tag")?.click();
  };

  return (
    <>
      <input type="file" onChange={handleChange} id="upload-tag" hidden />
      {file.length === 0 && (
        <>
          <Title
            style={{
              color: "#000000",
              fontFamily: "Poppins",
              fontSize: "1.6rem",
              fontStyle: "normal",
              fontWeight: 700,
              borderRadius: "1.3rem 1.3rem  0px 0px",
              background: "#D0F7FA",
              marginTop: 0,
              padding: "1.3rem",
            }}
          >
            Upload cover image
          </Title>
          <Space
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "1.3rem",
              display: "flex",
              alignItems: "stretch",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Space
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "6px",
                border: "1px dashed #000000",
                boxShadow: "3px 3px 9px 0px rgba(190, 190, 190, 0.13)",
                height: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                margin: "2.6rem",
                padding: "10px",
              }}
              onClick={handleClick}
            >
              <UploadOutlined style={{ fontSize: "3rem" }} />
              <Title
                style={{
                  color: "#000000",
                  fontFamily: "Poppins",
                  fontSize: "2rem",
                  fontStyle: "normal",
                  fontWeight: "700",
                }}
              >
                Upload Cover Image
              </Title>
              <Title
                style={{
                  color: "#979797",
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: "600",
                }}
              >
                16:9 ratio is recommended. Max image size 1mb
              </Title>
            </Space>
          </Space>
        </>
      )}
      {file.length > 0 && (
        <Space
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          onClick={handleClick}
        >
          <img
            src={file}
            alt="Uploaded File"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "1.3rem 1.3rem  0px 0px",
            }}
          />
          <Button
            type="text"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: " #A80000",
              fontFamily: "Poppins",
              fontSize: "2rem",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "1.6rem",
              marginBottom: "0.7rem",
            }}
          >
            ❌ Delete & re-upload
          </Button>
        </Space>
      )}
    </>
  );
};

export default ImageFolder;
