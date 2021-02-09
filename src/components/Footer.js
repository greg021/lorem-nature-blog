import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  FooterWrapper,
  FooterSocialIcons,
  FooterSocialWrapper,
  P,
} from "../elements";

export const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        facebook: file(relativePath: { eq: "facebook.svg" }) {
          publicURL
        }
        linkedIn: file(relativePath: { eq: "linkedIn.svg" }) {
          publicURL
        }
        twitter: file(relativePath: { eq: "twitter.svg" }) {
          publicURL
        }
        github: file(relativePath: { eq: "github.svg" }) {
          publicURL
        }
      }
    `
  );

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="Facebook logo" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedIn.publicURL} alt="Linkedin logo" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.twitter.publicURL} alt="Twitter logo" />
          </a>
          <a
            href="https://greg021.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.github.publicURL} alt="Github logo" />
          </a>
        </FooterSocialIcons>
        <P size="xSmall" color="dark3">
          &copy; 2020 | Greg Jones
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  );
};
