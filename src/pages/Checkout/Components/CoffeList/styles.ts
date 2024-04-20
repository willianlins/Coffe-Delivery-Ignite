import styled from 'styled-components'

export const ContainerCoffeList = styled.div`
  display: flex;
  justify-content: flex-start;

  padding: 0.25rem;
  img {
    width: 64px;
    height: 64px;
    margin-right: 1.25rem;
  }

  span {
    flex: 1;
    text-align: right;
  }
`

export const CoffeListDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  > div {
    display: flex;
    flex-direction: row;
    gap: 0.625rem;
    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0.25rem 0.5rem;
      border: 0;
      gap: 0.25rem;
      background: ${(props) => props.theme.COLORS['BASE-BUTTON']};
      border-radius: 8px;
      font-size: ${(props) => props.theme.FONT_SIZE['BUTTON-M']}rem;
      line-height: 160%;
      transition:
        color 0.3s,
        background-color 0.3s;
      cursor: pointer;
      svg {
        color: ${(props) => props.theme.COLORS.PURPLE};
      }

      &:hover {
        color: ${(props) => props.theme.COLORS['BASE-SUBTITLE']};
        background: ${(props) => props.theme.COLORS['BASE-HOVER']};
      }
    }
  }
`
