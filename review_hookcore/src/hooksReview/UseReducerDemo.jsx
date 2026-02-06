import { useReducer } from "react";

/*
  reducer là nơi xử lý thay đổi state
  mỗi lần dispatch được gọi thì reducer sẽ chạy lại
*/
function reducer(state, action) {
    // log để xem reducer nhận được gì mỗi lần dispatch
    console.log("Reducer chạy:", action.type, " | State cũ:", state);

    switch (action.type) {
        case "INCREMENT":
            return state + 1;

        case "DECREMENT":
            return state - 1;

        case "RESET":
            return 0;

        default:
            return state;
    }
}

function UseReducerDemo() {
    const [count, dispatch] = useReducer(reducer, 0);

    // log để xem component render lại khi state thay đổi
    console.log("Component render, count =", count);

    return (
        <div>
            <h2>useReducer Demo</h2>
            <p>Count: {count}</p>

            {/* mỗi lần bấm nút sẽ dispatch một action */}
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                +
            </button>

            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                -
            </button>

            <button onClick={() => dispatch({ type: "RESET" })}>
                Reset
            </button>
        </div>
    );
}

export default UseReducerDemo;
