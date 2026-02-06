import { useState, useCallback } from "react";
import Item from "./Item";

// import ảnh từ assets
import aoThunNam from "../assets/img/pictures/aothunNam.jpg";
import aoThunNu from "../assets/img/pictures/aothunNu.jpg";
import quanJean from "../assets/img/pictures/quanjean.jpg";
import vayJean from "../assets/img/pictures/vayJean.jpg";

function UseCallbackDemo() {
    // state chứa danh sách sản phẩm
    const [items, setItems] = useState([
        { id: 1, name: "Áo thun nam", image: aoThunNam },
        { id: 2, name: "Áo thun nữ", image: aoThunNu },
        { id: 3, name: "Quần jean", image: quanJean },
        { id: 4, name: "Váy jean", image: vayJean },
    ]);

    /*
      useCallback giúp:
      - giữ nguyên reference của hàm
      - tránh render lại Item không cần thiết
    */
    const removeItem = useCallback((id) => {
        setItems((prev) =>
            prev.filter((item) => item.id !== id)
        );
    }, []);

    console.log("UseCallbackDemo render");

    return (
        <div style={{ padding: "20px" }}>
            <h2>useCallback Demo </h2>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        onRemove={removeItem}
                    />
                ))}
            </ul>
        </div>
    );
}

export default UseCallbackDemo;
