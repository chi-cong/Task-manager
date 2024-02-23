import { mockUserAccounts } from "src/mock-data/user-data"
import { mockToken } from "src/mock-data/token-data"
import { setLocalItem } from "src/services"

export const loginService = ({ username, password, rememberUser }) => {
  const account = mockUserAccounts.find((acc) => acc.username === username);
  if (account && account.password === password) {
    if (rememberUser) {
      setLocalItem("loginToken", mockToken)
    }
    return mockToken[0]
  }
  return null
}