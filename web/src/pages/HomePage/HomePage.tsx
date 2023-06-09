import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home Page" />
      <>
        <ArticlesCell />
      </>
    </>
  )
}

export default HomePage
