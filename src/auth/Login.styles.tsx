import styled from '@emotion/styled/macro'
import { colors } from '../styles/variables'
import { Typography } from 'antd'

export const LoginScreen = styled.div`
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
`
export const LoginFormWrapper = styled.div`
  width: 100%;
  max-width: 320px;
`
export const LoginHeader = styled.header`
  color: ${colors.gray};
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const LoginFormActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .ant-btn {
    width: 100%;
    margin-bottom: 1.5rem;
  }
  & > span {
    font-size: .875rem;
  }
`
export const LoginFormSubActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  & > div:first-of-type {
    margin-right: .5rem;
  }
`
export const LoginTitle = styled(Typography.Text)`
  color: ${colors.darkGray};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0 2rem 1rem;
`
