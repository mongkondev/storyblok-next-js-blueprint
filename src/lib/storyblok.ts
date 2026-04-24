import Page from '../storyblok/Page'
import TeamMembers from '../storyblok/TeamMembers'
import Testimonials from '../storyblok/Testimonials'
import Testimonial from '../storyblok/Testimonial'
import Cards from '../storyblok/Cards'
import Hero from '../storyblok/Hero'
import Tabs from '../storyblok/Tabs'
import Card from '../storyblok/Card'
import Button from '../storyblok/Button'
import AppBar from '../storyblok/AppBar'
import NavMenuItem from '../storyblok/NavMenuItem'
import NavDropdownItem from '../storyblok/NavDropdownItem'
import Footer from '../storyblok/Footer'
import FooterColumn from '../storyblok/FooterColumn'
import FooterLink from '../storyblok/FooterLink'
import HeroBanner from '../storyblok/HeroBanner'
import ProductGrid from '../storyblok/ProductGrid'
import ProductIcon from '../storyblok/ProductIcon'
import ContactSection from '../storyblok/ContactSection'
import PromotionCard from '../storyblok/PromotionCard'
import SplitHero from '../storyblok/SplitHero'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    teamMembers: TeamMembers,
    testimonials: Testimonials,
    testimonial: Testimonial,
    cards: Cards,
    card: Card,
    hero: Hero,
    tabs: Tabs,
    button: Button,
    appBar: AppBar,
    navMenuItem: NavMenuItem,
    navDropdownItem: NavDropdownItem,
    footer: Footer,
    footerColumn: FooterColumn,
    footerLink: FooterLink,
    heroBanner: HeroBanner,
    productGrid: ProductGrid,
    productIcon: ProductIcon,
    contactSection: ContactSection,
    promotionCard: PromotionCard,
    splitHero: SplitHero,
  },
  apiOptions: {
    /** Set the correct region for your space. Learn more: https:/www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
    region: 'eu',
    /** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
    endpoint: process.env.STORYBLOK_API_BASE_URL
      ? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
      : undefined,
  },
})
