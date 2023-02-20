import React, {FC, useEffect} from "react";
import {TableDataType} from "../TradeTable/models";
import {Form, FormInstance, Input, InputNumber} from "antd";
import {FieldNames, FormItemLayout, ValidateMessages} from "./constants";

interface Props {
    tradeValues: TableDataType;
    setNewValues: React.Dispatch<React.SetStateAction<TableDataType>>;
    setHasErrors: React.Dispatch<React.SetStateAction<boolean>>;
    form: FormInstance<TableDataType>;
}

const AddEditTradeForm: FC<Props> = ({tradeValues, setNewValues, setHasErrors, form}) => {

    // init/update form values
    useEffect(() => {
        if (!tradeValues) {
            // create mode -> reset fields
            form.resetFields();
        } else {
            // edit mode -> initialize fields with existing values
            form.setFieldsValue(tradeValues);
        }
    }, [tradeValues])

    const validateFields = (fieldName: string) => {
        form.validateFields([fieldName])
            .then(() => {
                setHasErrors(false);
            })
            .catch(() => {
                setHasErrors(true);
            })
    }

    const onFieldChange = (fieldName: string, value: any) => {
        setNewValues({...tradeValues, [fieldName]: value});
        validateFields(fieldName);
    }

    return (
        <Form {...FormItemLayout} form={form} style={{maxWidth: 600}} validateMessages={ValidateMessages}>
            <Form.Item
                label="Security Code"
                rules={[{required: true}, {type: 'string', min: 1, max: 5}, {pattern: /[a-zA-Z0-9]+/}]}
                name={FieldNames.securityCode}
                key={FieldNames.securityCode}
                validateFirst
            >
                <Input
                    value={tradeValues?.securityCode}
                    onChange={(e) => onFieldChange("securityCode", e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label={"Trade Price"}
                rules={[{required: true}, {type: 'number', max: 1000000}]}
                name={FieldNames.tradePrice}
                key={FieldNames.tradePrice}
                validateFirst
            >
                <InputNumber
                    style={{width: '100%'}}
                    formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
                    onChange={(value) => onFieldChange("tradePrice", value)}
                />
            </Form.Item>

            <Form.Item
                label={"Trade Volume"}
                rules={[{required: true}, {type: 'number', max: 1000000}]}
                name={FieldNames.tradeVolume}
                key={FieldNames.tradeVolume}
                validateFirst
            >
                <InputNumber
                    style={{width: '100%'}}
                    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
                    onChange={(value) => onFieldChange("tradeVolume", value)}
                />
            </Form.Item>

            <Form.Item
                label="Trade Owner"
                rules={[{required: true}, {type: 'string', min: 2, max: 30}, {pattern: /[a-zA-Z0-9]+/}]}
                name={FieldNames.tradeOwner}
                key={FieldNames.tradeOwner}
                validateFirst
            >
                <Input
                    value={tradeValues?.tradeOwner}
                    placeholder="Name of the owner"
                    onChange={(e) => onFieldChange("tradeOwner", e.target.value)}/>
            </Form.Item>
        </Form>
    )
}

export default AddEditTradeForm;