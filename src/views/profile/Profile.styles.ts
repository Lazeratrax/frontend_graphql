
import { colors } from '../../styles/variables'
import styled from '@emotion/styled/macro'

export const PageWrapper = styled.div`
    padding: .5rem 2rem;
    border-bottom: 1px solid ${colors.paleGray}
`
export const ProfileHead = styled.h2`
    color: ${colors.green};
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: .5rem 2rem;
`
export const ProfileBody = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    padding: .5rem 2rem;
`
export const ProfileDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: flex-start;
`
export const ProfileDataMeta = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    color: green;
    font-size: 1rem;
`