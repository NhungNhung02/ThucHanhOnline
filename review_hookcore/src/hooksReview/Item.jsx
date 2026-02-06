import { memo } from "react";

function Item({ item, onRemove }) {
    console.log("Item render:", item.name);

    return (
        <li
            style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "8px",
            }}
        >
            <img
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                style={{
                    objectFit: "cover",
                    borderRadius: "6px",
                }}
            />

            <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontWeight: "500" }}>
                    {item.name}
                </p>
            </div>

            {/* callback được gọi từ component con */}
            <button
                onClick={() => onRemove(item.id)}
                style={{
                    padding: "6px 12px",
                    border: "none",
                    background: "#ff4d4f",
                    color: "#fff",
                    borderRadius: "6px",
                    cursor: "pointer",
                }}
            >
                Xóa
            </button>
        </li>
    );
}

export default memo(Item);
