import React, {FC, useEffect, useId, useState} from "react";
import {Button, Form, Modal, Space, Table, Tag} from 'antd';
import {StyledContainer, StyledHeader, StyledTitle} from "./styles";
import {data} from "./dummyData";
import {TableDataType} from "./models";
import AddEditTradeForm from "../AddEditTradeTableForm";
import {ActionTypeDictionary, ActionTypes, columns, screenMedium} from "./constants";
import { useWindowSize } from "usehooks-ts";

const TradeTable: FC = () => {
    const [idCount, setIdCount] = useState(4)
    const [openModal, setOpenModal] = useState(false);
    const [tableColumns, setTableColumns] = useState(columns);
    const [tableData, setTableData] = useState(data);
    const [currentEntry, setCurrentEntry] = useState<TableDataType>();
    const [actionType, setActionType] = useState<string>();
    const [hasErrors, setHasErrors] = useState(false);
    const {width} = useWindowSize();

    const [form] = Form.useForm();

    useEffect(() => {
        addActionButtons()
    }, [width, form]);

    const addActionButtons = () => {
        const columnsWithActions = [
            ...columns,
            {
                title: 'Action',
                key: 'action',
                render: (_: any, record: TableDataType) => (
                    <Space size="small" direction={width <= screenMedium ? "vertical" : "horizontal"}>
                        <a onClick={() => startAction(record, ActionTypes.EDIT)}>Edit</a>
                        <a onClick={() => startAction(record, ActionTypes.DELETE)}>Delete</a>
                    </Space>
                ),
            },
        ];
        setTableColumns(columnsWithActions);
    }

    const startAction = (record: TableDataType, actionType: string) => {
        setCurrentEntry(record);
        setActionType(actionType);
        setOpenModal(true);
    }

    const handleCancelAction = () => {
        cleanupAfterAction();
    };

    const handleConfirmDelete = () => {
        const updatedData: TableDataType[] = tableData.filter(entry => entry.tradeId !== currentEntry.tradeId);
        setTableData(updatedData);
        cleanupAfterAction()
    };

    const handleConfirmEdit = () => {
        // check all input fields are valid before applying the changes
        form.validateFields()
            .then(() => {
                const updatedData: TableDataType[] = tableData.map(entry => (entry.tradeId !== currentEntry.tradeId ? entry : currentEntry));
                setTableData(updatedData);
                cleanupAfterAction()
            })
            .catch(() => {
            })
    };

    const handleConfirmCreate = () => {
        // check all input fields are valid before applying the changes
        form.validateFields()
            .then(() => {
                const id = idCount;
                const newEntry: TableDataType = {...currentEntry, tradeId: id, key: id}
                const updatedData: TableDataType[] = [...tableData, newEntry];
                setTableData(updatedData);
                setIdCount(idCount + 1);
                cleanupAfterAction();
            })
            .catch(() => {
            });
    };

    const cleanupAfterAction = () => {
        setActionType('')
        setOpenModal(false);
        setCurrentEntry(null);
        setHasErrors(false);
    }

    const actionHandlerDictionary = {
        [ActionTypes.DELETE]: handleConfirmDelete,
        [ActionTypes.EDIT]: handleConfirmEdit,
        [ActionTypes.CREATE]: handleConfirmCreate,
    }

    return (
        <StyledContainer>
            <StyledHeader>
                <StyledTitle>Sample Trades</StyledTitle>
                <Button
                    type="primary"
                    onClick={() => startAction(null, ActionTypes.CREATE)}
                    style={{alignSelf: 'flex-end'}}
                >
                    + Add new trade
                </Button>
            </StyledHeader>
            <Table columns={tableColumns} dataSource={tableData}/>
            <Modal
                title={actionType && ActionTypeDictionary[actionType].modalTitle}
                open={openModal}
                onOk={actionType && actionHandlerDictionary[actionType]}
                okButtonProps={{disabled: hasErrors}}
                onCancel={handleCancelAction}
                width={600}
            >
                {actionType === ActionTypes.DELETE
                    ? ActionTypeDictionary[actionType].modalContent
                    : (
                        <AddEditTradeForm
                            tradeValues={currentEntry}
                            setNewValues={setCurrentEntry}
                            setHasErrors={setHasErrors}
                            form={form}
                        />
                    )
                }
            </Modal>
        </StyledContainer>
    )
}

export default TradeTable;