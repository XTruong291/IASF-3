import { Table } from "antd";
import { useUsers } from "../hooks/useUser"


export const UserPage = () => {
    const { data, isError, isLoading, error } = useUsers();

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
            <Table columns={columns} dataSource={data} />
        </>
    )
}