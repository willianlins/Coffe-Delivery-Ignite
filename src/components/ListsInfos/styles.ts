import { styled } from 'styled-components'

export const ContainerListsInfos = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.625rem;
`

const COLOR_TYPE_SPAN = {
  orange: 'YELLOW-DARK',
  black: 'BASE-TEXT',
  yellow: 'YELLOW',
  purple: 'PURPLE',
}
interface InfoQualityListProps {
  $statuscolor: keyof typeof COLOR_TYPE_SPAN
}

export const InfoQualityList = styled.span<InfoQualityListProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => props.theme.COLORS.BACKGROUND};
  background: ${(props) =>
    props.theme.COLORS[COLOR_TYPE_SPAN[props.$statuscolor]]};
`
