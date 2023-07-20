import { FC } from "react"
import { Helmet } from "react-helmet"

export const Support: FC = () => {
  return (
    <>
      <Helmet>
        <title>Support page</title>
      </Helmet>
      <h1 data-testid="page-title">Support</h1>
    </>
  )
}
