import React from "react"
import PageHeader from "../src/headers/page_header/page_header"
import { shallow } from "enzyme"

test("example test", () => {
  const wrapper = shallow(<PageHeader>hello i am a header</PageHeader>)
  expect(wrapper.text()).toEqual("hello i am a header")
})
