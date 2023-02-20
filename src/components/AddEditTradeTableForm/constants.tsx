export const FieldNames = {
    tradeId: 'tradeId',
    securityCode: 'securityCode',
    tradePrice: 'tradePrice',
    tradeVolume: 'tradeVolume',
    tradeOwner: 'tradeOwner',
}

export const FormItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 6},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 14},
    },
};

/* eslint-disable no-template-curly-in-string */
export const ValidateMessages = {
    required: '${label} is required!',
    types: {
        number: '${label} is not a valid number!',
    },
    number: {
        min: "'${label}' cannot be less than ${min}",
        max: "'${label}' cannot be greater than ${max}",
        range: "'${label}' must be between ${min} and ${max} characters",
    },
    string: {
        min: "'${label}' must be at least ${min} characters",
        max: "'${label}' cannot be longer than ${max} characters",
        range: "'${label}' must be between ${min} and ${max} characters",
    },
    pattern: {
        mismatch: "'${label}' must be alphanumeric.",
    },
};
/* eslint-enable no-template-curly-in-string */