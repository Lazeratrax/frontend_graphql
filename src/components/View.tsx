import React from 'react'
import styled from '@emotion/styled/macro'
import { PageHeader } from 'antd'
import { PageHeaderProps } from 'antd/es/page-header'
import { colors } from '../styles/variables'

type StyledProps = {
  padded: boolean
}

type ViewProps = Omit<PageHeaderProps, 'title'> & {
  title?: React.ReactNode;
  padded?: boolean
}

const PageHeaderWrapper = styled.div`
  padding: .5rem 2rem;
  border-bottom: 1px solid ${colors.paleGray};
`
const FullHeight = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background: #FFF;
`
const Content = styled('div')<StyledProps>`
  flex: 1 1 auto;
  padding: ${(p: StyledProps) => p.padded ? '1rem 3rem' : ''};
`
const Subtitle = styled.span`
  margin: -1rem 0 2rem;
  color: ${colors.darkGray};
  z-index: 1;
`

export const View: React.FC<ViewProps> = ({ padded, children, subTitle, ...rest }) => {
  return (
    <FullHeight>
      <PageHeaderWrapper>
        {rest.title && <PageHeader title={rest.title} style={{ padding: 0 }} {...rest}/>}
        {subTitle && <Subtitle>{subTitle}</Subtitle>}
      </PageHeaderWrapper>
      <Content padded={padded ?? true}>
        {children}
      </Content>
    </FullHeight>
  )
}
