import { useState, useMemo } from "react";

// import hình ảnh
import aoThunNam from "../assets/img/pictures/aoThunNam.jpg";
import aoThunNu from "../assets/img/pictures/aothunNu.jpg";
import quanJean from "../assets/img/pictures/quanJean.jpg";
import vayJean from "../assets/img/pictures/vayJean.jpg";

function UseMemoDemo() {
    const [search, setSearch] = useState("");

    // Danh sách sản phẩm
    const [products] = useState([
        { id: 1, name: "Áo thun nam", image: aoThunNam },
        { id: 2, name: "Áo thun nữ", image: aoThunNu },
        { id: 3, name: "Quần jean", image: quanJean },
        { id: 4, name: "Váy jean", image: vayJean },
    ]);

    /*
      useMemo:
      - Ghi nhớ danh sách sản phẩm đã lọc
      - CHỈ chạy lại khi search hoặc products thay đổi
      - Tránh filter lại không cần thiết
    */
    const filteredProducts = useMemo(() => {
        console.log("Đang filter sản phẩm...");

        return products.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, products]);

    return (
        <div style={{ padding: 20 }}>
            <h2>UseMemoDemo</h2>

            <input
                type="text"
                placeholder="Tìm sản phẩm..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ padding: 8, marginBottom: 20 }}
            />

            <div style={{ display: "flex", gap: 20 }}>
                {filteredProducts.map((item) => (
                    <div key={item.id} style={{ textAlign: "center" }}>
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
