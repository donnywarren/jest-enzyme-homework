import React from "react"
import { shallow } from "enzyme"

import PasswordValidator from "./PasswordValidator"

describe("PasswordValidator component", () => {

  let component

  beforeEach(() => {
    component = shallow(<PasswordValidator />)
  })

  it("should have updated state for username", () => {
    component.find(".user-name").simulate("change", { target: { value: "Shay" } })
    expect(component.state("userName")).toBe("Shay")
  })

  it("should have updated state for password", () => {
    component.find(".password").simulate("change", { target: { value: "secret" } })
    expect(component.state("password")).toBe("secret")
  })

  it("should have updated state for password", () => {
    component.find(".confirm-password").simulate("change", { target: { value: "secret2" } })
    expect(component.state("passwordConfirm")).toBe("secret2")
  })

  it("should have updated state for valid", () => {
    component.find("button").simulate("click")
    expect(component.state("valid")).toBe(true)
  })

  it("should have updated state for warning message", () => {
    component.find("p").simulate("change", { target: { value: "true" } })
    expect(component.state("valid")).toBe(true)
  })

})