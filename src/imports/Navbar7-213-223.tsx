import svgPaths from "./svg-f3i7qh8du9";
import imgCompanyLogo from "figma:asset/91c6f4bb39b820ba4c5b66890346b0f48d74a13f.png";

function CompanyLogo() {
  return (
    <div className="h-[44px] relative shrink-0 w-[84px]" data-name="Company Logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCompanyLogo} />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Content">
      <CompanyLogo />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p837bc40} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon">
      <Close />
    </div>
  );
}

function Content1() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pl-[20px] pr-[12px] relative size-full">
          <Content />
          <Icon />
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="bg-[#fef8e8] content-stretch flex flex-col items-center relative size-full" data-name="Navbar / 7 /">
      <Content1 />
    </div>
  );
}