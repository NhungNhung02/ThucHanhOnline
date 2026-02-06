import { useState } from "react";

function useStateDemo() {
    // useState dùng để lưu trữ dữ liệu cho  component và sẽ thay đổi khhi component render lại
    const [count, setcount] = useState(0);
    console.log("Component render, count =", count);

    // tăng giá trị count 
    const increase = () => {
        setcount(count + 1);
    };

    //giảm giá trị count xuống 
    const decrease = () => {
        setcount(count - 1);
    };

    return (
        <div>
            <h2> UseState Demo</h2>
            {/* Hiện thị các giá trị state hiện tại */}

            <button onClick={increase}>Nút + </button>
            <button onClick={decrease}>Nút - </button>

        </div>
    );
}

export default useStateDemo;