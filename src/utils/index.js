export const formatApiErrors = errors => {
    return Object.keys(errors).map(error => ([
        errors[error][0]
    ]))
}