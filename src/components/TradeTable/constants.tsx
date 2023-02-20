import {ColumnsType} from "antd/es/table";
import React from "react";
import {TableDataType} from "./models";
import {formatDecimalNumber, formatIntegerNumber} from "./utils";

export const columns: ColumnsType<TableDataType> = [
    {
        title: 'Trade ID',
        dataIndex: 'tradeId',
        key: 'tradeId',
    },
    {
        title: 'Security Code',
        dataIndex: 'securityCode',
        key: 'securityCode',
    },
    {
        title: 'Trade Price($)',
        dataIndex: 'tradePrice',
        key: 'tradePrice',
        render: (value: number) => <>{formatDecimalNumber(value)}</>
    },
    {
        title: 'Trade Volume',
        key: 'tradeVolume',
        dataIndex: 'tradeVolume',
        responsive: ['md'],
        render: (value: number) => <>{formatIntegerNumber(value)}</>
    },
    {
        title: 'Trade Owner',
        key: 'tradeOwner',
        dataIndex: 'tradeOwner',
        responsive: ['lg'],
    },
];

export const ActionTypes = {
    DELETE: 'DELETE',
    EDIT: 'EDIT',
    CREATE: 'CREATE',
}

export const ActionTypeDictionary = {
    [ActionTypes.DELETE]: {
        modalTitle: 'Delete entry',
        modalContent: "Do you want to delete this trade entry?",
    },
    [ActionTypes.EDIT]: {
        modalTitle: 'Edit entry'
    },
    [ActionTypes.CREATE]: {
        modalTitle: 'Create entry'
    },
}

export const screenMedium = 768;