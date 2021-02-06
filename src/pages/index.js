import React from "react";
import { Container, FeatureImage, Content, ContentCard } from "../components";

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="March 22, 2020"
          title="Test title Of Blog"
          slug="/test"
          excerpt="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </Content>
    </Container>
  );
};

export default IndexPage;
