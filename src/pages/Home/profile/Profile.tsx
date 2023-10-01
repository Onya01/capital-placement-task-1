import { Space } from "antd";
import Title from "antd/es/typography/Title";
import FormBlock from "../../../components/form/Form";

const Profile = (props: any) => {
  const {
    educationMandatory,
    setEducationMandatory,
    educationShow,
    setEducationShow,

    experienceMandatory,
    setExperienceMandatory,
    experienceShow,
    setExperienceShow,

    resumeMandatory,
    setResumeMandatory,
    resumeShow,
    setResumeShow,
  } = props;
  return (
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
        Profile
      </Title>
      <Space
        style={{
          borderRadius: "1.3rem",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          flexDirection: "column",
          padding: "1.2rem",
        }}
      >
        <FormBlock
          label="Education"
          displayAdditionalOptions={true}
          displayAdditionalOptionsText="Mandatory"
          checkboxValue={educationMandatory}
          setCheckboxValue={setEducationMandatory}
          sliderValue={educationShow}
          setSliderValue={setEducationShow}
        />
        <FormBlock
          label="Experience"
          displayAdditionalOptions={true}
          displayAdditionalOptionsText="Mandatory"
          checkboxValue={experienceMandatory}
          setCheckboxValue={setExperienceMandatory}
          sliderValue={experienceShow}
          setSliderValue={setExperienceShow}
        />
        <FormBlock
          label="Resume"
          displayAdditionalOptions={true}
          displayAdditionalOptionsText="Mandatory"
          checkboxValue={resumeMandatory}
          setCheckboxValue={setResumeMandatory}
          sliderValue={resumeShow}
          setSliderValue={setResumeShow}
        />
      </Space>
    </>
  );
};

export default Profile;
