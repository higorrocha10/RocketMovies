import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 110px auto auto;
  grid-template-areas:
    "header"
    "content";

  main {
    grid-area: content;
    padding: 30px 200px;

    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 40px 0px;

      > h1 {
        font-size: 32px;
        font-weight: 500;
      }

      a {
        display: flex;
        align-items: center;

        color: ${({ theme }) => theme.COLORS.BLACK};
        padding: 10px 35px;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.COLORS.PINK};

        svg {
          margin-right: 8px;
          color: ${({ theme }) => theme.COLORS.BLACK};
          font-size: 18px;
        }
      }
    }
  }
`

export const Content = styled.div`
  width: 100%;
  height: 80vh;

  padding-right: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 10px;
  }
`
