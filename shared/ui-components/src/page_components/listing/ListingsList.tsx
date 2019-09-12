import * as React from "react"
import { Listing } from "../../types"
import lRoute from "../../helpers/localeRoute"
import ImageCard from "../../cards/image_card"
import LinkButton from "../../atoms/LinkButton"

export interface ListingsProps {
  listings: Listing[]
}

const ListingsList = (props: ListingsProps) => {
  const listings = props.listings

  const listItems = listings.map(listing => {
    const imageUrl = listing.image_url || ""

    const listingPath = lRoute(`/listing/${listing.id}`)

    return (
      <article key={listing.id} className="flex flex-row flex-wrap max-w-5xl m-auto mb-12">
        <div className="w-full md:w-6/12 p-3">
          <ImageCard
            title={listing.name}
            imageUrl={imageUrl}
            href={`listing/id=${listing.id}`}
            as={listingPath}
          />
        </div>
        <div className="w-full md:w-6/12 p-3">
          <LinkButton href={`listing/id=${listing.id}`} as={listingPath}>
            See Details
          </LinkButton>
        </div>
      </article>
    )
  })

  return <>{listItems}</>
}

export default ListingsList
