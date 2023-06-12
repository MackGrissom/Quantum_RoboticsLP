import Image from 'next/image'
import Layout from '../src/layout/layout'
import HeroHeader from '../src/components/hero_header'
import HomeIntroduce from '../src/components/home_introduce'
import Siderbar from '../src/components/sidebar'
import HomeService from '../src/components/home_service'
import WhyChooseUs from '../src/components/why_choose_us'
import Principles from '../src/components/principles'
import Responsibility from '../src/components/responsibility'
import HomeProject from '../src/components/home_project'
import HomeBlog from '../src/components/home_blog'

export default function Home() {
  return (
    <>
      

      <Layout style={"transparrent"}>
        {/* HERO HEADER */}
        <HeroHeader />
        {/* /HERO HEADER */}
        {/* HOME INTRODUCE */}
        <HomeIntroduce />
        {/* /HOME INTRODUCE */}
        {/* HOME SERVICE */}
        <HomeService />
        {/* /HOME SERVICE */}
        {/* WHY CHOOSE US*/}
        <WhyChooseUs />
        {/* /WHY CHOOSE US*/}
        {/* PRINCIPLES WRAP*/}
        <Principles />
        {/* /PRINCIPLES WRAP*/}
        {/* RESPOSIBILITY*/}
        <Responsibility />
        {/* /RESPOSIBILITY*/}
        {/* HOME PROJECT*/}
        <HomeProject />
        {/* /HOME PROJECT */}
        {/* HOME BLOG */}
        <HomeBlog />
        {/* /HOME BLOG */}
      </Layout>


    </>
  )
}
