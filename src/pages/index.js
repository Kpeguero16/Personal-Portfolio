import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const IndexPage = () => {
  return (
      <main style={pageStyles}>
          <h1 style={headingStyles}>
              Welcome to my Portfolio❗ 🌴🐋️
              <br/>
              <span style={headingAccentStyles}>— Website is still in progress ⚒️</span>
          </h1>
          <p style={paragraphStyles}>
              <code style={codeStyles}>Come back soon!</code> to see my most recent projects 😎
          </p>

      </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
