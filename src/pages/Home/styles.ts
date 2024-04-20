import { css, styled } from 'styled-components'

import backgroundBanner from '../../assets/Background.svg'

export const ContainerMain = styled.main``

export const ContainerInfoBanner = styled.div`
  background-image: url(${backgroundBanner});
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContentInfoBanner = styled.div`
  width: 74rem;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const InfoBannerText = styled.div`
  ${({ theme }) => css`
    width: 36.75rem;
    height: 22.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      color: ${theme.COLORS['BASE-TITLE']};
      font-size: ${theme.FONT_SIZE['TITLE-XL']}rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }

    p {
      font-size: ${theme.FONT_SIZE['TEXT-L']}rem;
      color: ${theme.COLORS['BASE-SUBTITLE']};
    }
  `};
`

export const BannerTextLists = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 15rem 1fr;
  gap: 1.25rem 2.5rem;
`

export const ContentListCoffe = styled.section`
  width: 74rem;
  padding: 2rem;
  margin: 0 auto;
  h2 {
    margin-bottom: 3.375rem;
    font-size: ${(props) => props.theme.FONT_SIZE['TITLE-L']}rem;
    color: ${(props) => props.theme.COLORS['BASE-SUBTITLE']};
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    > div {
      margin-bottom: 0.5rem;
    }
  }
`
