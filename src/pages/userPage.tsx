import { Button, Table } from "antd";
import { useUsers } from "../hooks/useUser"
import { useState } from "react";


export const UserPage = () => {
    const { data, isError, isLoading, error, refetch, isFetching } = useUsers();
    const [tableParams, setTableParams] = useState({
        current: 1,
        pageSize: 10,
    })


    const handleTableChange = (pagination) => {
        setTableParams({
            current: pagination.current,
            pageSize: pagination.pageSize,
        })

    }

    if (isLoading) {
        return <h3 style={{ textAlign: "center", marginTop: "20px" }}>Đang tải dữ liệu bài viết...</h3>;
    }

    // 2. Xử lý trạng thái Lỗi
    if (isError) {
        return <h3 style={{ color: "red", textAlign: "center" }}>Lỗi: {error.message}</h3>;
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Post',
            dataIndex: 'body',
            key: 'body',
        },
    ];

    return (
        <>
            <Button onClick={() => refetch()} loading={isFetching} type="primary" >Refetch</Button>
            <Table pagination={{
                current: tableParams.current,
                pageSize: tableParams.pageSize,
                showSizeChanger: true,
            }} 
            onChange={handleTableChange} columns={columns} dataSource={data} />
        </>
    )
}