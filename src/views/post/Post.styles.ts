
import { colors } from '../../styles/variables'
import styled from '@emotion/styled/macro'
import { Collapse } from 'antd'

export const CourseItem = styled.div`
  display: flex;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  min-height: 200px;
  max-width: 1080px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  position: relative;
`
export const CourseItemImage = styled.div`
  padding: 1rem 1.5rem;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  flex: 0 0 35%;
  max-width: 340px;
  position: relative;
  & > span {
    color: ${colors.white};
    font-weight: 600;
    font-size: 1rem;
    position: relative;
    z-index: 1;
  }
  &:after {
    background: linear-gradient(180deg, rgba(33, 33, 33, 0) 0%, #212121 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    max-height: 100%;
    content: '';
  }
`
export const CourseItemInfo = styled.div`
  padding: 1.5rem 3.5rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & > h3 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  & > .ant-btn {
    margin-top: 1.25rem;
  }
`
export const CourseItemBadge = styled.div`
  background: rgba(51, 51, 51, 0.4);
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: 1.5rem;
  line-height: 1rem;
  padding: 0 .75rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 1;
  color: ${colors.white};
  .anticon {
    margin-right: .5rem;
    color: ${colors.blue};
  }
`
export const ProgressInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: .5rem;
  position: relative;
  z-index: 1;
  .ant-progress-inner {
    background: rgba(255, 255, 255, 0.1);
  }
`
export const ProgressHint = styled.span`
  white-space: nowrap;
  min-width: 100px;
  margin-left: .5rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: right;
  strong {
    color: ${colors.white};
  }
`
export const CollapsePanel = styled(Collapse.Panel)`
  border-bottom: none !important;
  .ant-collapse-header {
    background: transparent;
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${colors.darkGray} !important;
    padding-left: 0.375rem !important;
  }
  .ant-collapse-content-box {
    padding: 0.375rem;
  }
`
