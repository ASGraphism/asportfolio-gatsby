import * as React from "react"
import Layout from "../components/layout/Layout"
import PresentationArea from "../components/presentation/Presentation";

// markup

const IndexPage = ({ data }) => {
  return (
    <>
    <Layout>
      <PresentationArea />
    </Layout>
    </>
  )
}

export default IndexPage