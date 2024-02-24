import { mockUserAccounts } from "src/mock-data/user-data"
import { mockToken } from "src/mock-data/token-data"
import { getLocalItem, setLocalItem, getSessionItem, setSessionItem } from "src/services"

import { redirect } from "react-router-dom"

export const loginService = ({ username, password, rememberUser }) => {
  const account = mockUserAccounts.find((acc) => acc.username === username);
  if (account && account.password === password) {
    if (rememberUser) {
      setLocalItem("loginToken", mockToken)
    } else {
      setSessionItem("loginToken", mockToken)
    }
    return mockToken[0]
  }
  return null
}

export const routeAuthService = ({ redirectPath }) => {
  if (getLocalItem("loginToken") || getSessionItem("loginToken")) {
    return null
  }
  return redirect(redirectPath)
}
export const rememberLoginService = ({ redirectPath }) => {
  if (getLocalItem("loginToken") || getSessionItem("loginToken")) {
    return redirect(redirectPath)
  }
  return null
}