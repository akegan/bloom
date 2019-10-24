import * as React from "react"
import { HousingCounselor as Counselor } from "types"

// TODO: Figure out how to style this
const LanguageLabel = (language: string) => {
  return (
    <span
      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      key={language}
    >
      {language}
    </span>
  )
}

const HousingCounselor = (props: { counselor: Counselor }) => {
  const counselor = props.counselor
  return (
    <>
      <h3 className="t-alt-sans font-semibold text-gray-800 text-sm pb-3">
        <a href={counselor.website} target="_blank">
          {counselor.name}
        </a>
      </h3>
      <p className="text-sm text-gray-700 pb-3">
        {"Language Services: "}
        {counselor.languages.map(language => LanguageLabel(language))}
      </p>
      <p>
        {counselor.address} <br /> {counselor.citystate}
      </p>
      {counselor.phone && <a href={`tel:+1${counselor.phone}`}>Call {counselor.phone}</a>}
      <br />
      <a href={counselor.website}>Visit {counselor.name}</a>
    </>
  )
}

export default HousingCounselor