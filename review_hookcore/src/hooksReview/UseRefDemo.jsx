import { useRef } from "react";

function UseRefDemo() {
    /*
      useRef dùng để lưu tham chiếu đến DOM.
      Việc thay đổi ref sẽ KHÔNG làm component render lại.
    */
    const inputRef = useRef(null);

    // hàm focus vào ô input khi bấm nút
    const handleFocus = () => {
        // current chính là DOM thật của input
        inputRef.current.focus();
        console.log("Đã focus vào input");
    };

    return (
        <div>
            <h2>Use Ref Demo</h2>

            {/* gắn ref để lấy DOM input */}
            <input
                ref={inputRef}
                placeholder="Nhập nội dung..."
            />

            <button onClick={handleFocus}>
                Focus Input
            </button>
        </div>
    );
}

export default UseRefDemo;
