import UTIL_TRANSLATOR from "@/utils/translator.util";
import { message, theme } from "antd";
import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

export interface CustomTextProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  color?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  hoverColor?: string;
  cursor?: string;
  clipboard?: string;
  underline?: boolean;
  link?: boolean;
  ellipsis?: boolean;
}

const CustomText: React.FC<PropsWithChildren<CustomTextProps>> = (props) => {
  const handleClipboard = (text: string) => {
    clipBoard(text);
  };
  return (
    <CustomTextStyle
      {...props}
      onClick={(e) => {
        props.onClick && props.onClick(e);
        props.clipboard && handleClipboard(props.clipboard);
      }}
    >
      {props?.children}
    </CustomTextStyle>
  );
};

export default CustomText;

const CustomTextStyle = styled.div<CustomTextProps>`
  width: ${(props) => UTIL_TRANSLATOR.translatePxValue(props.width)};
  height: ${(props) => UTIL_TRANSLATOR.translatePxValue(props.height)};

  color: ${(props) => props.color || "#343a40"};
  font-size: ${(props) => props.fontSize || 14}px;
  font-weight: ${(props) =>
    UTIL_TRANSLATOR.translateWeightValue(props.fontWeight || 400)};
  cursor: ${(props) => props?.cursor};
  ${(props) =>
    props.hoverColor &&
    css`
      &:hover {
        color: ${props.hoverColor || "black"};
      }
    `}
  ${(props) =>
    props.clipboard &&
    css`
      cursor: default;
      &:hover {
        color: ${props.hoverColor || "black"};
      }
    `}
  text-decoration:${(props) => props.underline && "underline"};
  /* elipsis */
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      display: block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `}

  ${({ link }) =>
    css`
      color: ${link && theme.getDesignToken().colorPrimary};
      text-decoration: ${link ? "underline" : "none"};
      cursor: ${link ? "pointer" : "unset"};
    `}
`;

const clipBoard = async (text: string): Promise<boolean> => {
  if (!navigator.clipboard) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.position = "fixed";

    document.body.appendChild(textarea);
    // focus() -> 사파리 브라우저 서포팅
    textarea.focus();
    // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
    textarea.select();
    // 흐름 5.
    document.execCommand("copy");
    // 흐름 6.
    document.body.removeChild(textarea);
    message.success("클립보드에 저장이 완료되었습니다.");

    return true;
  } else {
    const result: boolean = await navigator.clipboard
      .writeText(text)
      .then(() => {
        message.success("클립보드에 저장이 완료되었습니다.");
        return true;
      })
      .catch(() => {
        return false;
      });
    return result;
  }
};
