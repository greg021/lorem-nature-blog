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
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ..."
        />
      </Content>
    </Container>
  );
};

export default IndexPage;
