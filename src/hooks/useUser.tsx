import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../api/useApi";

export const useUsers = () => {
    return useQuery({
        queryKey: ["posts"], // Khóa nhận dạng để quản lý cache
        queryFn: getUsers, // Hàm gọi API đã định nghĩa ở bước 1
    });
};