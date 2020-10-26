import styled from "styled-components";

export const StyledArticle = styled.article`
  h2 {
    text-align: center;
    text-transform: uppercase;
    margin: 15px 0 0;
  }
  .data {
    font-size: 12px;
    text-align: center;
    margin-bottom: 15px;
  }
  img {
    display: block;
    width: 250px;
    margin: 0 auto;
    border-radius: 5px;
    @media (min-width: 420px) {
      width: 80%;
      max-width: 600px;
    }
  }
  .description {
    margin: 20px 30px 10px;
    text-align: center;
    @media (min-width: 550px) {
      font-size: 18px;
    }
  }
  .star {
    display: flex;
    margin: 0 100px;
    align-items: center;
    img {
      width: 35px;
      margin: 0 10px;
    }
  }
  .age {
    color: ${(props) => (props.adult ? "red" : "yellow")};
    border: ${(props) => (props.adult ? "2px solid red" : "2px solid yellow")};
    border-radius: 50%;
    padding: 5px;
    text-align: right;
  }

  .play {
    padding: 20px;
    display: flex;
    img {
      margin: 0 15px;
      width: 30px;
    }
  }

  .return {
    padding: 8px 15px;
    border-radius: 2px;
    background-color: #373b69;
    font-size: 16px;
    border: none;
    margin: 30px;
    text-decoration: none;
    a {
        color: white;
    }
  }

  @media (min-width: 770px) {
    max-width: 700px;
    margin: 20px auto;
  }
`;
