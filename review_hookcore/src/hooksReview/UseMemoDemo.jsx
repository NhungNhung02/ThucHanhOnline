import { useState, useMemo } from "react";
// useState: dùng để lưu state (search)
// useMemo: dùng để ghi nhớ kết quả tính toán (danh sách đã lọc)

// import hình ảnh sản phẩm --> với vite thì import
import aoThunNam from "../assets/img/pictures/aoThunNam.jpg";
import aoThunNu from "../assets/img/pictures/aothunNu.jpg";
import quanJean from "../assets/img/pictures/quanJean.jpg";
import vayJean from "../assets/img/pictures/vayJean.jpg";

function UseMemoDemo() {
    // State lưu nội dung người dùng nhập vào ô search
    const [search, setSearch] = useState("");

    // Danh sách sản phẩm gốc 
    // Dùng useState để React quản lý dữ liệu này
    const [products] = useState([
        { id: 1, name: "Áo thun nam", image: aoThunNam },
        { id: 2, name: "Áo thun nữ", image: aoThunNu },
        { id: 3, name: "Quần jean", image: quanJean },
        { id: 4, name: "Váy jean", image: vayJean },
    ]);

    /*
      useMemo:
      - Dùng để ghi nhớ kết quả filter sản phẩm
      - Chỉ chạy lại khi:
          + search thay đổi hoặc products thay đổi
      - Nếu không có useMemo:
          + mỗi lần component render lại +React sẽ filter lại từ đầu → tốn hiệu năng
    */
    const filteredProducts = useMemo(() => {
        // Console log để kiểm tra:
        // Khi nào React thực sự chạy lại đoạn filter này
        console.log("Đang filter sản phẩm...");

        // Lọc danh sách sản phẩm theo từ khóa search
        return products.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, products]);
    return (
        <div style={{ padding: 20 }}>
            <h2>UseMemoDemo</h2>

            {/* 
              Input search:
              - value lấy từ state search -mỗi lần gõ → setSearch → component render lại
            */
            }
            <input
                type="text"
                placeholder="Tìm sản phẩm..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ padding: 8, marginBottom: 20 }}
            />

            {/* 
              Hiển thị danh sách sản phẩm đã được filter
              filteredProducts là kết quả do useMemo trả về
            */}
            <div style={{ display: "flex", gap: 20 }}>
                {filteredProducts.map((item) => (
                    <div key={item.id} style={{ textAlign: "center" }}>
                        {/* Hiển thị hình ảnh sản phẩm */}
                        <img
                            src={item.image}
                            alt={item.name}
                            width={120}
                            style={{ borderRadius: 8 }}
                        />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UseMemoDemo;
