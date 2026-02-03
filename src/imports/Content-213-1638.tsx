function Title() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Title">
      <p className="css-4hzbpn font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[26px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Full name
      </p>
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Job title
      </p>
    </div>
  );
}

export default function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center leading-[1.6] relative size-full text-black" data-name="Content">
      <Title />
      <p className="css-4hzbpn font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
      </p>
    </div>
  );
}