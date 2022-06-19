import React from "react";
import {
    Card,
    Table,
    Button
} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import LinkButton from "../../components/linkButton";
export default function Category() {
    const title = "Class By Department"
    const addButton = (
        <Button>
            <PlusOutlined />
            Add
        </Button>
    )

    const dataSource = [
        {
            "parentId": "0",
            "_id": "1",
            "name": "Food & Grocery",
            "__v": 0
        },
        {
            "parentId": "0",
            "_id": "2",
            "name": "Clothing, Shoe, Jewelry & Watches",
            "__v": 0
        },
        {
            "parentId": "0",
            "_id": "3",
            "name": "Pharmacy",
            "__v": 0
        },
        {
            "parentId": "0",
            "_id": "4",
            "name": "Pet Supplies",
            "__v": 0
        },
        {
            "parentId": "0",
            "_id": "5",
            "name": "Electronics",
            "__v": 0
        },
        {
            "parentId": "0",
            "_id": "6",
            "name": "Toys, Kids & Baby",
            "__v": 0
        },
        {
            "parentId": "0",
            "_id": "7",
            "name": "Music, Movies & Games",
            "__v": 0
        },
        {
            "parentId": "0",
            "_id": "8",
            "name": "Books",
            "__v": 0
        },
        {
            "parentId": "0",
            "_id": "9",
            "name": "Beauty & Health",
            "__v": 0
        }
    ];

    const columns = [
        {
            title: 'Class Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Operation',
            render: () => (
                <span>
                    <LinkButton>Modify</LinkButton>
                    <LinkButton>Check</LinkButton>
                </span>
            )
        }
    ];

    return <div>
        <Card
            title={title}
            extra={addButton}
        >
            <Table
                bordered
                rowKey="_id"
                dataSource={dataSource}
                columns={columns}
            />
        </Card>
    </div>
}