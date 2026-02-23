interface LogoProps {
  size?: number;
}

export const Logo = ({ size = 32 }: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="16" fill="#000000" />
      <path
        d="M25 70V30H35L55 55V30H65V70H55L35 45V70H25Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};
