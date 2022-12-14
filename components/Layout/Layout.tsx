import AuthContextProvider from "context/AuthContextProvider"
import React, { FC } from "react"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
interface Iprop {
	children: JSX.Element
}
// Todo: bring header  to layout
const Layout: FC<Iprop> = ({ children }) => {
	return (
		<div className="flex flex-row w-full bg-slate-200 font-serif">
			<>
				<NavBar />
				<div className="w-full">{children}</div>
			</>
		</div>
	)
}

export default Layout
