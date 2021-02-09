import styled from "styled-components";

export const PostWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 3 / 5;
  background-color: ${(props) => props.theme.colors.light2};
  padding: ${(props) =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${(props) => props.theme.shadows.shadow1};
  z-index: 10;

  h2,
  h3,
  h4,
  hr {
    margin: 1.25rem 0 0 0;
    color: ${(props) => props.theme.colors.dark1};
  }

  hr {
    color: ${(props) => props.theme.colors.dark3};
  }

  p {
    margin: 1rem 0 0 0;
    line-height: 1.5rem;
    color: ${(props) => props.theme.colors.dark2};
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 4 / span 6;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: ${(props) =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
  }
`;
