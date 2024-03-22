import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={1}
    width={476}
    height={124}
    viewBox="0 22 476 124"
    backgroundColor="#585656"
    foregroundColor="#fcfcfc"
    {...props}
  >
    <rect x="6" y="27" rx="3" ry="3" width="88" height="6" /> 
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" /> 
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
  </ContentLoader>
)

export default MyLoader