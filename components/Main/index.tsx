import React from "react"
import Product from "./Product"

const Main = () => {
	return (
		<div className="min-w-full min-h-screen bg-slate-200 space-y-10 flex flex-col items-center">
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
		</div>
	)
}

export default Main