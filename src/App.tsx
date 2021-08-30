import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<button
					onClick={() => {
						setCount((prv) => prv + 1);
					}}
				>
					UP
				</button>
				<p>{count}</p>
				<button
					onClick={() => {
						setCount((prv) => prv - 1);
					}}
				>
					DOWN
				</button>
			</div>
		</div>
	);
}

export default App;
