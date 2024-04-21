import styled from 'styled-components'

export const ContainerSuccess = styled.div`
  width: 74rem;
  padding: 2rem;
  margin: 3.75rem auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const SuccessLeft = styled.div`
  width: 33rem;

  h2 {
    font-size: ${(props) => props.theme.FONT_SIZE['TITLE-L']}rem;
    color: ${(props) => props.theme.COLORS['YELLOW-DARK']};
  }
  p {
    font-size: ${(props) => props.theme.FONT_SIZE['TEXT-L']}rem;
    color: ${(props) => props.theme.COLORS['BASE-SUBTITLE']};
  }
`

export const SuccessLeftTopics = styled.ul`
  margin-top: 3rem;
  padding: 2.5rem;

  /* border: 1px solid gray; */
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  background:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border: 1px solid transparent;

  li + li {
    margin-top: 2rem;
  }

  p {
    font-size: ${(props) => props.theme.FONT_SIZE['TEXT-M']}rem;
  }
`

export const SuccessRight = styled.div``
