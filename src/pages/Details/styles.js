import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    padding: 30px 200px;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  margin-top: 45px;
  padding-right: 20px;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 10px;
  }

  > header {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    .title {
      display: flex;
      align-items: center;
      gap: 20px;

      h1 {
        font-size: 36px;
        font-weight: 500;
      }

      span {
        display: flex;
        align-items: center;

        svg {
          color: ${({ theme }) => theme.COLORS.PINK};
          margin-right: 10px;
          font-size: 20px;
        }
      }
    }

    .datas {
      display: flex;
      align-items: center;

      img {
        height: 16px;
        width: 16px;
        margin-right: 8px;
      }

      span {
        display: flex;
        align-items: center;
        margin-right: 10px;

        svg {
          color: ${({ theme }) => theme.COLORS.PINK};
          margin: 0px 8px;
          font-size: 16px;
        }
      }
    }
  }
  > p {
    font-size: 16px;
    margin-top: 40px;
    text-align: justify;
  }
`
