import type {
  AssetContent,
  BlockContent,
  LinkContent,
  RichTextContent,
  Story,
} from '../delivery-api'

export type Content =
  | UnknownContent
  | PageContent
  | TestimonialContent
  | TestimonialsContent
  | CardsContent
  | CardContent
  | HeroContent
  | TabsContent
  | TabContent
  | TeamMembersContent
  | TeamMemberContent
  | ButtonContent
  | AppBarContent
  | NavMenuItemContent
  | NavDropdownItemContent
  | FooterContent
  | FooterColumnContent
  | FooterLinkContent
  | HeroBannerContent
  | ProductGridContent
  | ProductIconContent
  | ContactSectionContent
  | PromotionCardContent

/**
 * When the parsing of a component fails, fall back fack to this component.
 * Parsing could fail for several reasons; for example,
 * 1. You changed the schema of a component without updating the content.
 * 2. You have modeled the content incorrectly in your type alias and parser
 */
export type UnknownContent = BlockContent<{
  component: 'unknown'
}>

export type PageContent = BlockContent<{
  component: 'page'
  header?: AppBarContent | AppBarContent[]
  body: Content[]
  footer?: FooterContent | FooterContent[]
}>

export type BackgroundColor =
  | 'beige'
  | 'white'
  | 'grey'
  | 'purple'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'pink'
  | 'blue'

export type TestimonialContent = BlockContent<{
  component: 'testimonial'
  quote: string
  image?: AssetContent
  name: string
  title: string
  imageBackgroundColor: BackgroundColor
}>

export type TestimonialsContent = BlockContent<{
  component: 'testimonials'
  title: string
  description: string
  testimonials: Content[]
}>

export type CardsContent = BlockContent<{
  component: 'cards'
  description: RichTextContent
  cards: CardContent[]
}>

export type CardContent = BlockContent<{
  component: 'card'
  description: RichTextContent
  icon?: AssetContent
}>

export type HeroContent = BlockContent<{
  component: 'hero'
  image?: AssetContent
  imagePadding: boolean
  textAlignment: 'left' | 'right' | 'center'
  description: RichTextContent
  backgroundColor: BackgroundColor
  buttons: ButtonContent[]
}>

export type TabsContent = BlockContent<{
  component: 'tabs'
  description: RichTextContent
  tabs: TabContent[]
}>

export type TabContent = BlockContent<{
  component: 'tab'
  title: string
  content: Content[]
}>

export type TeamMemberContent = BlockContent<{
  component: 'teamMember'
  name: string
  title: string
  image?: AssetContent
  backgroundColor: BackgroundColor
}>

export type TeamMembersContent = BlockContent<{
  component: 'teamMembers'
  description: RichTextContent
  teamMembers: (Story & {
    content: TeamMemberContent
  })[]
}>

export type ButtonContent = BlockContent<{
  component: 'button'
  text: string
  link?: LinkContent
  color: 'primary' | 'secondary'
}>

export type AppBarContent = BlockContent<{
  component: 'appBar'
  logo?: AssetContent
  logoText?: string
  logo_text?: string
  secondaryLogo?: AssetContent
  secondary_logo?: AssetContent
  menuItems?: NavMenuItemContent[]
  menu_items?: NavMenuItemContent[]
}>

export type NavMenuItemContent = BlockContent<{
  component: 'navMenuItem'
  label: string
  link?: LinkContent
  hasDropdown?: boolean
  has_dropdown?: boolean
  dropdownItems?: NavDropdownItemContent[]
  dropdown_items?: NavDropdownItemContent[]
}>

export type NavDropdownItemContent = BlockContent<{
  component: 'navDropdownItem'
  label: string
  description?: string
  link?: LinkContent
  highlighted?: boolean
}>

export type FooterContent = BlockContent<{
  component: 'footer'
  columns?: FooterColumnContent[]
  bottomText?: string
  bottom_text?: string
}>

export type FooterColumnContent = BlockContent<{
  component: 'footerColumn'
  title: string
  links: FooterLinkContent[]
}>

export type FooterLinkContent = BlockContent<{
  component: 'footerLink'
  label: string
  link?: LinkContent
}>

export type HeroBannerContent = BlockContent<{
  component: 'heroBanner'
  image?: AssetContent
  headline: string
  subtext?: string
  ctaText?: string
  ctaLink?: LinkContent
}>

export type ProductGridContent = BlockContent<{
  component: 'productGrid'
  title?: string
  products: ProductIconContent[]
}>

export type ProductIconContent = BlockContent<{
  component: 'productIcon'
  icon?: AssetContent
  title: string
  link?: LinkContent
  highlighted?: boolean
}>

export type ContactSectionContent = BlockContent<{
  component: 'contactSection'
  title?: string
  lineOa?: string
  line_oa?: string
  phone?: string
  email?: string
}>

export type PromotionCardContent = BlockContent<{
  component: 'promotionCard'
  image?: AssetContent
  title: string
  description?: string
  link?: LinkContent
  badge?: string
}>
