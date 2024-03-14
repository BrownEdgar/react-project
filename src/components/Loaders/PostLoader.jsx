import React from "react"
import ContentLoader from "react-content-loader"

const PostLoader = (props) => (
  <ContentLoader
    speed={1}
    width={1000}
    rtl
    backgroundOpacity={0.6}
    height={170}
    viewBox="0 0 1000 160"
    backgroundColor="grey"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="0" y="0" rx="12" ry="12" width="980" height="160" />
  </ContentLoader>
)

export default PostLoader

