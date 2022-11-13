import AuthContextProvider from "context/AuthContextProvider"
import React, { FC } from "react"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
interface Iprop {
	children: JSX.Element
}
const Layout: FC<Iprop> = ({ children }) => {
	return (
		<div className="flex flex-row w-full bg-slate-100">
			<AuthContextProvider>
				<>
					<NavBar />
					<div className="w-full">{children}</div>
				</>
			</AuthContextProvider>
		</div>
	)
}

export default Layout
