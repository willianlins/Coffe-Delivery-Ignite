import { styled } from 'styled-components'

import backgroundBanner from '../../assets/Background.svg'

export const ContainerInfoBanner = styled.main`
  background-image: url(${backgroundBanner});
  height: 34rem;
`

export const ContentInfoBanner = styled.div`
  width: 74rem;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const InfoBannerText = styled.div``
