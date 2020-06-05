import {useMutation} from '@apollo/client'
import {loader} from 'graphql.macro'
// import {UploadM, UploadMVariables} from './generated'
import {useCallback} from 'react'

export const UPLOAD_FILE = loader('./Upload.graphql')

export function useUploadMutation() {
    const [uploadFile] = useMutation<any, any>(UPLOAD_FILE)
    return useCallback((file: File) => {
        return uploadFile({variables: {input: file}}).then(
            (result) => {
                if (!result.data?.fileUpload) {
                    return Promise.reject(result)
                }
                return result.data.fileUpload
            }
        )
    }, [uploadFile])
}