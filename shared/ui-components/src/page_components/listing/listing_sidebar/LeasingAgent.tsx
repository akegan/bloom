import * as React from "react"
import Address from "./SidebarAddress"
import t from "../../../helpers/translator"
import { Listing } from "@bloom/core/src/listings"

interface LeasingAgentProps {
  listing: Listing
}

const LeasingAgent = (props: LeasingAgentProps) => {
  const listing = props.listing

  const phoneNumber = `tel:${listing.leasingAgentPhone.replace(/[-()]/g, "")}`
  const leasingAgentAddress = {
    streetAddress: listing.leasingAgentStreet,
    city: listing.leasingAgentCity,
    state: listing.leasingAgentState,
    zipCode: listing.leasingAgentZip
  }

  return (
    <>
      <h4 className="text-caps-underline">Contact Leasing Agent</h4>

      <p className="text-xl">{listing.leasingAgentName}</p>
      <p className="text-gray-700">{listing.leasingAgentTitle}</p>

      <p className="mt-5">
        <a href={phoneNumber}>Call {listing.leasingAgentPhone}</a>
      </p>
      <p className="text-sm text-gray-700">{t("leasingAgent.dueToHighCallVolume")}</p>

      <p className="my-5">
        <a href={`mailto:${listing.leasingAgentEmail}`}>Email</a>
      </p>

      <Address address={leasingAgentAddress} officeHours={listing.leasingAgentOfficeHours} />
    </>
  )
}

export default LeasingAgent
