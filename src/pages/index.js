import * as React from "react";
import Layout from "../components/layout/Layout";
import PresentationArea from "../components/presentation/Presentation";
import CreationsArea from "../components/creations/Creations";

// markup

const IndexPage = ({ data }) => {
	return (
		<>
			<Layout>
				<PresentationArea />
				<div className="container" id="creations">
					<CreationsArea />
				</div>
			</Layout>
		</>
	);
};

export default IndexPage;
