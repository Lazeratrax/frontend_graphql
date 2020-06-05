/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AuthQ
// ====================================================

export interface AuthQ_me {
    __typename: "Me";
    id: number;
    name: string;
    email: string;
    avatar: string | null;
    timeZone: number;
    isPasswordSet: boolean;
    isTeacherPreview: boolean;
}

export interface AuthQ {
    me: AuthQ_me | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UploadM
// ====================================================

export interface UploadM_fileUpload {
    __typename: "UploadedFile";
    id: number;
    fileName: string;
    url: string;
    contentLength: number;
    uploadedAt: number;
}

export interface UploadM {
    fileUpload: UploadM_fileUpload;
}

export interface UploadMVariables {
    input: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
