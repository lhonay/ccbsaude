import { useEffect } from "react";
import NextNProgress from "nextjs-progressbar";

import { AuthProvider } from "@/contexts/AuthContext";

// import { SidebarProvider } from "@/contexts/SidebarProvider";
// import { AuthProvider, SidebarProvider } from "@/contexts";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import * as yup from "yup";
import translation from "@/common/locale/yup.pt-br";
yup.setLocale(translation);

import "@/assets/css/bootstrap.min.css";
import "@/assets/css/atlantis.min.css";
import "@/assets/css/demo.css";
import "@/assets/css/login.css";

import "react-confirm-alert/src/react-confirm-alert.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<AuthProvider>
			<NextNProgress
				color="#fff"
				startPosition={0.3}
				stopDelayMs={200}
				height={5}
				showOnShallow={false}
			/>
			<ToastContainer />
			<Component {...pageProps} />
		</AuthProvider>
	);
};

export default MyApp;
