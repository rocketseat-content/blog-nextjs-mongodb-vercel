import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostViews = ({ children }: Props) => {
  return <small className="text-lg">{children}</small>;
};

export default PostViews;
