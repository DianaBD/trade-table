export const formatDecimalNumber = (value: number) => value && value.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
});

export const formatIntegerNumber = (value: number) =>  value && value.toLocaleString('en-US', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
});