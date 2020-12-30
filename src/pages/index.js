import * as React from "react"
import Layout from "../components/layout/Layout"
import HomeArea from "../components/home/Home";

// markup

const IndexPage = ({ data }) => {
  return (
    <>
    <Layout>
      <HomeArea />
    </Layout>
    </>
  )
}

export default IndexPage