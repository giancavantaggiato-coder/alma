import svgPaths from "./svg-8hw365q5w1";
import imgCompanyLogo from "figma:asset/3530cd741ed4641cce367422608ca56d8cecd116.png";

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

export default function Content1() {
  return (
    <div className="content-stretch flex items-center justify-between pl-[64px] pr-[12px] relative size-full" data-name="Content">
      <Content />
      <Icon />
    </div>
  );
}