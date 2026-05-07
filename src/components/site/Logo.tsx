import logo from "@/assets/accelp3-logo.png";

export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return <img src={logo} alt="AccelP3" className={className} />;
}
