import svgPaths from "./svg-mmiahjzkj4";
import imgPlaceholderImage from "figma:asset/d7666effadfe2b84fb77cce4ebdf857aeee76bd3.png";
import { BlogPost } from '../data/blogPosts';

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron_right">
          <path d={svgPaths.p1cff2380} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.666667" />
        </g>
      </svg>
    </div>
  );
}

function Content({ category, onBackClick }: { category: string; onBackClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p 
        className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] text-black text-center cursor-pointer hover:opacity-70 transition-opacity" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        onClick={onBackClick}
      >
        Blog
      </p>
      <ChevronRight />
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] text-black text-center" style={{ fontVariationSettings: "'opsz' 14" }}>
        {category}
      </p>
    </div>
  );
}

function ContentTop({ title, category, onBackClick }: { title: string; category: string; onBackClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content Top">
      <Content category={category} onBackClick={onBackClick} />
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[1.2] min-w-full not-italic relative shrink-0 text-[44px] text-black tracking-[0.44px] w-[min-content]">{title}</p>
    </div>
  );
}

function Content1({ author }: { author: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 text-[14px] w-full" data-name="Content">
      <p className="css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Por
      </p>
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        {author}
      </p>
    </div>
  );
}

function Time({ date, readTime }: { date: string; readTime: string }) {
  return (
    <div className="content-stretch flex font-['DM_Sans:Regular',sans-serif] font-normal gap-[8px] items-center relative shrink-0 w-full" data-name="Time">
      <p className="css-ew64yg relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        {date}
      </p>
      <p className="css-ew64yg relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        •
      </p>
      <p className="css-ew64yg relative shrink-0 text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        {readTime}
      </p>
    </div>
  );
}

function Content2({ author, date, readTime }: { author: string; date: string; readTime: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.6] relative shrink-0 text-black w-full" data-name="Content">
      <Content1 author={author} />
      <Time date={date} readTime={readTime} />
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="link">
          <path d={svgPaths.pc015980} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ShareButton() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[64px] shrink-0" data-name="Share Button">
      <Link />
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="LinkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="LinkedIn">
          <path clipRule="evenodd" d={svgPaths.p2b170900} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ShareButton1() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[64px] shrink-0" data-name="Share Button">
      <LinkedIn />
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d={svgPaths.p214d7500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ShareButton2() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[64px] shrink-0" data-name="Share Button">
      <X />
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Facebook">
          <path d={svgPaths.p2ed8fe00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ShareButton3() {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[64px] shrink-0" data-name="Share Button">
      <Facebook />
    </div>
  );
}

function ShareButtons() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Share Buttons">
      <ShareButton />
      <ShareButton1 />
      <ShareButton2 />
      <ShareButton3 />
    </div>
  );
}

function Social() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Social">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Compartilhe este post
      </p>
      <ShareButtons />
    </div>
  );
}

function ContentBottom({ author, date, readTime }: { author: string; date: string; readTime: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content Bottom">
      <Content2 author={author} date={date} readTime={readTime} />
      <Social />
    </div>
  );
}

function SectionTitle({ title, category, author, date, readTime, onBackClick }: { title: string; category: string; author: string; date: string; readTime: string; onBackClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Section Title">
      <ContentTop title={title} category={category} onBackClick={onBackClick} />
      <ContentBottom author={author} date={date} readTime={readTime} />
    </div>
  );
}

function Content3({ title, category, author, date, readTime, onBackClick }: { title: string; category: string; author: string; date: string; readTime: string; onBackClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Content">
      <SectionTitle title={title} category={category} author={author} date={date} readTime={readTime} onBackClick={onBackClick} />
      <div className="aspect-[335/221] relative rounded-[16px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgPlaceholderImage} />
      </div>
    </div>
  );
}

function Container({ title, category, author, date, readTime, onBackClick }: { title: string; category: string; author: string; date: string; readTime: string; onBackClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content3 title={title} category={category} author={author} date={date} readTime={readTime} onBackClick={onBackClick} />
    </div>
  );
}

export default function BlogPostHeader({ post, onBackClick, onShare }: { post: BlogPost; onBackClick: () => void; onShare: (platform: string) => void }) {
  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center px-[20px] py-[64px] relative size-full" data-name="Blog Post Header / 3 /">
      <Container 
        title={post.title} 
        category={post.category} 
        author={post.author.name} 
        date={post.date} 
        readTime={post.readTime} 
        onBackClick={onBackClick} 
      />
    </div>
  );
}