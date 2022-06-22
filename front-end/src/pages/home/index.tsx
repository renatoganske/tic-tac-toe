import React from "react";
import { Form } from "@unform/web";
import { MainContent } from "./styles";
import Input from "../../components/input";
import Button from "../../components/button";

const Home = () => {
  return (
    <MainContent>
      <Form
        onSubmit={() => {
          console.log("Voce clicou no form");
        }}
      >
        <Input name="name" />
        <Button buttonType="submit" label="START" />
      </Form>
    </MainContent>
  );
};

export default Home;
