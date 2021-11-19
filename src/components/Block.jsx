import React from "react"

const Block = ({
  children,
  style,
  row,
  h2,
  direction,
  column,
  justify,
  alignItems,
}) => {
  return (
    <section className="container" style={style}>
      {h2 ? (
        <h2 style={{}} className="uheader">
          {h2}{" "}
        </h2>
      ) : null}
      <div
        className={`row row--${direction}`}
        style={{
          flexDirection: `${direction}!important`,
          justifyContent: justify,
          alignItems: alignItems,
        }}
      >
        {children}
      </div>
    </section>
  )
}

export default Block
