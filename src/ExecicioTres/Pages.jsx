import React from 'react';
import Home from "./Home.jsx";
import PageProdutos from "./PageProdutos.jsx";

const Pages = ({pathname}) => {
	if (pathname.includes('produtos')) {
		return <PageProdutos />
	} else {
		return <Home />
	}
}

export default Pages;