interface PlusIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const PlusIcon = (props: PlusIconProps) => {
  return (
    <>
      <svg
        width={props.width ? props.width : "800px"}
        height={props.height ? props.height : "800px"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12H20M12 4V20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default PlusIcon;
