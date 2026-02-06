import { useEffect, useState } from "react";

function UseEffectDemo() {
    const [count, setCount] = useState(0);

    // useEffect dùng để xử lý các việc xảy ra SAU khi component render
    // ở đây là cập nhật title của trình duyệt

    useEffect(() => {
        console.log("UseEffect count =", count);
        document.title = `Count: ${count}`;
    }, [count]);

    // khi count thay đổi thì effect này sẽ chạy lại

    return (
        <div>
            <h2>useEffect Demo</h2>

            <p>Count: {count}</p>

            {/* thay đổi state → useEffect chạy */}
            <button onClick={() => setCount(count + 1)}>Increase</button>

        </div>
    );
}

export default UseEffectDemo;
