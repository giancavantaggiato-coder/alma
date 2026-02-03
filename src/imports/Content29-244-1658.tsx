import svgPaths from "./svg-h7sxin1yt6";
import imgPlaceholderImage from "figma:asset/1a2f10ee0e38d54c8ea34530499f2387791709d8.png";
import imgAvatarImage from "figma:asset/3711e237ee3cf1d73ec177a47641af606e0b9d66.png";
import { BlogPost } from '../data/blogPosts';

function RichText({ content }: { content: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Rich Text">
      <div 
        className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[14px] text-black w-full prose prose-sm max-w-none"
        style={{ fontVariationSettings: "'opsz' 14" }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
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

function Share() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Share">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] min-w-full relative shrink-0 text-[14px] text-black w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Compartilhe este post
      </p>
      <ShareButtons />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Desenho
      </p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Investigação visual
      </p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Prática de atelier
      </p>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
        Percepção
      </p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Tags">
      <Tag />
      <Tag1 />
      <Tag2 />
      <Tag3 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <Share />
      <Tags />
    </div>
  );
}

function Content13({ content }: { content: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <RichText content={content} />
      <Content12 />
    </div>
  );
}

function AvatarContent({ author, role }: { author: string; role: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.6] min-h-px min-w-px relative text-[14px] text-black" data-name="Avatar Content">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {author}
      </p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {role}
      </p>
    </div>
  );
}

function Avatar({ author, role }: { author: string; role: string }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="block max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent author={author} role={role} />
    </div>
  );
}

function Content14({ content, author, role }: { content: string; author: string; role: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <Content13 content={content} />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 1">
            <path d="M0 0.5H335" id="Vector 1" stroke="var(--stroke-0, black)" strokeOpacity="0.15" />
          </svg>
        </div>
      </div>
      <Avatar author={author} role={role} />
    </div>
  );
}

function Container({ content, author, role }: { content: string; author: string; role: string }) {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content14 content={content} author={author} role={role} />
    </div>
  );
}

export default function Content29({ post, onShare }: { post: BlogPost; onShare: (platform: string) => void }) {
  // Converter o objeto content em HTML string
  const contentHtml = [
    ...post.content.introduction,
    post.content.imageCaption ? `<p class="italic text-sm text-gray-600">${post.content.imageCaption}</p>` : '',
    post.content.quote ? `<blockquote class="border-l-4 border-gray-300 pl-4 italic my-6">${post.content.quote}</blockquote>` : '',
    ...post.content.mainContent,
    ...post.content.conclusion
  ].filter(Boolean).map(p => `<p class="mb-4">${p}</p>`).join('');

  return (
    <div className="bg-[#fefbf3] content-stretch flex flex-col items-center px-[20px] py-[64px] relative size-full" data-name="Content / 29 /">
      <Container content={contentHtml} author={post.author.name} role={post.author.role} />
    </div>
  );
}