import { ContainerListsInfos, InfoQualityList } from './styles'
import React from 'react'

interface ListsInfosProps {
  $statuscolor: 'orange' | 'black' | 'yellow' | 'purple'
  children?: React.ReactNode
  icon: React.ReactNode
}

export function ListsInfos({ $statuscolor, children, icon }: ListsInfosProps) {
  return (
    <ContainerListsInfos>
      <InfoQualityList $statuscolor={$statuscolor}>{icon}</InfoQualityList>
      {children}
    </ContainerListsInfos>
  )
}
