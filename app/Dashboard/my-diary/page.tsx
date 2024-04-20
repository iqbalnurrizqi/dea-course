import Wrapper from "@/app/component/Wrapper";
import CreateDiaryForm from "@/app/component/dasboard/CreateDiaryForm";
import React from "react";

export default function myDiary(): React.ReactElement {
  return (
    <Wrapper title="My-Diary Page">
        <CreateDiaryForm />
    </Wrapper>
  );
}
