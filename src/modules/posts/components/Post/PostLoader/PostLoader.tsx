import { IBaseComponent } from "shared/interfaces";
import * as C from "../post.styles";
import { TextLoader } from "./postLoader.styles";

export const PostLoader = ({ style, ...rest }: IBaseComponent) => {
  return (
    <C.Container {...rest} style={{ height: 300, ...style }}>
      <C.Header />

      <C.ContentConainer>
        <TextLoader width={50} />

        <TextLoader width={40} />

        <TextLoader width={80} style={{ marginTop: 50 }} />
      </C.ContentConainer>
    </C.Container>
  );
};
